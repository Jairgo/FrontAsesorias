import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';
import { VStack, Box, NativeBaseProvider } from 'native-base';
import { Feather } from '@expo/vector-icons';

function SolicitudAsesoriaAgendada({ route, navigation }) {
    const { asesor} = route.params;

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
                                    <Text> Ecuaciones diferenciales</Text>
                                </Text>
                                <Text>
                                    <Text style={styles.boldText}>  Día: </Text>
                                    <Text> 20 de mayo de 2022</Text>
                                </Text>
                                <Text>
                                    <Text style={styles.boldText}>  Hora: </Text>
                                    <Text> 10:00 hrs</Text>
                                </Text>
                                <Text>
                                    <Text style={styles.boldText}>  Lugar: </Text>
                                    <Text> Salón cisco</Text>
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
    boldText:{
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.naranjaColor
    },
});

export default SolicitudAsesoriaAgendada;

