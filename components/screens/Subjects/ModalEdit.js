import react, { useState } from "react";
import {
    View,
    Text,
    Pressable,
    TextInput,
} from "react-native";

import Colors from "../../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";

/**
 * Componente modalEdit
 * @param {maxAlumnos, maxTopics, onClose, onAccept} props 
 * - props.maxAlumnos: integer, valor actual del maximo de alumnos
 * - props.maxTopics: integer, valor actual del maximo de temas
 * - props.onClose: function, callback a llamar al cerrar el modal
 * - props.onAccept: function, callback a llamar cuando se aceptan los cambios
 * @returns JSX.Element, componente vista del modal para editar los limites
 */
const ModalEdit = (props) => {
    const [maxAlumnos, setMaxAlumnos] = useState(props.maxAlumnos);
    const [maxTopics, setMaxTopics] = useState(props.maxTopics);

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
                        Limite alumnos:
                    </Text>
                    <TextInput
                        value={maxAlumnos}
                        keyboardType='number-pad'
                        onChangeText={text => {
                            const e = new RegExp('^[1-9][0-9]*$');

                            if (e.test(text)) {
                                setMaxAlumnos(text)
                            }
                            else if (text === "") {
                                setMaxAlumnos("");
                            }
                        }}
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
                        value={maxTopics}
                        keyboardType='number-pad'
                        onChangeText={text => {
                            const e = new RegExp('^[1-9][0-9]*$');

                            if (e.test(text)) {
                                setMaxTopics(text)
                            }
                            else if (text === "") {
                                setMaxTopics("");
                            }
                        }}
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
                        onPress={() => props.onAccept(maxAlumnos, maxTopics)}
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