import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';
import { VStack, Box, NativeBaseProvider } from 'native-base';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { UserContext } from "../UserContext";

function SolicitudAsesoriaAgendada({ route, navigation }) {
    const { asesor, materia, horario, dia, temas } = route.params;
    const [error, setError] = useState(false);
    const [idAsesoria, setIdAsesoria] = useState("");
    const {user, setUser} = useContext(UserContext);
    const [diaMostrar, setDiaMostrar] = useState("");

    useEffect(() => {
        async function postAsesoria() {
            var today = new Date();
            today.toLocaleDateString('es-MX', {
                timeZone: 'America/Mexico_City'}
            );
            var numHoy = today.getDay(); // aqui esta en numero el dia de hoy (1-7) 
            var numAsDia = horario.dia; // aqui esta en numero el dia de la asesoria (1-7)
            var resta = numAsDia - numHoy;
            if(resta > 0){
                var fechaHoy = today.getDate();
                var fechaAs = fechaHoy + resta;
            } else {
                var fechaHoy = today.getDate();
                var fechaAs = fechaHoy + resta + 7;
            }
            var fecha = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + fechaAs;
            var days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
            setDiaMostrar(days[numAsDia] + " " + fechaAs + "/" + (today.getMonth() + 1) + "/" + today.getFullYear());

            try {
                const response = await axios.post(`http://becasdeploy.pythonanywhere.com/asesorias/`, {
                    estado: 1,
                    evaluacion: 'Sin evaluar',
                    fecha: fecha,
                    horario: horario.id,
                    asesor: asesor.id,
                    materia: materia.id,
                    lugar: horario.lugar,
                });
                if (response.status === 201) {
                    // console.log(`Haz agregado una nueva asesoria: ${JSON.stringify(response.data)}`);
                    console.log("El id de la asesoria es: " + response.data.id);
                    setIdAsesoria(response.data.id);
                    postDetalleAsesoria(response.data);
                } else {
                    console.log(`Error al agregar la asesoria: ${JSON.stringify(response.data)}`);
                    setError(true);
                }
            } catch (error) {
                console.log(error);
                setError(true);
            }
        }

        async function postDetalleAsesoria(newAsesoria) {
            try {
                const response = await axios.post(`http://becasdeploy.pythonanywhere.com/asesoriasdetalle/`, {
                    asesoria: newAsesoria.id,
                    asesorado: user.id,
                    tema: temas ? temas : "Sin tema",
                    calificacion: 0,
                });
                if (response.status === 201) {
                    console.log(`Haz agregado un detalle a la asesoria: ${JSON.stringify(response.data)}`);
                    setError(false);
                } else {
                    console.log(`Error al agregar el detalle de la asesoria: ${JSON.stringify(response.data)}`);
                    setError(true);
                }
            } catch (error) {
                console.log(error);
                console.log(temas);
                setError(true);
            }
        }

        postAsesoria();
    }, []);

    return (
        <NativeBaseProvider>
            {
            error ?
            <View style={styles.screen}>
                <Feather name="x-circle" size={180} color={Colors.redColor} />
                 <Text style={styles.errorText}>{Strings.error}</Text> 
            </View>
            :  
            <View style={styles.screen}>
                <Feather name="check-circle" size={180} color={Colors.naranjaColor} />
                <Text style={styles.tituloText}>¡Listo, tu asesoría ha sido agendada!</Text>
                <Box border="1" borderRadius="md">
                    <VStack space="1" >
                        <Box px="2" py="2" borderWidth="1" rounded="lg" borderColor={Colors.naranjaColor}>
                            <VStack space="3" >
                                <Text>
                                    <Text style={styles.boldText}>  Materia: </Text>
                                    <Text> {materia.nombre}</Text>
                                </Text>
                                <Text>
                                    <Text style={styles.boldText}>  Día: </Text>
                                    <Text> {diaMostrar}</Text>
                                </Text>
                                <Text>
                                    <Text style={styles.boldText}>  Hora: </Text>
                                    <Text> {horario.hora_inicio}</Text>
                                </Text>
                                <Text>
                                    {/* TODO: Agregar lugar en el serializer del back */}
                                    <Text style={styles.boldText}>  Lugar: </Text>
                                    <Text> {horario.lugar}</Text>
                                </Text>
                                <Text>
                                    <Text style={styles.boldText}>  Asesor: </Text>
                                    <Text> {asesor.nombre} {asesor.apellido_paterno} {asesor.apellido_materno}</Text>
                                </Text>
                            </VStack>
                        </Box>
                    </VStack>
                </Box>

            </View>
            }
        </NativeBaseProvider>

    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: Colors.naranjaColor
    },
    errorText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: Colors.redColor
    },
    descripcionText: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },
    boldText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.naranjaColor
    },
});

export default SolicitudAsesoriaAgendada;

