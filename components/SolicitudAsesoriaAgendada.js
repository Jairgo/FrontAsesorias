import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';

function SolicitudAsesoriaAgendada() {

    return (
        <View style={styles.screen}>
            <Image
                source={{
                    uri: 'https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-orange.png',
                }}
            />
            <Text style={styles.tituloText}>¡Listo, tu asesoría ha sido agendada!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    siguienteButton: {
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:12,
        paddingBottom:12,
        backgroundColor: Colors.naranjaColor,
        borderRadius:10,
    },
    siguienteText:{
        color:'#fff',
        textAlign:'center',
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
    },
});

export default SolicitudAsesoriaAgendada;

