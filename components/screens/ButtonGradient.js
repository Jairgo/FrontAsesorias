import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderApp from "../reusables/HeaderApp";

export default function  ButtonGradient (props) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.changeView()}>
            <LinearGradient
                colors={['#f49e73', '#ff5900']}
                style={styles.button}
            >
                <Text style={styles.text}>Enviar</Text>
            </LinearGradient>
        </TouchableOpacity>
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
    
  });