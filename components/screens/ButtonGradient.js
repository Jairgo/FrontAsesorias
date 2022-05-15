import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient(props) {
    return (
        <View style={styles.buttons}>
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
            ) : (<></>)}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 150,
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        marginTop: 15,
        flexDirection: 'row',
    }

});