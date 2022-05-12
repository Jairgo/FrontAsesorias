import react, { useEffect, useState } from "react";
import {
    View,
    Text,
    Modal,
    ScrollView,
    StyleSheet,
    Pressable,
    TextInput, 
    Button,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import Colors from "../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import ModalEdit from "./Subjects/ModalEdit";

import axios from "axios";
import { endpoints } from "../constants/Backend";

export default function SubjectsScreens(props) {
    const [ materiaSelected, setMateriaSelected ] = useState(0);
    const [ materiaEdit, setMateriaEdit ] = useState(false);
    const [ Materias, setMaterias ] = useState({});
    const [ requestDone, setRequestDone ] = useState(false);

    useEffect(() => {
        axios.get(endpoints.materias(props.userId)).then(
            (response) => {
                for (let key of Object.keys(Materias)) 
                    Materias[key] = undefined;

                for (let respObj of response.data) {
                    Materias[respObj.materias.id] = {
                        Nombre: respObj.materias.nombre,
                        Descripcion: respObj.materias.descripcion,
                        LimiteTemas: respObj.limite_temas,
                        LimiteAlumnos: respObj.limite_alumnos
                    }
                }
                
                if (response.data.length > 0)
                    setMateriaSelected(response.data[0].materias.id)
                setRequestDone(true);
            },
            (err) => {
                console.log(err)
            }
        )
    }, [])

    if (! requestDone) {
        return <View style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 30,
                opacity: 0.5
            }}>
                Loading...
            </Text>
        </View>
    }

    if (Object.keys(Materias).length == 0) {
        return <View style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 30,
                opacity: 0.5
            }}>
                No tienes materias
            </Text>
        </View>
    }

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
            <Modal visible={materiaEdit} transparent={true} animationType="slide">
                <ModalEdit onClose={() => setMateriaEdit(false)} onAccept={() => setMateriaEdit(false)}/>
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