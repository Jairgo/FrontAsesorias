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

const AsesoriaInfoModal = (props) => {
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
                        {props.materiaInfo.subject}
                    </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, color: Colors.black, marginRight: 5, fontWeight: 'bold' }}>
                            Horario:
                        </Text>
                        <Text style={{ fontSize: 14, color: Colors.black }}>
                            {props.materiaInfo.startHour} - {props.materiaInfo.endHour}
                        </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, color: Colors.black, marginRight: 5, fontWeight: 'bold' }}>
                            Asesor:
                        </Text>
                        <Text style={{ fontSize: 14, color: Colors.black }}>
                            {props.materiaInfo.asesor.nombre} {props.materiaInfo.asesor.apellido_paterno} {props.materiaInfo.asesor.apellido_materno}
                        </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, color: Colors.black, marginRight: 5, fontWeight: 'bold' }}>
                            Lugar:
                        </Text>
                        <Text style={{ fontSize: 14, color: Colors.black }}>
                            {props.materiaInfo.lugar}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default AsesoriaInfoModal;

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