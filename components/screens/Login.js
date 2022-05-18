  import { StatusBar } from "expo-status-bar";
  import React, { useState, useContext } from "react";
  import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Modal,
  } from "react-native";
  import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
  import ButtonGradient from "./ButtonGradient";
  import * as Animatable from "react-native-animatable";
  import axios from "axios";
  import ModalChangeUser from "../items/ModalChangeUser";
  import { UserContext } from "../UserContext";
  const { width, height } = Dimensions.get("window");
  /*
  Esta pantalla es la pantalla de login, donde se puede ingresar con un correo y contraseña siemppre y cuando el usuario exista en la base de datos.
  */
  export default function Login(props) {
    //Estas son las variables que se usan en el componente
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [showLoader, setLoader] = useState(false);
    const [modalData, setModalData] = useState({
      text: "",
      isOpen: false,
    });
    const { user, setUser } = useContext(UserContext);
  /*
  Esta funcion es la que se encarga de hacer el llamado al backend para verificar si el usuario existe en la base de datos.
  */
    const login = () => {
      if (mail === "")
        setModalData({
          text: "Indique una cuenta de correo electrónico",
          isOpen: true,
        });
      else if (password === "")
        setModalData({
          text: "Indique su contraseña",
          isOpen: true,
        });
      else {
        setLoader(true);
        let endpoint = "http://becasdeploy.pythonanywhere.com/login/";
        let credentials = {
          correo: mail,
          contrasena: password,
        };
  /*
  Con axios mandamos la informacion del frontend al backend para verificar si el usuario existe en la base de datos.
  */
        axios.post(endpoint, credentials).then(
          (response) => {
            setLoader(false);
            props.changeView(true);
            setUser(response.data);
          },
          (error) => {
            setModalData({
              text: "Credenciales incorrectas",
              isOpen: true,
            });
            setLoader(false);
          }
        );
      }
    };
  /*
  El componente SVG TOP se encarga de la parte del Header del login de la aplicacion, fue hecho en https://react-svgr.com/playground/
  */
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
    /*
    El siguiente componente regresa la parte visual de la pantalla de login, es decir, el header, el input de correo, el input de contraseña, el boton de login y el boton de registro.   
    */
    return (
      <ScrollView style={styles.mainContainer}>
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
            onChangeText={(input) => setMail(input)}
          />
          <TextInput
            placeholder="password"
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={(input) => setPassword(input)}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate("reset")}
            navigation={props.navigation}
          >
            <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <Animatable.View animation="fadeInUp">
            <ButtonGradient login={() => login()} />
          </Animatable.View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("registro")}
            navigation={props.navigation}
          >
            <Text style={styles.forgotPassword}>¿Aún no tienes cuenta?</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
        <ActivityIndicator size="large" color="#ff5900" animating={showLoader} />
        <Modal visible={modalData.isOpen} transparent={true} animationType="fade">
          <ModalChangeUser
            text={modalData.text}
            close={() => setModalData({ isOpen: false })}
            onPress={() => setModalData({ isOpen: false })}
          />
        </Modal>
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
        fontSize: 70,
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
        marginTop: 15,
        marginBottom: 15,
      },
  });
