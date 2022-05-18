import react, { useState } from "react";

import {
    View,
    Text,
    Pressable,
    StyleSheet,
} from "react-native";

import Colors from "../../constants/Colors";

/**
 * Componente WeekDay
 * @param {selected, day, num, onPress} props
 * - selected: boolean, indica si el día está siendo seleccionado actualmente
 * - day: string, día de la semana solo con tres dígitos
 * - num: integer, dia del mes
 * - onPress: function, callback a ejecutar cuando el dia sea presionado
 * @returns JSX.Element, componente visual de un dia de la semana
 */
const WeekDay = (props) => {
    const styles = StyleSheet.create({
        container: {
            borderRadius: 10,
            backgroundColor: props.selected ? Colors.orange : Colors.transparent,
            width: 50,
            height: 75,
            overflow: 'hidden',
        },
        innerContainer: {
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        },
        textDay: {
            textAlign: 'center',
            fontSize: props.selected ? 20 : 16,
            color: props.selected ? Colors.white : Colors.darkGray,
            fontWeight: 'bold'
        },
        textNumber: {
            textAlign: 'center',
            fontSize: props.selected ? 18 : 14,
            color: props.selected ? Colors.white : Colors.darkGray,
            fontWeight: 'bold'
        },
    });

    return (
        <View style={styles.container}>
            <Pressable
                onPress={
                    props.onPress !== undefined
                        ? props.onPress
                        : () => { }
                }
                style={styles.innerContainer}
            >
                <Text style={styles.textDay}>
                    {props.day}
                </Text>
                <Text style={styles.textNumber}>
                    {props.num}
                </Text>
                {
                    props.selected
                        ? <View style={{
                            display: props.selected ? 'flex' : 'none',
                            backgroundColor: Colors.white,
                            width: 8,
                            height: 8,
                            borderRadius: 50,
                            position: 'absolute',
                            bottom: 3,
                            alignSelf: 'center'
                        }} />
                        : <></>
                }

            </Pressable>
        </View>
    )
};

export default WeekDay;