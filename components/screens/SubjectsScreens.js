import react, { useState } from "react";
import {
    View,
    Text,
    Modal,
    ScrollView,
    StyleSheet,
    Pressable,
    TextInput,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import Colors from "../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Input } from "@rneui/themed";

export default function SubjectsScreens() {
    const [ materiaSelected, setMateriaSelected ] = useState(0);
    const [ materiaEdit, setMateriaEdit ] = useState(false);

    const Materias = {
        0: {
            Nombre: "Cálculo integral",
            Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur leo in tellus scelerisque, in consequat libero placerat. Phasellus rutrum scelerisque arcu eu tincidunt. Etiam elementum libero tellus, sed vehicula lorem vehicula a. Praesent fermentum, eros eu varius aliquet, massa elit tristique est, vitae mollis nisl libero in massa",
            LimiteTemas: 2,
            LimiteAlumnos: 3
        },
        1: {
            Nombre: "Cálculo diferencial",
            Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur leo in tellus scelerisque, in consequat libero placerat. Phasellus rutrum scelerisque arcu eu tincidunt. Etiam elementum libero tellus, sed vehicula lorem vehicula a. Praesent fermentum, eros eu varius aliquet, massa elit tristique est, vitae mollis nisl libero in massa",
            LimiteTemas: 2,
            LimiteAlumnos: 3
        },
        2: {
            Nombre: "Matemáticas discretas",
            Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur leo in tellus scelerisque, in consequat libero placerat. Phasellus rutrum scelerisque arcu eu tincidunt. Etiam elementum libero tellus, sed vehicula lorem vehicula a. Praesent fermentum, eros eu varius aliquet, massa elit tristique est, vitae mollis nisl libero in massa",
            LimiteTemas: 2,
            LimiteAlumnos: 3
        },
        3: {
            Nombre: "Programación orientada a objetos",
            Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur leo in tellus scelerisque, in consequat libero placerat. Phasellus rutrum scelerisque arcu eu tincidunt. Etiam elementum libero tellus, sed vehicula lorem vehicula a. Praesent fermentum, eros eu varius aliquet, massa elit tristique est, vitae mollis nisl libero in massa",
            LimiteTemas: 2,
            LimiteAlumnos: 3
        },
    };

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>
                Materias
            </Text>
            <View style={styles.contentContainer}>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={materiaSelected}
                        onValueChange={(materia) => {
                            setMateriaSelected(materia)
                        }}
                        style={styles.picker}
                        mode="dropdown"
                    >
                        {
                            Object.keys(Materias).map((materiaId, idx) => (
                                <Picker.Item
                                    key={idx}
                                    label={Materias[ materiaId ].Nombre}
                                    value={materiaId}
                                />
                            ))
                        }
                    </Picker>
                </View>
                <View style={styles.subjectInfoContainer}>
                    <View style={styles.subjectTitleContainer}>
                        <Text style={styles.subjectName}>
                            {Materias[ materiaSelected ].Nombre}
                        </Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <View style={{ width: '80%' }}>
                            <Text style={styles.descriptionTitle}>
                                Descripción:
                            </Text>
                            <Text style={{ textAlign: 'justify' }}>
                                {Materias[ materiaSelected ].Descripcion}
                            </Text>
                        </View>
                        <View style={styles.limitsContainer}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <Text style={{ fontSize: 16 }}>
                                    Limite temas:
                                </Text>
                                <Text style={{ fontSize: 14, marginLeft: 10 }}>
                                    {Materias[ materiaSelected ].LimiteTemas}
                                </Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}>
                                <Text style={{ fontSize: 16 }}>
                                    Limite alumnos:
                                </Text>
                                <Text style={{ fontSize: 14, marginLeft: 10 }}>
                                    {Materias[ materiaSelected ].LimiteAlumnos}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.editButtonContainer}>
                    <Pressable onPress={() => setMateriaEdit(true) }>
                        <FontAwesome5 name={"edit"} color={"black"} size={25} solid />
                    </Pressable>
                </View>
            </View>
            <Modal visible={materiaEdit} transparent={true}>
                <View style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        display: 'flex',
                        backgroundColor: 'white',
                        width: '80%',
                        borderRadius: 20,
                        elevation: 10,
                        padding: 30,
                        paddingTop: 35,
                        position: 'relative'
                    }}>
                        <View style={{
                            position: 'absolute',
                            top: 15,
                            right: 20
                        }}>
                            <Pressable onPress={() => setMateriaEdit(false)}>
                                <FontAwesome5 name={"times"} color={"black"} size={16} solid/>
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
                                width: 180
                            }}>
                                <Text>
                                    Limite temas:
                                </Text>
                                <TextInput />
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderRadius: 20,
                                borderColor: Colors.orange,
                                paddingLeft: 10,
                            }}>
                                <Text style={{
                                    display: 'flex',
                                    flex: 1,
                                }}>
                                    Limite temas:
                                </Text>
                                <TextInput 
                                    keyboardType='number-pad'
                                    style={{
                                        borderRadius: 20,
                                        paddingHorizontal: 10,
                                        width: 80,
                                        marginLeft: 20,
                                        borderWidth: 1,
                                        borderColor: Colors.orange
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },
    contentContainer: {
        flex: 1,
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: Colors.white,
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
    },
    pickerContainer: {
        borderRadius: 16,
        overflow: 'hidden',
    },
    picker: {
        backgroundColor: Colors.orange,
        color: Colors.white,
    },
    subjectInfoContainer: {
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        marginVertical: 20,
        borderRadius: 16
    },
    subjectTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        marginVertical: 20
    },
    subjectName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black
    },
    descriptionContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    descriptionTitle: {
        fontSize: 16,
        marginLeft: 20,
        marginBottom: 10
    },
    limitsContainer: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 30
    },
    editButtonContainer: {
        bottom: 20,
        right: 20,
        width: 40,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    }
});