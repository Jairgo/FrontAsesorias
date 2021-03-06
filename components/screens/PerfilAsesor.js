import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';
import { VStack, Box, NativeBaseProvider, Select, CheckIcon, FormControl } from 'native-base';
import axios from 'axios';

/**
 * Componente que muestra la información personal del asesor, basado en la información que se obtiene de la API con el id del asesor
 * @param {Object} navigation - Objeto de navegación para poder navegar entre las pantallas 
 * @param {Object} route - Objeto que contiene la información de la ruta actual
 * @param {Object} route.params.asesor - Objeto que contiene la información del asesor
 * @returns Render de vista, con la información del asesor especificado
 */
function PerfilAsesor({ route, navigation }) {
    const { asesor } = route.params;
    const [horarios, setHorarios] = useState([]);
    const [horario, setHorario] = React.useState("");
    const [disabled, setDisabled] = useState(false);
    var dia = "no definido";

    // Función que obtiene los horarios del asesor de la API
    useEffect(() => {
        async function getHorarios() {
            try {
                const horarios = await axios.get('http://becasdeploy.pythonanywhere.com/horarios/?asesor=' + asesor.id);
                setHorarios(horarios.data);
                if (horarios.data.length > 0) {
                    setDisabled(false);
                } else {
                    setDisabled(true);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getHorarios();
    }, []);

    // Funcion que obtiene el nombre del dia de la semana, basado en el id del dia
    const findDia = (idDia) => {
        switch (idDia) {
            case 1:
                dia = "Lunes";
                break;
            case 2:
                dia = "Martes";
                break;
            case 3:
                dia = "Miércoles";
                break;
            case 4:
                dia = "Jueves";
                break;
            case 5:
                dia = "Viernes";
                break;
            case 6:
                dia = "Sábado";
                break;
            case 7:
                dia = "Domingo";
                break;
            default:
                dia = "no definido";
                break;
        }
        return dia;
    };

    // Función que se ejecuta al seleccionar un horario, para que se guarde en el estado del componente
    const detailsHorario = (idHorario) => {
        if (horarios.length > 0 && horarios !== undefined && idHorario !== undefined && idHorario !== null) {
            let horario = horarios.find(e => e.id === idHorario);
            setHorario(horario);
        }
    };

    // Renderiza el componente, dependiendo de si el asesor tiene horarios o no.
    // si no tiene horarios, muestra un mensaje de error "No hay horarios disponibles"
    return (
        <NativeBaseProvider>
            <ScrollView style={{ paddingTop: 20 }}>
                <View style={styles.screen}>
                    <Image style={styles.image} source={{ uri: asesor.profile_picture_url }} />
                    <Text style={styles.tituloText}>  {asesor.nombre} {asesor.apellido_paterno} {asesor.apellido_materno}</Text>
                </View>
                <View style={styles.screen}>
                    <CardInfoPersonal
                        asesor={asesor}
                    />
                </View>
                <Text style={styles.instruccionText}>Selecciona una fecha y hora:</Text>
                {horarios.length > 0 ?
                    (
                        <View style={styles.screen}>
                            <FormControl maxW="100%" isRequired>
                                <Select minWidth="200" accessibilityLabel="Elige el horario que mas te convenga" placeholder="Elige el horario que mas te convenga" _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size={5} />
                                }} mt="1" onValueChange={itemValue => detailsHorario(itemValue)}>
                                    {
                                        horarios.map((horario) => (
                                            <Select.Item style={{ color: Colors.naranjaColor, fontWeight: "bold" }}
                                                label={findDia(horario.dia) + ": " + horario.hora_inicio + " - " + horario.hora_fin}
                                                value={horario.id}
                                                key={horario.id}
                                                navigation={navigation}
                                            />
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </View>
                    ) : (
                        <Text style={styles.noDisponibleText}>No hay horarios disponibles</Text>
                    )
                }
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SolicitudAsesoria', {
                            asesor: asesor,
                            horario: horario,
                            dia: dia,
                        })}
                        disabled={horario !== "" ? disabled : true}
                        style={disabled ? styles.siguienteButtonDisabled : styles.siguienteButton}
                        underlayColor='#fff'>
                        <Text style={styles.siguienteText} >{Strings.solicitarAsesoria}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    );
}

// Componente que muestra la información personal del asesor
// Propiedades:
// - asesor: Objeto con la información del asesor

function CardInfoPersonal(props) {
    return (
        <NativeBaseProvider>
            <Box border="1" borderRadius="md">
                <VStack space="1" >
                    <Box px="4" py="2" mt="4" rounded="lg" bg={Colors.naranjaColor} _text={{ color: "white", fontWeight: "bold" }}>
                        Información personal
                    </Box>
                    <Box px="4" py="2" borderWidth="1" rounded="lg" borderColor={Colors.naranjaColor}>
                        <VStack space="3" >
                            <Text>
                                <Text style={styles.boldText}>  Nombre: </Text>
                                <Text> {props.asesor.nombre}</Text>
                            </Text>
                            <Text>
                                <Text style={styles.boldText}>  Carerra: </Text>
                                <Text> {props.asesor.carrera.nombre}</Text>
                            </Text>
                            <Text>
                                <Text style={styles.boldText}>  Semestre: </Text>
                                <Text> {props.asesor.semestre}</Text>
                            </Text>
                        </VStack>
                    </Box>
                </VStack>
            </Box>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingLeft: 30,
        paddingRight: 30,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    tituloText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.naranjaColor,
    },
    boldText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.negroColor
    },
    instruccionText: {
        color: Colors.negroColor,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 20
    },
    noDisponibleText: {
        color: Colors.redColor,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10
    },
    image: {
        width: 50, height: 50,
        borderRadius: 1000,
    },
    siguienteButton: {
        marginRight: 70,
        marginLeft: 70,
        marginTop: 10,
        marginBottom: 50,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: Colors.naranjaColor,
        borderRadius: 10,
    },
    siguienteButtonDisabled: {
        marginRight: 70,
        marginLeft: 70,
        marginTop: 10,
        marginBottom: 50,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: Colors.lightOrange,
        borderRadius: 10,
    },
    siguienteText: {
        color: Colors.blancoColor,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
});

export default PerfilAsesor;

