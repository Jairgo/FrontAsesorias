import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import AsesorView from "./AsesorView";
import axios from 'axios';

// Vista para mostrar la lista de asesores, obtenida de la base de datos en el backend
// Propiedades:
// - asesores: lista de asesores
// - carreras: lista de carreras
// - navigation: objeto de navegación
// - setAsesores: función para actualizar la lista de asesores
// - setCarreras: función para actualizar la lista de carreras

const SolicitudAsesoria = ({ navigation }) => {
    const [asesores, setAsesores] = useState([]);
    const [carreras, setCarreras] = useState([]);

    const getData = () => {
        let endpoints = [
            'http://becasdeploy.pythonanywhere.com/asesores/',
            'http://becasdeploy.pythonanywhere.com/carreras/'
        ];

        // axios.all(endpoints.map(endpoint => axios.get(endpoint)))
        //     .then(axios.spread((asesores, carreras) => {
        //         setAsesores(asesores.data);
        //         setCarreras(carreras.data);
        //     }))
        //     .catch(err => {
        //         console.log(err);
        //     }
        //     );

        Promise.all(endpoints.map(endpoint => axios.get(endpoint))).then(([{ data: asesores }, { data: carreras }]) => {
            setAsesores(asesores)
            setCarreras(carreras)
        }).catch(err => {
            console.log(err);
        }
        );
    }

    useEffect(() => {
        getData();
    }, []);

    const findCarrera = (idCarrera) => {
        if (carreras.length > 0 && carreras !== undefined && idCarrera !== undefined && idCarrera !== null) {
            let carrera = carreras.find(e => e.id === idCarrera);
            return carrera.nombre;
        } else {
            return "-";
        }
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.tituloText}>
                Asesores
            </Text>
            <ScrollView>
                {
                    asesores.map((asesor) => (
                        <AsesorView
                            key={asesor.id}
                            asesor={asesor}
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
        paddingTop: 30,
        paddingBottom: 50
    },
    tituloText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.darkGray,
    }
});

export default SolicitudAsesoria;

