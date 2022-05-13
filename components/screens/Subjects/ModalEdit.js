import react, { useState } from "react";
import {
    View,
    Text,
    Pressable,
    TextInput,
} from "react-native";

import Colors from "../../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";

const ModalEdit = (props) => {
    return <View style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
    }}>
        <View style={{
            display: 'flex',
            backgroundColor: 'white',
            width: '80%',
            borderRadius: 20,
            elevation: 10,
            padding: 30,
            paddingTop: 35,
            position: 'relative',
            paddingBottom: 20
        }}>
            <Text style={{
                position: 'absolute',
                fontWeight: 'bold',
                fontSize: 18,
                top: 10,
                alignSelf: 'center',
                textAlign: 'center',
            }}>
                Editar limites por materia:
            </Text>
            <View style={{
                position: 'absolute',
                top: 15,
                right: 20
            }}>
                <Pressable onPress={() => props.onClose()}>
                    <FontAwesome5 name={"times"} color={"black"} size={16} solid />
                </Pressable>
            </View>
            <View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 20,
                    borderColor: Colors.orange,
                    paddingLeft: 10,
                    width: 180,
                    marginTop: 10
                }}>
                    <Text>
                        Limite temas:
                    </Text>
                    <TextInput
                        style={{
                            borderBottomColor: Colors.orange,
                            fontSize: 16,
                            borderBottomWidth: 2,
                            marginLeft: 10,
                            width: 50
                        }}
                    />
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 20,
                    borderColor: Colors.orange,
                    paddingLeft: 10,
                    width: 180,
                    marginTop: 10
                }}>
                    <Text>
                        Limite temas:
                    </Text>
                    <TextInput
                        keyboardType='number-pad'
                        style={{
                            borderBottomColor: Colors.orange,
                            fontSize: 16,
                            borderBottomWidth: 2,
                            marginLeft: 10,
                            width: 50
                        }}
                    />
                </View>
                <View style={{
                    display: 'flex',
                    flexGrow: 1,
                    alignItems: 'center',
                    marginTop: 20
                }}>
                    <Pressable
                        style={({ pressed }) => [ {
                            backgroundColor: pressed ? Colors.lightOrange : Colors.orange,
                            padding: 5,
                            paddingHorizontal: 10,
                            borderRadius: 16,
                            overflow: 'hidden'
                        } ]}
                        onPress={() => props.onAccept()}
                    >
                        <Text style={{
                            color: Colors.white,
                            fontWeight: 'bold',
                        }}>
                            Aceptar
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </View>
}

export default ModalEdit;