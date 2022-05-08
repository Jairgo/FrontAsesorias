import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';
import { NativeBaseProvider, TextArea, FormControl, Select, CheckIcon, WarningOutlineIcon } from 'native-base';
import axios from 'axios';

function SolicitudAsesoria({ route, navigation }) {
    const { asesor } = route.params;
    const [materia, setMateria] = React.useState("");
    const [selected, setSelected] = useState(false);

    // const onChange = (event, itemValue) => {
    //     setMateria(itemValue)
    //     setSelected(true);
    // };

    const [materias, setMaterias] = useState([]);
    useEffect(() => {
        async function getMaterias() {
            try {
                const materias = await axios.get('http://becasdeploy.pythonanywhere.com/materias/');
                setMaterias(materias.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMaterias();
    }, []);

    return (
        <NativeBaseProvider>
            <ScrollView style={styles.screen}>
                <Text style={styles.tituloText}>{Strings.seleccionarMateria}</Text>

                <FormControl maxW="100%" isRequired>
                    <FormControl.Label>Elige la materia: </FormControl.Label>
                    <Select minWidth="200" accessibilityLabel="Elegir materia" placeholder="Elige la materia que desees" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size={5} />
                    }} mt="1" onValueChange={itemValue => setMateria(itemValue)}>
                        {
                            materias.map((materia, idx) => (
                                <Select.Item
                                    label={materia.nombre}
                                    value={materia.nombre}
                                    key={materia.id}
                                    materiaName={materia.nombre}
                                    materiaDescripcion={materia.descripcion}
                                    navigation={navigation}
                                />
                            ))
                        }
                    </Select>
                    {
                        // TODO: Revisar porque no se muestra el mensaje de error
                        selected && (<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            {materia}
                        </FormControl.ErrorMessage>)
                    }

                </FormControl>

                <Text style={styles.descripcionText}>Describe el tema que te gustaría revisar:</Text>
                <TextArea color={Colors.negroColor} bg={Colors.naranjaSecundarioColor} h={40} placeholder="Ingresa información acerca del tema que te gustaría revisar" w="100%" maxW="350" />
                <TouchableOpacity
                    onPress={() => navigation.navigate('SolicitudAsesoriaAgendada', {
                        asesor: asesor,
                        materia: materia
                    })}
                    style={styles.siguienteButton}
                    underlayColor='#fff'>
                    <Text style={styles.siguienteText} >{Strings.nextButton}</Text>
                </TouchableOpacity>
            </ScrollView>
        </NativeBaseProvider>

    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 70
    },
    siguienteButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: Colors.naranjaColor,
        borderRadius: 10,
    },
    siguienteText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    tituloText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: Colors.naranjaColor
    },
    descripcionText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    }
});

export default SolicitudAsesoria;

