import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';

function SolicitudAsesoriaAgendada() {

    return (
        <View style={styles.screen}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../assets/avatar.png')} style={styles.image}  />
                <Text style={styles.tituloText}>Daniel Díaz</Text>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 70
    },
    tituloText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        color: Colors.negroColor,
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 1000,
    },
});

export default SolicitudAsesoriaAgendada;

