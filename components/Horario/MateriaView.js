import react, { useState } from "react";
import {
    View,
    Text,
    Pressable,
} from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';

import Colors from "../../constants/Colors";

const MateriaView = (props) => {
    return (
        <View style={{
            padding: 15,
            borderRadius: 15,
            width: '100%',
            backgroundColor: Colors.orange,
            display: 'flex',
            flexDirection: 'row',
            marginVertical: 10,
        }}>
            <View style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Pressable
                    onPress={() => props.showInfo()}
                    style={({ pressed }) => [ {
                        borderRadius: 10,
                        overflow: 'hidden',
                        opacity: pressed ? 0.5 : 1,
                    } ]}
                >
                    <Text style={{ width: 60, textAlign: 'center' }}>
                        <FontAwesome5 name={props.reservada ? "user-lock" : "user"} color={"white"} size={50} solid />
                    </Text>
                </Pressable>
            </View>
            <View style={{
                width: '100%',
                marginLeft: 15,
            }}>
                <Text style={{
                    fontSize: 14,
                    color: Colors.white,

                }}>
                    {props.horaInicio} - {props.horaFin}
                </Text>
                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: Colors.white,

                }}>
                    {props.materia}
                </Text>
                <View style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <Text style={{
                        width: '40%',
                        fontSize: 16,
                        color: Colors.white,
                    }}>
                        Limite temas: {props.limiteTemas}
                    </Text>
                    <Text style={{
                        width: '50%',
                        fontSize: 16,
                        color: Colors.white,
                    }}>
                        Limite alumnos: {props.limiteAlumnos}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default MateriaView;