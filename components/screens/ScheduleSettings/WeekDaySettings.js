import react, { useState } from "react";

import {
    View,
    Text,
    Pressable,
    StyleSheet,
} from "react-native";

import Colors from "../../constants/Colors";

const WeekDaySettings = (props) => {

    const styles = StyleSheet.create({
        container: {
            borderRadius: 10,
            backgroundColor: props.selected ? Colors.orange : Colors.transparent,
            width: 50,
            height: 60,
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

export default WeekDaySettings;