import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native'
import MateriaList from './MateriaList';
const AsesorRequest = ()=>{
    return(
        <View style={styles.screen}>
            <Text style={{fontSize: 30}}>Solicitud</Text>
            <Text style={styles.text}>
            Para ser asesor requiueres especificar en que materias puedas impartir y el comite y una 
            descripcion sobre tus habilidades, el comite evaluara si tienes las capacidades para impartir 
            las materias y ter permitiran ser asesor.
            </Text>
            <TouchableOpacity style={styles.colView} onPress={()=>{}}>
                <Icon name="plus" color="#FFA471" size={20}/>
                <Text>Materias</Text>
            </TouchableOpacity>
            <ScrollView style={styles.listM}>
                <MateriaList name="Algoritmos y programación"></MateriaList>
                <MateriaList name="Cálculo diferencial"></MateriaList>
            </ScrollView>
            <View style={styles.colView}>
                <Button title='Enviar' style={styles.btnSend}/>
                <Button title='Cancelar' style={styles.btnCancel}/>
            </View>
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
    btnSend:{
        backgroundColor: '#FD5A04',
        marginRight: 10
    },
    btnCancel:{
        backgroundColor: '#717171',
    },
    colView:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    add:{
        borderRadius: 100,
        backgroundColor: 'orange',
    },
    listM:{
        height: '40%',
    }
    
});
export default AsesorRequest;