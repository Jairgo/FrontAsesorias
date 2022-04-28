import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';
import { NativeBaseProvider, TextArea } from 'native-base';


function SolicitudAsesoria() {

    return (
        <NativeBaseProvider>
            <View style={styles.screen}>
                <Text style={styles.tituloText}>{Strings.seleccionarHorario}</Text>
                <Text style={styles.descripcionText}>Describe el tema que te gustaría revisar:</Text>
                <TextArea color={Colors.negroColor} bg={Colors.naranjaSecundarioColor} h={40} placeholder="Ingresa información acerca del tema que te gustaría revisar" w="100%" maxW="350" />
                <TouchableOpacity
                    style={styles.siguienteButton}
                    underlayColor='#fff'>
                    <Text style={styles.siguienteText} >{Strings.nextButton}</Text>
                </TouchableOpacity>
            </View>
        </NativeBaseProvider>

    );
}

function TextoAmplio() {
    return (
        <NativeBaseProvider>
            <TextArea h={20} placeholder="Ingresa información acerca del tema que te gustaría revisar" w="75%" maxW="300" />
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
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
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: Colors.naranjaColor
    },
    descripcionText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    }
});

export default SolicitudAsesoria;

