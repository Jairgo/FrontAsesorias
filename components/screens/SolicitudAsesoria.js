import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';
import { NativeBaseProvider, TextArea, FormControl, Select, CheckIcon, WarningOutlineIcon } from 'native-base';
import axios from 'axios';

function SolicitudAsesoria({ route, navigation }) {
    const { asesor, horarioId, horarioNombre, dia } = route.params;
    const [materiaId, setMateriaId] = React.useState("");
    const [materiaNombre, setMateriaNombre] = React.useState("");
    const [selected, setSelected] = useState(false);

    // const onChange = (event, itemValue) => {
    //     setMateria(itemValue)
    //     setSelected(true);
    // };

    const [materias, setMaterias] = useState([]);
    useEffect(() => {
        async function getMaterias() {
            try {
                // TODO: Arreglar el horario para que tome la fecha de uno de los dias actuales
                const materias = await axios.get('http://becasdeploy.pythonanywhere.com/materias/');
                setMaterias(materias.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMaterias();
    }, []);

    const findMateria = (idMateria) => {
        if (materias.length > 0 && materias !== undefined && idMateria !== undefined && idMateria !== null) {
            let materia = materias.find(e => e.id === idMateria);
            setMateriaNombre(materia.nombre);
            setMateriaId(idMateria);
        }
    };

    return (
        <NativeBaseProvider>
            <ScrollView style={styles.screen}>
                <Text style={styles.tituloText}>{Strings.seleccionarMateria}</Text>

                <FormControl maxW="100%" isRequired>
                    <FormControl.Label>Elige la materia: </FormControl.Label>
                    <Select minWidth="200" accessibilityLabel="Elegir materia" placeholder="Elige la materia que desees" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size={5} />
                    }} mt="1" onValueChange={itemValue => findMateria(itemValue)}>
                        {
                            materias.map((materia) => (
                                <Select.Item
                                    label={materia.nombre}
                                    value={materia.id}
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
                        materiaId: materiaId,
                        materiaNombre: materiaNombre,
                        horarioId: horarioId,
                        horarioNombre: horarioNombre,
                        lugar: "Lugar predefinido",
                        dia: dia,
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

