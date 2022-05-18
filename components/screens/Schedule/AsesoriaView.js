import react, { useState } from "react";
import {
    View,
    Text,
    Pressable,
    StyleSheet,
} from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';

import Colors from "../../constants/Colors";


/**
 * Componente AsesoriaView
 * @param {showInfo, startHour, endHour, place} props 
 * props.showInfo: funcion, callback para mostrar el modal de informacion de la asesoria
 * props.startHour: string, hora de inicio de la asesoria en formato 12hrs
 * props.endHour: string, hora de fin de la asesoria en formato 12hrs
 * props.place: string, lugar en el que se llevara la asesoria
 * @returns JSX.Element, Componente que muestra información general de una asesoria en el horario
 */
const AsesoriaView = (props) => {
    return (
        <View style={{ ...styles.viewContainer, backgroundColor: Colors.orange }}>
            <View style={styles.iconContainer}>
                <Pressable
                    onPress={() => props.showInfo()}
                    style={({ pressed }) => [ {
                        borderRadius: 10,
                        overflow: 'hidden',
                        opacity: pressed ? 0.5 : 1,
                    } ]}
                >
                    <Text style={{ width: 60, textAlign: 'center' }}>
                        <FontAwesome5 name={"user"} color={"white"} size={50} solid />
                    </Text>
                </Pressable>
            </View>
            <View style={styles.contentContainer}>
                <Text style={{ ...styles.subjectHour, fontSize: 22 }}>
                    {props.startHour} - {props.endHour}
                </Text>
                <Text style={{
                    color: 'white'
                }}>
                    Lugar: {props.place}
                </Text>
            </View>
        </View>
    );
};

export default AsesoriaView;

const styles = StyleSheet.create({
    viewContainer: {
        padding: 15,
        borderRadius: 15,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    contentContainer: {
        width: '100%',
        marginLeft: 15,
        justifyContent: 'center'
    },
    subjectHour: {
        fontSize: 14,
        color: Colors.white,
    },
    subjectName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.white,
    }
});