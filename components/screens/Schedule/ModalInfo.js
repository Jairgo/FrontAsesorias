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

/**
 * Componente InfoModal
 * @param {close, materiaInfo} props 
 * props.close: function, callback para cerrar el modal de informacion
 * props.materiaInfo: Object, contiene informacion de la materia para mostrar
 *  - reserved: boolean, indica si el horario ya tiene algun alumno registrado
 *  - subject: string, nombre de la materia asociada a la asesoria
 *  - startHour: string, hora de inicio de la asesoria en formato 12hrs
 *  - endHour: string, hora de fin de la asesoria en formato 12hrs
 *  - students: array of objects, alumnos inscritos en la asesoria
 *    - nombre: string, nombre del alumno inscrito
 *    - semestre: integer, semestre que cursa el alumno
 *  - topics: array of strings, temas relacionados con la asesoria
 *  - maxTopics: integer, numero maximo de temas que puede tener la asesoria
 *  - maxStudents: integer, numero maximo de alumnos que pueden inscribirse a la asesoria
 *  - lugar: string, lugar de la asesoria
 * @returns JSX.Element, modal de informacion de una asesoria
 */
const InfoModal = (props) => {
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
                        {props.materiaInfo.reserved ? props.materiaInfo.subject : "No reservada"}
                    </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, color: Colors.black, marginRight: 5, fontWeight: 'bold' }}>
                            Horario:
                        </Text>
                        <Text style={{ fontSize: 14, color: Colors.black }}>
                            {props.materiaInfo.startHour} - {props.materiaInfo.endHour}
                        </Text>
                    </View>
                    {
                        props.materiaInfo.reserved ? (
                            <View style={styles.infoElementsContainer}>
                                <Text style={styles.text}>
                                    Alumnos inscritos: 
                                </Text>
                                <View style={{ 
                                    ...styles.infoElementsContainer, 
                                    height: 120,
                                    backgroundColor: Colors.extraLightOrange,
                                    padding: 10,
                                    borderBottomRightRadius: 10,
                                    borderBottomLeftRadius: 10,
                                }}>
                                    <ScrollView>
                                        {props.materiaInfo.students.map((alumno, idx) => (
                                            <View key={idx}>
                                                <View style={styles.studentNameContainer}>
                                                    <Text style={styles.studentName}>
                                                        {alumno.nombre}
                                                    </Text>
                                                    <Text style={{ flex: 1.2 }}>
                                                        {alumno.semestre}º Sem.
                                                    </Text>
                                                </View>
                                            </View>
                                        ))}
                                    </ScrollView>
                                </View>
                                <Text style={styles.text}>
                                    Temas:
                                </Text>
                                <View style={{
                                    ...styles.infoElementsContainer, 
                                    height: 120,
                                    backgroundColor: Colors.extraLightOrange,
                                    padding: 10,
                                    borderBottomRightRadius: 10,
                                    borderBottomLeftRadius: 10,
                                }}>
                                    <ScrollView>
                                        {props.materiaInfo.topics.map((tema, idx) => (
                                            <View key={idx}>
                                                <Text>- {tema} </Text>
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
                    {
                        props.materiaInfo.reserved
                          ? <View style={styles.bottomContainer}>
                                <Text style={styles.bottomContainerText}>
                                    Limite temas: {props.materiaInfo.maxTopics}
                                </Text>
                                <Text style={styles.bottomContainerText}>
                                    Limite alumnos: {props.materiaInfo.maxStudents}
                                </Text>
                            </View>
                          : <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15, color: Colors.black, marginRight: 5, fontWeight: 'bold' }}>
                                    Lugar: 
                                </Text>
                                <Text style={{ fontSize: 14, color: Colors.black }}>
                                    {props.materiaInfo.lugar}
                                </Text>
                            </View>
                    }

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
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
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
        bottom: 0,
        marginTop: 20,
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
        fontSize: 17,
        marginTop: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: Colors.orange,
        color: Colors.white,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingVertical: 5,
    },
    infoElementsContainer: {
        display: 'flex',
        width: '100%',
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