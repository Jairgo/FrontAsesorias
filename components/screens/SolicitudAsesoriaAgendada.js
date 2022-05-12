import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';
import { VStack, Box, NativeBaseProvider } from 'native-base';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

function SolicitudAsesoriaAgendada({ route, navigation }) {
    const { asesor, materiaId, materiaNombre, horarioId, horarioNombre, dia, lugar } = route.params;

    useEffect(() => {
        async function postAsesoria() {
            try {
                const response = await axios.post(`http://becasdeploy.pythonanywhere.com/asesorias/`, {
                    estado: 1,
                    evaluacion: 'Desde APP',
                    fecha: '2022-05-25',
                    horario: horarioId,
                    asesor: 1,
                    materia: materiaId,
                    lugar: lugar
                });
                if (response.status === 201) {
                    console.log(`Haz agregado una nueva asesoria: ${JSON.stringify(response.data)}`);
                } else {
                    console.log(`Error al agregar la asesoria: ${JSON.stringify(response.data)}`);
                }
            } catch (error) {
                console.log(error);
            }
        }
        postAsesoria();
    }, []);

    return (
        <NativeBaseProvider>
            <View style={styles.screen}>
                <Feather name="check-circle" size={180} color={Colors.naranjaColor} />
                <Text style={styles.tituloText}>¡Listo, tu asesoría ha sido agendada!</Text>
                <Box border="1" borderRadius="md">
                    <VStack space="1" >
                        <Box px="2" py="2" borderWidth="1" rounded="lg" borderColor={Colors.naranjaColor}>
                            <VStack space="3" >
                                <Text>
                                    <Text style={styles.boldText}>  Materia: </Text>
                                    <Text> {materiaNombre}</Text>
                                </Text>
                                <Text>
                                    <Text style={styles.boldText}>  Día: </Text>
                                    <Text> {dia}</Text>
                                </Text>
                                <Text>
                                    <Text style={styles.boldText}>  Hora: </Text>
                                    <Text> {horarioNombre}</Text>
                                </Text>
                                <Text>
                                    {/* TODO: Agregar lugar en el serializer del back */}
                                    <Text style={styles.boldText}>  Lugar: </Text>
                                    <Text> {lugar}</Text>
                                </Text>
                                <Text>
                                    <Text style={styles.boldText}>  Asesor: </Text>
                                    <Text> {asesor}</Text>
                                </Text>
                            </VStack>
                        </Box>
                    </VStack>
                </Box>

            </View>
        </NativeBaseProvider>

    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    siguienteButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: Colors.naranjaColor,
        borderRadius: 10,
    },
    siguienteText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    tituloText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: Colors.naranjaColor
    },
    descripcionText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },
    boldText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.naranjaColor
    },
});

export default SolicitudAsesoriaAgendada;

