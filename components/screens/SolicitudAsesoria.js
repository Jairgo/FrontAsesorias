import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';
import { NativeBaseProvider, TextArea, FormControl, Select, CheckIcon } from 'native-base';
import axios from 'axios';

/**
 * Componente que se encarga de hacer la solicitud de asesoría
 * - asesor: objeto que contiene la información del asesor
 * - dia: objeto que contiene la información del día
 * - horario: objeto que contiene la información del horario
 * - materia: objeto que contiene la información de la materia
 * - temas: objeto que contiene la información del tema
 * @param {Object} navigation - Objeto de navegación para poder navegar entre las pantallas 
 * @returns render de la vista, con la informacion que se necesita para hacer la solicitud
 */
function SolicitudAsesoria({ route, navigation }) {
    const { asesor, dia, horario } = route.params;
    const [materia, setMateria] = React.useState("");
    const [temas, onChangetemas] = React.useState('');
    const [disabled, setDisabled] = useState(false);
    const [materias, setMaterias] = useState([]);

    // Función que obtiene todas las materias a las que puede asesorar el asesor
    useEffect(() => {
        async function getMaterias() {
            try {
                const materias = await axios.get('http://becasdeploy.pythonanywhere.com/materias/');
                setMaterias(materias.data);
                if (materias.data.length > 0) {
                    setDisabled(false);
                } else {
                    setDisabled(true);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getMaterias();
    }, []);

    // Funcion que obtiene el nombre del dia de la semana, basado en el id del dia
    const findMateria = (idMateria) => {
        if (materias.length > 0 && materias !== undefined && idMateria !== undefined && idMateria !== null) {
            let materia = materias.find(e => e.id === idMateria);
            setMateria(materia);
        }
    };

    // Renderiza el componente, si aun no se ha seleccionado una materia, deshabilita el botón de solicitar asesoría
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
                </FormControl>
                <Text style={styles.descripcionText}>Describe el tema que te gustaría revisar: </Text>
                <TextArea color={Colors.negroColor} h={40} placeholder="Ingresa información acerca del tema que te gustaría revisar" w="100%" maxW="350"
                    value={temas} onChangeText={text => onChangetemas(text)} />
                <TouchableOpacity
                    onPress={() => navigation.navigate('SolicitudAsesoriaAgendada', {
                        asesor: asesor,
                        materia: materia,
                        horario: horario,
                        dia: dia,
                        temas: temas
                    })}
                    disabled={materia !== "" ? disabled : true}
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
        padding: 40
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
        marginTop: 20,
        marginBottom: 20
    }
});

export default SolicitudAsesoria;

