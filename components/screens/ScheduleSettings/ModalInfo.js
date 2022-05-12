import react from "react";

import {
    View,
    Text,
    Pressable,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';

import Colors from "../../constants/Colors";
import axios from "axios";
import { endpoints } from "../../constants/Backend";

const ModalInfo = (props) => {

    const week = [
        { day: 'Lunes'},
        { day: 'Martes'},
        { day: 'Miercoles'},
        { day: 'Jueves'},
        { day: 'Viernes' },
        { day: 'Sabado'},
        { day: 'Domingo'},
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
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        Desea Eliminar el horario:
                    </Text>
                    <Text style={{fontSize: 17}}>
                        {props.materiaInfo.startHour} - {props.materiaInfo.endHour}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'baseline', marginTop: 14}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                            Día: 
                        </Text>
                        <Text style={{fontSize: 17, marginLeft: 5}}>
                            {week[props.day].day}
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'baseline', marginTop: 14}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                            Lugar: 
                        </Text>
                        <Text style={{fontSize: 17, marginLeft: 5}}>
                            {props.materiaInfo.place}
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => {props.close()}}
                            style={styles.ButtonStyle}
                        >
                            <FontAwesome5 name={"times"} color={"white"} size={16} solid/>
                            <Text style={styles.textStyle}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                props.close();
                                axios.delete(
                                    endpoints.horarioAsesorView(props.materiaInfo.id)
                                ).then((response) => {
                                    props.onRemove(props.materiaInfo.id);
                                }, (error) => {
                                    console.log(error);
                                })
                            }}
                            style={{...styles.ButtonStyle, backgroundColor: Colors.white, marginLeft: 10, }}
                        >
                            <FontAwesome5 name={"check"} color={Colors.orange} size={16} solid/>
                            <Text style={{...styles.textStyle, color: Colors.orange}}>
                                Aceptar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ModalInfo;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
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
    buttonContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 7,
        alignItems: 'center',
    },
    ButtonStyle: {
        marginTop: 15, 
        backgroundColor: Colors.orange,
        paddingHorizontal: 10, 
        paddingVertical: 8,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.orange, 
        borderWidth: 3,
        width: 120,
    },
    textStyle: {
        color: 'white', 
        fontSize: 20,
        marginLeft: 5,
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
});