import react, { useEffect, useState } from "react";

import {
    View,
    Text,
    Pressable,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import Colors from "../../constants/Colors";

import PickTime from "./PickTime";
import { SafeAreaView } from "react-native-safe-area-context";

import axios from "axios";
import { endpoints } from "../../constants/Backend";

const ModalTimePicker = (props) => {

    const [place, setPlace] = useState("");
    const [error, setError] = useState(false);
    const [textError, setTextError] = useState("Error");
    const [hoursInfo, setHoursInfo] = useState({
        startHour: 0,
        startMinutes: 0,
        endHour: 0,
        endMinutes: 0
    })

    return (
        <View style={styles.screenContainer}>
            <SafeAreaView style={{
                backgroundColor: "white",
                borderRadius: 20,
                alignItems: 'center',
                paddingBottom: 20
            }}
            >
                <Pressable 
                    style={styles.closeIcon}
                    onPress={() => props.close()}
                >
                    <FontAwesome5 name={"times"} color={"black"} size={16} solid />
                </Pressable>
                {
                    !error ? (
                        <View style={{ alignItems: 'center' }}>
                            <PickTime title="Hora de inicio" setHoursInfo={(newData) => setHoursInfo((actValue) => {
                                return { ...actValue, startHour: newData.hour, startMinutes: newData.minutes }
                            })} />

                            <PickTime title="Hora de fin" setHoursInfo={(newData) => setHoursInfo((actValue) => {
                                return { ...actValue, endHour: newData.hour, endMinutes: newData.minutes }
                            })} />

                            <Text style={{ fontSize: 19, color: Colors.black }}>
                                Lugar:
                            </Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={setPlace}
                                value={place}
                                placeholder="Lugar"
                            />

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    onPress={() => { props.close() }}
                                    style={styles.ButtonStyle}
                                >
                                    <FontAwesome5 name={"times"} color={"white"} size={16} solid />
                                    <Text style={styles.textStyle}>
                                        Cancelar
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        // console.log(hoursInfo);
                                        if (hoursInfo.endHour < hoursInfo.startHour || ((hoursInfo.startHour === hoursInfo.endHour) && (hoursInfo.endMinutes <= hoursInfo.startMinutes))) {
                                            setError(true);
                                            setTextError("Horario incorrecto");
                                        } else {
                                            if (place.length === 0) {
                                                setError(true);
                                                setTextError("Debe definir un lugar");
                                            }else{
                                                axios.post(endpoints.horarioAsesorView(), {
                                                    startHour: hoursInfo.startHour,
                                                    endHour: hoursInfo.endHour,
                                                    place: place,
                                                    startMinutes: hoursInfo.startMinutes,
                                                    endMinutes: hoursInfo.endMinutes,
                                                    day: props.day,
                                                    asesor: props.id_Asesor
                                                }).then(
                                                    (response) => {
                                                        props.close()
                                                        // console.log(response.data);
                                                    },
                                                    (err) => {
                                                        setError(true);
                                                        setTextError("Horario ocupado, por favor elija otro");
                                                    }
                                                )
                                            }
                                        }
                                    }}
                                    style={{ ...styles.ButtonStyle, backgroundColor: Colors.white, marginLeft: 10, }}
                                >
                                    <FontAwesome5 name={"check"} color={Colors.orange} size={16} solid />
                                    <Text style={{ ...styles.textStyle, color: Colors.orange }}>
                                        Aceptar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        <View style={{ alignItems: 'center', padding: 15, paddingHorizontal: 30, maxWidth: 350, }}>
                            <Text style={{ padding: 20, fontSize: 22, textAlign: 'center' }}>
                                {textError}
                            </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setError(false);
                                }}
                                style={{ ...styles.ButtonStyle, backgroundColor: Colors.white, marginLeft: 10, }}
                            >
                                <FontAwesome5 name={"check"} color={Colors.orange} size={16} solid />
                                <Text style={{ ...styles.textStyle, color: Colors.orange }}>
                                    Aceptar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </SafeAreaView>
        </View>
    );
};

export default ModalTimePicker;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
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
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    input: {
        display: 'flex',
        width: 290,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        fontSize: 16,
    },
});


{/* 
<PickTime title="Hora de inicio" hoursInfo={hoursInfo}/>
props.hoursInfo['startHour'] = VALOR;
// <PickTime title="Hora de inicio" setHoursInfo={(data) => setHoursInfo((actValue) => {return {...actValue, ...data}})}/>
// props.setHoursInfo({startHour: VALOR})
<PickTime title="Hora de inicio" setHoursInfo={(key, value) => hoursInfo[key] = value; }/> 
props.setHoursInfo('startHour', VALOR);
*/}