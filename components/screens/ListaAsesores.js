import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import AsesorView from "./AsesorView";


function SolicitudAsesoria() {

    let Asesores = [
        { asesorName: "Adelaida Piñero", asesorCarrera: "Ing. Civil" },
        { asesorName: "Daniel Diaz", asesorCarrera: "Ing. Industrial para la dirección" },
        { asesorName: "Jose-Luis Soria", asesorCarrera: "Ing. Mecatrónica" },
        { asesorName: "Fabiola Segui", asesorCarrera: "Ing. En sistemas y TI" },
        { asesorName: "Jeronimo Arevalo", asesorCarrera: "Ing. Ambiental" },
        { asesorName: "Maria-Ines Jaime", asesorCarrera: "Ing. Biomédica" },
        { asesorName: "Raúl Revuelta", asesorCarrera: "Ing. En animación digital" },
        { asesorName: "Maria Arnaiz", asesorCarrera: "Ing. En dirección de negocios" },
        { asesorName: "Gerardo Macias", asesorCarrera: "Ing. En sistemas y TI" },
    ];

    return (
        <View style={styles.screen}>
            <Text style={styles.tituloText}>
                Asesores
            </Text>
            <ScrollView>
                {
                    Asesores.map((asesor, idx) => (
                        <AsesorView
                            key={idx}
                            asesorName={asesor.asesorName}
                            asesorCarrera={asesor.asesorCarrera}
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

