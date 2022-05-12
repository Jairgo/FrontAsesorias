import react, { useState } from "react";

import {
    View,
    Text,
    Pressable,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from  'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import Colors from "../../constants/Colors";

import PickTime from "./PickTime";
import { SafeAreaView } from "react-native-safe-area-context";



const ModalTimePicker = (props) => {
    const [text, onChangeText] = useState("");

    return (
        <View style={styles.screenContainer}>
            <SafeAreaView style={{
                backgroundColor: "white",
                borderRadius: 20,
                alignItems: 'center',
                paddingBottom: 20}}
            >
                <PickTime title="Hora de inicio" />
                <PickTime title="Hora de fin" />

                <Text style={{fontSize: 19, color: Colors.black}}>
                    Lugar:
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Lugar"
                />

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
                        onPress={() => {props.close()}}
                        style={{...styles.ButtonStyle, backgroundColor: Colors.white, marginLeft: 10, }}
                    >
                        <FontAwesome5 name={"check"} color={Colors.orange} size={16} solid/>
                        <Text style={{...styles.textStyle, color: Colors.orange}}>
                            Aceptar
                        </Text>
                    </TouchableOpacity>
                </View>
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
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
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
        width: '58%',
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