import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';
import Calendar from '../reusables/Calendar';
import { VStack, Box, NativeBaseProvider, Select, CheckIcon, FormControl } from 'native-base';
import axios from 'axios';

function PerfilAsesor({ route, navigation }) {
    const { asesor, carrera, semestre, asesorId, asesorImg } = route.params;
    const [date, setDate] = useState(new Date())
    const [horarios, setHorarios] = useState([]);
    const [horarioId, setHorarioId] = React.useState("");
    const [horarioNombre, setHorarioNombre] = React.useState("");
    const [disabled, setDisabled] = useState(false);
    var dia = "no definido";

    useEffect(() => {
        async function getHorarios() {
            try {
                const horarios = await axios.get('http://becasdeploy.pythonanywhere.com/horarios/?asesor=' + asesorId);
                // console.log(horarios.data);
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

    const detailsHorario = (idHorario) => {
        if (horarios.length > 0 && horarios !== undefined && idHorario !== undefined && idHorario !== null) {
            let horario = horarios.find(e => e.id === idHorario);
            setHorarioNombre(horario.hora_inicio + " - " + horario.hora_fin);
            setHorarioId(idHorario);
        }
    };

    return (
        <NativeBaseProvider>
            <ScrollView style={{ paddingTop: 20 }}>
                <View style={styles.screen}>
                    <Image style={styles.image} source={{ uri: asesorImg }}/>
                    <Text style={styles.tituloText}>  {asesor}</Text>
                </View>
                <View style={styles.screen}>
                    <CardInfoPersonal
                        asesor={asesor}
                        carrera={carrera}
                        semestre={semestre}
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
                            horarioId: horarioId,
                            horarioNombre: horarioNombre,
                            dia: dia,
                        })}
                        disabled={disabled}
                        style={disabled ? styles.siguienteButtonDisabled : styles.siguienteButton}
                        underlayColor='#fff'>
                        <Text style={styles.siguienteText} >{Strings.solicitarAsesoria}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    );
}

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
                                <Text> {props.asesor}</Text>
                            </Text>
                            <Text>
                                <Text style={styles.boldText}>  Carerra: </Text>
                                <Text> {props.carrera}</Text>
                            </Text>
                            <Text>
                                <Text style={styles.boldText}>  Semestre: </Text>
                                <Text> {props.semestre}</Text>
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

