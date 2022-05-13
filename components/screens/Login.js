import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, 
          ScrollView, ActivityIndicator, Alert} from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import ButtonGradient from './ButtonGradient';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-paper';
import axios from 'axios';
const { width, height } = Dimensions.get('window')

export default function Login(props) {

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoader, setLoader] = useState(false);

  const login = () =>{
    if(mail === '') Alert.alert("","Indica una cuenta de correo electrónico");
    else if(password === '') Alert.alert("","Indica tu contraseña");
    else {
      setLoader(true);
      let endpoint = 'http://becasdeploy.pythonanywhere.com/login/';
      let credentials = {
        correo: mail,
        contrasena: password
      };
      console.log(credentials);
      axios.post(endpoint, credentials).then(response => {
        setLoader(false);
        props.changeView(true);
      }).catch(e => {
        Alert.alert("Error","Credenciales incorrectas");
        setLoader(false);
      });
    } 
  }


  function SvgTop() {
    return (
      <Svg
      width={500}
      height={324}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
        fill="url(#prefix__paint0_linear_103:6)"
        fillOpacity={0.5}
      />
      <Path
        d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
        fill="url(#prefix__paint1_linear_103:6)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_103:6"
          x1={492.715}
          y1={231.205}
          x2={480.057}
          y2={364.215}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#f49e73" />
          <Stop offset={1} stopColor="#f49e73" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_103:6"
          x1={7.304}
          y1={4.155}
          x2={144.016}
          y2={422.041}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#ff5900" />
          <Stop offset={1} stopColor="#f49e73" />
        </LinearGradient>
      </Defs>
    </Svg>
    )
  }
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.containerSVG}>
          <SvgTop />
        </View>
        <View style={styles.container}>
          <Animatable.View animation="fadeInRight">
            <Text style={styles.titulo}>Bienvenido</Text>
          </Animatable.View>
          <Text style={styles.subTitle}>Inicia sesión para continuar</Text>
          <TextInput
            placeholder="usuario@anahuac.mx"
            style={styles.textInput}
            onChangeText={input => setMail(input)}
          />
          <TextInput
            placeholder="password"
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={input => setPassword(input)}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("reset")}
            navigation={navigation}>
            <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSVG: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 70,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#ededed',
  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 15,
    marginBottom: 15
  },

  
});


