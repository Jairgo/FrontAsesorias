import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient(props) {
    return (
        <View sx={styles.buttons}>
            <TouchableOpacity style={styles.container} onPress={() => props.login()}>
                <LinearGradient
                    colors={['#f49e73', '#ff5900']}
                    style={styles.button}
                >
                    <Text style={styles.text}>Enviar</Text>
                </LinearGradient>
            </TouchableOpacity>

            {props.navigation ? (
                <TouchableOpacity style={styles.container} onPress={() => props.navigation.goBack()}>
                    <LinearGradient
                        colors={['#f49e73', '#ff5900']}
                        style={styles.button}
                    >
                        <Text style={styles.text}>Cancelar</Text>
                    </LinearGradient>
                </TouchableOpacity>
            ) : (<View></View>)}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 200,
        marginTop: 5,
    },
    text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
    button: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flexDirection: 'row'
    }

});