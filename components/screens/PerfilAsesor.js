import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';
import { VStack, Box, NativeBaseProvider } from 'native-base';
// import DateTimePicker from '@react-native-community/datetimepicker';

function PerfilAsesor({ route, navigation }) {
    const { asesor, carrera, semestre } = route.params;

    return (
        <View style={{ paddingTop: 70 }}>
            <View style={styles.screen}>
                <Image style={styles.image} source={require('../../assets/avatar-2.png')} />
                <Text style={styles.tituloText}>  {asesor}</Text>
            </View>
            <View style={styles.screen}>
                <CardInfoPersonal 
                    asesor={asesor}
                    carrera={carrera}
                    semestre={semestre}
                />
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SolicitudAsesoria', {
                        asesor: asesor,
                    })}
                    style={styles.siguienteButton}
                    underlayColor='#fff'>
                    <Text style={styles.siguienteText} >{Strings.solicitarAsesoria}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function CardInfoPersonal(props) {
    return (
        <NativeBaseProvider>
            <Box border="1" borderRadius="md">
                <VStack space="1" >
                    <Box px="4" py="2" mt="4" rounded="lg" bg={Colors.naranjaColor} _text={{color: "white", fontWeight: "bold"}}>
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
    boldText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.negroColor
    },
    image: {
        width: 50, height: 50,
        borderRadius: 1000,
    },
    siguienteButton: {
        marginRight:70,
        marginLeft:70,
        marginTop:70,
        paddingTop:12,
        paddingBottom:12,
        backgroundColor: Colors.naranjaColor,
        borderRadius:10,
    },
    siguienteText:{
        color: Colors.blancoColor,
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 20
    },
});

export default PerfilAsesor;

