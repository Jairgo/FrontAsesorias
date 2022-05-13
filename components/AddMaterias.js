import React from 'react'
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import MateriaList from './MateriaList';
const AddMaterias = ()=>{
    return (
        <ScrollView style={styles.listM}>
            <MateriaList name="Algoritmos y programación"></MateriaList>
            <MateriaList name="Cálculo diferencial"></MateriaList>
            <MateriaList name="Desarrollo de Software"/>
            <MateriaList name="Arquitectura de Computadoras"/>
            <MateriaList name="Sistemas Operativos"/>
            <MateriaList name="Bases de datos"/>
            <MateriaList name="Algoritmos y Programación"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    
    listM:{
        flexDirection: 'column',
    },
});
export default AddMaterias;