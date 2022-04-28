import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity,
         Modal, Pressable} from 'react-native'
import MateriaList from './MateriaList';
import AddMaterias from './AddMaterias';
const AsesorRequest = ()=>{
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style={styles.screen}>
            <Text style={{fontSize: 30}}>Solicitud</Text>
            <Text style={styles.text}>
            Para ser asesor requiueres especificar en que materias puedas impartir y el comite y una 
            descripcion sobre tus habilidades, el comite evaluara si tienes las capacidades para impartir 
            las materias y ter permitiran ser asesor.
            </Text>
            <TouchableOpacity style={styles.colView} onPress={() => setModalVisible(true)}>
                <Icon reverse name="plus" color="#FFA471" size={20}/>
                <Text>Materias</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.listM}>
                <MateriaList name="Algoritmos y programación"></MateriaList>
                <MateriaList name="Cálculo diferencial"></MateriaList>
            </ScrollView>
            <View style={styles.colView}>
                <TouchableOpacity style={styles.btnSend}>
                    <Text style={styles.textBtn}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCancel}> 
                    <Text style={styles.textBtn}>Cancelar</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ScrollView contentContainerStyle={styles.listM} >
                            <MateriaList name="Algoritmos y programación"></MateriaList>
                            <MateriaList name="Cálculo diferencial"></MateriaList>
                            <MateriaList name="Desarrollo de Software"/>
                            <MateriaList name="Arquitectura de Computadoras"/>
                            <MateriaList name="Sistemas Operativos"/>
                            <MateriaList name="Bases de datos"/>
                            <MateriaList name="Algoritmos y Programación"/>
                        </ScrollView>
                        <View style={styles.colView}>
                            <TouchableOpacity
                            style={styles.add}
                            >
                                <Icon reverse name="plus" color="white" size={20}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textBtn}>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        marginTop: '20%'
    },
    text:{
        fontSize: 12,
        marginLeft: '10%',
        marginRight: '10%',
        textAlign: 'center',
        color: '#828282',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    btnSend:{
        backgroundColor: '#FD5A04',
        margin: '2%',
        borderRadius: 8,
        color: 'white'
    },
    btnCancel:{
        backgroundColor: '#717171',
        margin: '2%',
        borderRadius: 8,
        color: 'white'
    },
    colView:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    add:{
        borderRadius: 100,
        backgroundColor: '#FD5A04',
        padding: '2%',
        elevation: 2,
        margin: '2%'
    },
    listM:{
        flexDirection: 'column',
        maxHeight: '60%',
    },
    textBtn:{
        padding: '2%'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        maxHeight: '50%',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    
});
export default AsesorRequest;