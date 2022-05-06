import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import AsesorView from "./AsesorView";


// function SolicitudAsesoria() {
const SolicitudAsesoria = ({ navigation }) => {

    let Asesores = [
        { asesorName: "Adelaida Piñero", asesorCarrera: "Ing. Civil", asesorSemestre: "1ro" },
        { asesorName: "Daniel Diaz", asesorCarrera: "Ing. Industrial para la dirección", asesorSemestre: "2do" },
        { asesorName: "Jose-Luis Soria", asesorCarrera: "Ing. Mecatrónica", asesorSemestre: "3ro" },
        { asesorName: "Fabiola Segui", asesorCarrera: "Ing. En sistemas y TI", asesorSemestre: "4to" },
        { asesorName: "Jeronimo Arevalo", asesorCarrera: "Ing. Ambiental", asesorSemestre: "5to" },
        { asesorName: "Maria-Ines Jaime", asesorCarrera: "Ing. Biomédica", asesorSemestre: "6to" },
        { asesorName: "Raúl Revuelta", asesorCarrera: "Ing. En animación digital", asesorSemestre: "7mo" },
        { asesorName: "Maria Arnaiz", asesorCarrera: "Ing. En dirección de negocios", asesorSemestre: "8vo" },
        { asesorName: "Gerardo Macias", asesorCarrera: "Ing. En sistemas y TI", asesorSemestre: "9no" },
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
                            asesorSemestre={asesor.asesorSemestre}
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

