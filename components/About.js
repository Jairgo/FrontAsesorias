import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
const About = ()=>{
    return (
    <View style={styles.screen}>
        <Image source={require('../assets/img/a.png')}
                style={styles.image} />
        <Text style={styles.text}>
            AsesoriasApp es una aplicación creada por estudiantes de la Universidad Anáhuac Oaxaca para brindar una 
            herramienta a los alumnos de agendar asesorías con otros estudiantes que dominen el tema.
        </Text>
        <Text style={styles.credits}>
            Elaborado por Erick Guzmán, Guillermo Ramírez, Jair Gómez, Jehiely Ruiz, Jorge Domínguez y Julio Fabián.
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        margin: 'auto',
        width: '24%',
        height: 100,
        marginBottom: 18
    },
    text:{
        fontSize: 20,
        marginLeft: '10%',
        marginRight: '10%',
        textAlign: 'justify'
    },
    credits:{
        fontSize: 18,
        color: '#828282',
        marginLeft: '10%',
        marginRight: '10%',
        textAlign: 'center'
    }
});
export default About;