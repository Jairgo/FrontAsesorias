import react, { useState } from "react";

import {
    View,
    Text,
    Pressable, 
    ScrollView
} from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';

import Colors from "../../constants/Colors";

function MateriaInfoModal(props) {
    const alumnos = [
        {nombre: "Erick Saúl", semestre: 6},
        {nombre: "Erick Saúl", semestre: 6},
        {nombre: "Erick Saúl", semestre: 6},
        {nombre: "Erick Saúl", semestre: 6},
    ];

    const temas = [
        "Tema 1",
        "Tema 2",
        "Tema 3",
        "Tema 4",
        "Tema 5",
    ];

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
        }}>
            <View style={{
                width: '80%',
                height: 'auto',
                margin: 20,
                backgroundColor: "white",
                borderRadius: 20,
                padding: 35,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5
            }}>
                <Pressable style={{
                    position: 'absolute',
                    right: 20,
                    top: 15,
                }}
                    onPress={() => props.close()}
                >
                    <FontAwesome5 name={"times"} color={"black"} size={16} solid />
                </Pressable>
                <View style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                        {props.materiaInfo.materia}
                    </Text>
                    <Text>
                        Horario: {props.materiaInfo.horaInicio} - {props.materiaInfo.horaFin}
                    </Text>
                    {
                        props.materiaInfo.reservada ? (
                            <View style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    marginVertical: 8
                                }}>
                                    Alumnos inscritos: {alumnos.length}
                                </Text>
                                <View style={{
                                    display: 'flex',
                                    flexGrow: 0,
                                    height: 120,
                                    width: '80%'
                                }}>
                                    <ScrollView>
                                        {alumnos.map((alumno, idx) => (
                                            <View
                                                key={idx}
                                            >
                                                <View style={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                }}>
                                                    <Text style={{
                                                        fontSize: 15,
                                                        fontWeight: 'bold',
                                                        flex: 4,
                                                    }}>
                                                        {alumno.nombre}
                                                    </Text>
                                                    <Text style={{ flex: 1 }}>
                                                        {alumno.semestre}º Sem.
                                                    </Text>
                                                </View>
                                            </View>
                                        ))}
                                    </ScrollView>
                                </View>
                                <Text style={{
                                    fontSize: 16,
                                    marginVertical: 8
                                }}>
                                    Número de temas: {temas.length}
                                </Text>
                                <View style={{
                                    display: 'flex',
                                    flexGrow: 0,
                                    height: 120,
                                    width: '80%'
                                }}>
                                    <ScrollView>
                                        {temas.map((tema, idx) => (
                                            <View
                                                key={idx}
                                            >
                                                <Text> {tema} </Text>
                                            </View>
                                        ))}
                                    </ScrollView>
                                </View>
                            </View>
                        ) : (
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    opacity: 0.3,
                                    marginVertical: 20
                                }}>
                                    No apartada aún
                                </Text>
                            </View>
                        )
                    }
                    <View style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: 0
                    }}>
                        <Text style={{
                            width: '50%',
                            fontSize: 16,
                            color: Colors.black,
                        }}>
                            Limite temas: {props.materiaInfo.limiteTemas}
                        </Text>
                        <Text style={{
                            width: '50%',
                            fontSize: 16,
                            color: Colors.black,
                        }}>
                            Limite alumnos: {props.materiaInfo.limiteAlumnos}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default MateriaInfoModal;