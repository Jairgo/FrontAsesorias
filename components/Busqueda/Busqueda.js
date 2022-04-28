import react, { useState } from "react";

import {
    View,
    Text,
    Modal,
    TextInput,
    ScrollView,
    StyleSheet,
    Pressable,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
function BusquedaScreen(props) {
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>
                Materias
            </Text>
            <View style={styles.contentContainer}>
                <View style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <TextInput style={{
                        backgroundColor: Colors.white,
                        height: 50,
                        width: '80%',
                        borderRadius: 16,
                        paddingHorizontal: 14,
                        borderColor: Colors.orange,
                        borderWidth: 2,
                        elevation: 10,
                        color: Colors.orange,
                        fontWeight: 'bold'
                    }} />
                    <View style={{
                        marginLeft: 20,
                        borderRadius: 50,
                        overflow: 'hidden'
                    }}>
                        <Pressable style={({pressed}) => [{
                            backgroundColor: pressed ? Colors.orange : Colors.lightOrange,
                            padding: 10,
                        }]}>
                            <FontAwesome5 name={"search"} color={"black"} size={25} solid />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default BusquedaScreen;

const styles = StyleSheet.create({
    screenContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },
    contentContainer: {
        width: '90%',
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    }
});