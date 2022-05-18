import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import AsesorView from "./AsesorView";
import axios from 'axios';

/**
 * Vista para mostrar la lista de asesores, obtenida de la base de datos en el backend
 * @param {StackNavigator} navigation - Objeto de navegación para navegar entre pantallas 
 * @returns render de la vista, una lista de asesores con su información
 */
const SolicitudAsesoria = ({ navigation }) => {
    const [asesores, setAsesores] = useState([]);

    const getData = () => {
        let endpoints = [
            'http://becasdeploy.pythonanywhere.com/asesores/'
        ];

        Promise.all(endpoints.map(endpoint => axios.get(endpoint))).then(([{ data: asesores }]) => {
            setAsesores(asesores)
        }).catch(err => {
            console.log(err);
        }
        );
    }

    useEffect(() => {
        getData();
    }, []);

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

