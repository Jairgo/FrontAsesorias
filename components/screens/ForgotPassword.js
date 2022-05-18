  import { StatusBar } from "expo-status-bar";
  import React from "react";
  import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
  import ButtonGradient from "./ButtonGradient";
  import * as Animatable from "react-native-animatable";
  const { width, height } = Dimensions.get("window");

  /*
  Esta pantalla es la pantalla de recuperar contraseña, donde se puede ingresar con un correo siemppre y cuando el usuario exista en la base de datos.
  SOLAMENTE ES PANTALLA VISUAL NO FUNCIONAL
  */

  export default function ForgotPassword(props) {
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
      );
    }

    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.containerSVG}>
          <SvgTop />
        </View>
        <View style={styles.container}>
          <Animatable.View animation="fadeInRight">
            <Text style={styles.titulo}>Recuperación</Text>
          </Animatable.View>
          <Text style={styles.subTitle}>
            Ingresa tu correo para recibir un código de recuperación
          </Text>
          <TextInput placeholder="usuario@anahuac.mx" style={styles.textInput} />
          <Animatable.View style={{ marginTop: 20 }} animation="fadeInUp">
            <ButtonGradient navigation={props.navigation} close={props.navigation}/>
          </Animatable.View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: "white",
      flex: 1,
    },
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
    containerSVG: {
      width: width,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    titulo: {
      fontSize: 60,
      color: "#34434D",
      fontWeight: "bold",
    },
    subTitle: {
      fontSize: 20,
      color: "gray",
    },
    textInput: {
      padding: 10,
      paddingStart: 30,
      width: "80%",
      height: 50,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: "#ededed",
    },
    forgotPassword: {
      fontSize: 14,
      color: "gray",
      marginTop: 20,
    },
  });
