import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import AsesorView from "./AsesorView";
import axios from 'axios';

// Vista para mostrar la lista de asesores, obtenida de la base de datos en el backend
// Propiedades:
// - asesores: lista de asesores
// - navigation: objeto de navegación
// - setAsesores: función para actualizar la lista de asesores

const SolicitudAsesoria = ({ navigation }) => {
    const [asesores, setAsesores] = useState([]);
    useEffect(() => {
        async function getAsesores() {
            try {
                const asesores = await axios.get('http://becasdeploy.pythonanywhere.com/asesores/');
                setAsesores(asesores.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAsesores();
    }, []);

    return (
        <View style={styles.screen}>
            <Text style={styles.tituloText}>
                Asesores
            </Text>
            <ScrollView>
                {
                    // TODO: Agregar ID unico para cada asesor desde la base de datos
                    asesores.map((asesor, idx) => (
                        <AsesorView
                            key={idx}
                            asesorName={asesor.nombre}
                            // TODO: Hay que agregar la carrera como campo de asesor en la base de datos
                            asesorCarrera={asesor.apellido_paterno + " " + asesor.apellido_materno} 
                            asesorSemestre={asesor.semestre}
                            navigation={navigation}
                        />
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 30
    },
    tituloText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.darkGray,
    }
});

export default SolicitudAsesoria;

