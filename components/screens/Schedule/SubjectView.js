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
 * Componente SubjectView
 * @param {reserved, showInfo, startHour, endHour, subjectName, place} props 
 * - reserved: boolean, indica si la asesoria esta reservada o no
 * - showInfo: function, callback para mostrar la informacion de la asesoria
 * - startHour: string, hora de inicio de la asesoria en formato 12hrs
 * - endHour: string, hora de fin de la asesoria en formato 12hrs
 * - subjectName: string, nombre de la materia relacionada con la asesoria
 * - place: string, lugar de la asesoria
 * @returns JSX.Element, componente visual que muestra informacion general de una asesoria
 */
const SubjectView = (props) => {
    return (
        <View style={{...styles.viewContainer, backgroundColor: props.reserved ? Colors.orange : Colors.lightOrange}}>
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
                        <FontAwesome5 name={props.reserved ? "user-lock" : "user"} color={"white"} size={50} solid />
                    </Text>
                </Pressable>
            </View>
            <View style={styles.contentContainer}>
                <Text style={{...styles.subjectHour, fontSize: !props.reserved ? 22 : 14}}>
                    {props.startHour} - {props.endHour}
                </Text>
                {
                    props.reserved
                     ? <Text style={styles.subjectName}>
                            {props.subjectName}
                        </Text>
                     : <></>
                }
                <Text style={{
                    color: 'white'
                }}>
                    Lugar: {props.place}
                </Text>
            </View>
        </View>
    );
};

export default SubjectView;

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