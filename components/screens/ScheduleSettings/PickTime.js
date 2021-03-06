import react, { useEffect, useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

import Colors from "../../constants/Colors";

import { TimePicker } from 'react-native-simple-time-picker';

/**
 * Función para escoger una hora
 * @param {startHour, setHoursInfo, title} props 
 * props.startHour: Variable para setear la hora de inicio.
 * props.setHoursInfo: Objeto para seter la hora y los minutos de la asesoría.
 * props.title: Variable con el header que muestra la hora seleccionada.
 * @returns Regresa un seleccionador de una hora
 */

const PickTime = (props) => {

    const [hours, setHours] = useState(props.startHour);
    const [minutes, setMinutes] = useState(0);

    const handleChange = ({ hours, minutes }) => {
        props.setHoursInfo({
            hour: hours,
            minutes: minutes
        });
        setHours(hours);
        setMinutes(minutes);
    };

    const handleReset = () => {
        setHours(0);
        setMinutes(0);
    };

    useEffect(() => {
        props.setHoursInfo({
            hour: hours,
            minutes: minutes
        });
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 5, ustifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 19, color: Colors.black }}>
                    {props.title}: {hours >= 10 ? hours : `0${hours}`}: {minutes >= 10 ? minutes : `0${minutes}`}
                </Text>
                <TimePicker
                    value={{ hours, minutes }}
                    onChange={handleChange}
                    minutesInterval={5}
                    zeroPadding
                    enabled={true}
                />
            </View>
        </SafeAreaView>
    );
};

export default PickTime;

const styles = StyleSheet.create({
    container: {
        width: '85%',
        padding: 25,
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
});