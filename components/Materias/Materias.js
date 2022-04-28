import react, { useState } from "react";
import {
    View,
    Text,
    Modal,
    ScrollView,
    StyleSheet,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import Colors from "../../constants/Colors";

function MateriasScreen(props) {
    const [materiaSelected, setMateriaSelected] = useState(0);

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
                <View style={{
                    borderRadius: 16,
                    overflow: 'hidden',
                }}>
                    <Picker 
                        selectedValue={materiaSelected} 
                        onValueChange={(materia) => {
                            setMateriaSelected(materia)
                        }}
                        style={{
                            backgroundColor: Colors.orange,
                            color: Colors.white,
                        }}
                        mode="dropdown"
                    >
                        {
                            Object.keys(Materias).map((materiaId, idx) => (
                                <Picker.Item 
                                    key={idx}
                                    label={Materias[materiaId].Nombre} 
                                    value={materiaId}
                                />
                            ))
                        }
                    </Picker>
                </View>
                <View style={{
                    width: '100%',
                    height: '100%',
                    marginVertical: 20,
                    borderRadius: 16
                }}>
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginVertical: 20
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: Colors.black
                        }}>
                            { Materias[materiaSelected].Nombre }
                        </Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            width: '80%'
                        }}>
                            <Text style={{
                                fontSize: 16,
                                marginLeft: 20,
                                marginBottom: 10
                            }}>
                                Descripción:
                            </Text>
                            <Text style={{
                                textAlign: 'justify'
                            }}>
                                { Materias[ materiaSelected ].Descripcion }
                            </Text>
                        </View>
                        <View style={{
                            width: '80%',
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 16
                                }}>
                                    Limite temas: 
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft: 10
                                }}>
                                    {Materias[ materiaSelected ].LimiteTemas}
                                </Text>
                            </View>
                            <View style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 16
                                }}>
                                    Limite alumnos:
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft: 10
                                }}>
                                    {Materias[ materiaSelected ].LimiteAlumnos}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default MateriasScreen;

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
        backgroundColor: Colors.white,
        marginTop: 10,
        marginBottom: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    }
});