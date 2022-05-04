import react, { useState } from "react";

import {
    View,
    Text,
    Pressable,
    ScrollView,
    StyleSheet,
} from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';

import Colors from "../../constants/Colors";

const InfoModal = (props) => {
    const alumnos = [
        { nombre: "Erick Saúl", semestre: 6 },
        { nombre: "Erick Saúl", semestre: 6 },
        { nombre: "Erick Saúl", semestre: 6 },
        { nombre: "Erick Saúl", semestre: 6 },
    ];

    const temas = [
        "Tema 1",
        "Tema 2",
        "Tema 3",
        "Tema 4",
        "Tema 5",
    ];

    return (
        <View style={styles.screenContainer}>
            <View style={styles.container}>
                <Pressable 
                    style={styles.closeIcon}
                    onPress={() => props.close()}
                >
                    <FontAwesome5 name={"times"} color={"black"} size={16} solid />
                </Pressable>
                <View style={styles.contentContainer}>
                    <Text style={styles.subjectName}>
                        {props.materiaInfo.nombre}
                    </Text>
                    <Text>
                        Horario: {props.materiaInfo.horaInicio} - {props.materiaInfo.horaFin}
                    </Text>
                    {
                        props.materiaInfo.reservada ? (
                            <View style={styles.infoElementsContainer}>
                                <Text style={styles.text}>
                                    Alumnos inscritos: {alumnos.length}
                                </Text>
                                <View style={{ ...styles.infoElementsContainer, height: 120 }}>
                                    <ScrollView>
                                        {alumnos.map((alumno, idx) => (
                                            <View key={idx}>
                                                <View style={styles.studentNameContainer}>
                                                    <Text style={styles.studentName}>
                                                        {alumno.nombre}
                                                    </Text>
                                                    <Text style={{ flex: 1 }}>
                                                        {alumno.semestre}º Sem.
                                                    </Text>
                                                </View>
                                            </View>
                                        ))}
                                    </ScrollView>
                                </View>
                                <Text style={styles.text}>
                                    Número de temas: {temas.length}
                                </Text>
                                <View style={{...styles.infoElementsContainer, height: 120}}>
                                    <ScrollView>
                                        {temas.map((tema, idx) => (
                                            <View
                                                key={idx}
                                            >
                                                <Text> {tema} </Text>
                                            </View>
                                        ))}
                                    </ScrollView>
                                </View>
                            </View>
                        ) : (
                            <View>
                                <Text style={styles.noInfoText}>
                                    No apartada aún
                                </Text>
                            </View>
                        )
                    }
                    <View style={styles.bottomContainer}>
                        <Text style={styles.bottomContainerText}>
                            Limite temas: {props.materiaInfo.limiteTemas}
                        </Text>
                        <Text style={styles.bottomContainerText}>
                            Limite alumnos: {props.materiaInfo.limiteAlumnos}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default InfoModal;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    container: {
        width: '80%',
        height: 'auto',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: "center",
    },
    closeIcon: {
        position: 'absolute',
        right: 20,
        top: 15,
    },
    contentContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    subjectName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    infoContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    bottomContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 0,
        bottom: 0,
    },
    bottomContainerText: {
        width: '50%',
        fontSize: 16,
        color: Colors.black,
    },
    noInfoText: {
        fontSize: 16,
        fontWeight: 'bold',
        opacity: 0.3,
        marginVertical: 20
    },
    text: {
        fontSize: 16,
        marginVertical: 8
    },
    infoElementsContainer: {
        display: 'flex',
        width: '100%'
    },
    studentNameContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    studentName: {
        fontSize: 15,
        fontWeight: 'bold',
        flex: 4,
    }
});