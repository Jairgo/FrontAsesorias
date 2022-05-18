import React, { useState, useEffect } from "react";
import {
  Input,
  Icon,
  Center,
  Stack,
  NativeBaseProvider,
  Button,
  FormControl,
  Select,
  CheckIcon,
} from "native-base";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { endpoints } from "../constants/Backend";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import GalleryComponenet from "../screens/Gallery_component.js";

import * as ImagePicker from "expo-image-picker";

function SingUp(props) {
  const [nombre, setNombre] = useState("");
  const [apellido_paterno, setApellido_paterno] = useState("");
  const [apellido_materno, setApellido_materno] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [semestre, setSemestre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [carreras, setCarreras] = useState([]);
  const [carrera, setCarrera] = useState("");
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    async function getCarreras() {
      try {
        const carreras = await axios.get(
          "http://becasdeploy.pythonanywhere.com/carreras/"
        );
        setCarreras(carreras.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCarreras();
  }, []);
  const handleSubmit = () => {
    if (
      nombre.length > 0 &&
      apellido_paterno.length > 0 &&
      apellido_materno.length > 0 &&
      correo.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      semestre.length > 0 &&
      telefono.length > 0
    ) {
      if (passwordMatch(password, confirmPassword)) {
        /* const data = {
          nombre: nombre,
          apellido_paterno: apellido_paterno,
          apellido_materno: apellido_materno,
          correo: correo,
          password: password,
          carrera: carrera,
          semestre: semestre,
          telefono: telefono,
          // foto: foto,
        }; */
        let data = new FormData();
        data.append('nombre',nombre)
        data.append('apellido_paterno',apellido_paterno)
        data.append('apellido_materno',apellido_materno)
        data.append('correo',correo)
        data.append('contrasena',password)
        data.append('carrera',carrera)
        data.append('semestre',semestre)
        data.append('telefono',telefono)
        data.append('asesor',false)
        data.append('profile_picture_url',null)
        console.log(data);
        axios
          .post(endpoints.estudiantes, data,
            {headers: { "Content-Type": "multipart/form-data" }})
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("Las contraseñas no coinciden");
      }
    } else {
      alert("Todos los campos son requeridos");
    }
    if (!correo.includes("@anahuac.mx")) {
      alert("El correo debe ser un correo institucional");
    }
  };
  return (
    <NativeBaseProvider>
      <ScrollView>
        <View style={styles.container}>
          <Animatable.View animation="fadeInRight">
            <Text style={styles.titulo}>Registro</Text>
          </Animatable.View>
        </View>
        <Center flex={1} px="3">
          <Stack space={4} w="100%" alignItems="center">
            <Input
              onChangeText={(text) => setNombre(text)}
              w={{
                base: "75%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<Feather name="user" />}
                  size={5}
                  ml="2"
                  color="#ff5900"
                />
              }
              placeholder="Nombre/s"
            />
            <Input
              onChangeText={(text) => setApellido_paterno(text)}
              w={{
                base: "75%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<Feather name="users" />}
                  size={5}
                  ml="2"
                  color="#ff5900"
                />
              }
              placeholder="Apellido Paterno"
            />
            <Input
              onChangeText={(text) => setApellido_materno(text)}
              w={{
                base: "75%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<Feather name="users" />}
                  size={5}
                  ml="2"
                  color="#ff5900"
                />
              }
              placeholder="Apellido Materno"
            />
            <Input
              onChangeText={(text) => setCorreo(text)}
              w={{
                base: "75%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<Feather name="at-sign" />}
                  size={5}
                  ml="2"
                  color="#ff5900"
                />
              }
              placeholder="Correo"
            />
            <Input
              onChangeText={(text) => setTelefono(text)}
              w={{
                base: "75%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<Feather name="phone" />}
                  size={5}
                  ml="2"
                  color="#ff5900"
                />
              }
              placeholder="Teléfono"
            />
            <Input
              onChangeText={(text) => setPassword(text)}
              w={{
                base: "75%",
                md: "25%",
              }}
              type={show ? "text" : "password"}
              InputRightElement={
                <Icon
                  as={<Feather name={show ? "eye" : "eye-off"} />}
                  size={5}
                  mr="2"
                  color="#ff5900"
                  onPress={() => setShow(!show)}
                />
              }
              placeholder="Password"
            />
            <Input
              onChangeText={(text) => setConfirmPassword(text)}
              w={{
                base: "75%",
                md: "25%",
              }}
              type={show ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <FormControl maxW="75%" isRequired>
              <Select
                accessibilityLabel="Elegir Carrera"
                placeholder="Elige tú carrera"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size={5} />,
                }}
                mt="1"
                onValueChange={(itemValue) => setCarrera(itemValue)}
              >
                {carreras.map((carrera) => (
                  <Select.Item
                    label={carrera.nombre}
                    value={carrera.id}
                    key={carrera.id}
                  />
                ))}
              </Select>
            </FormControl>
            <Input
              onChangeText={(text) => setSemestre(text)}
              w={{
                base: "75%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<Feather name="hash" />}
                  size={5}
                  ml="2"
                  color="#ff5900"
                />
              }
              placeholder="Semestre"
            />
            {/* <GalleryComponenet /> */}
          </Stack>
        </Center>
        <Stack
          mb="2.5"
          mt="1.5"
          direction={{
            base: "row",
            md: "row",
          }}
          space={2}
          mx={{
            base: "auto",
            md: "0",
          }}
        >
          <Button
            style={styles.colorButtonCancel}
            size="sm"
            mt="5"
            onPress={() => props.navigation.goBack()}
          >
            Cancelar
          </Button>
          <Button
            onPress={handleSubmit}
            style={styles.colorButtonSend}
            size="sm"
            mt="5"
            color="secondary"
          >
            Enviar
          </Button>
        </Stack>
      </ScrollView>
    </NativeBaseProvider>
  );
}
function passwordMatch(password, confirmPassword) {
  return password === confirmPassword;
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
  titulo: {
    paddingTop: 35,
    fontSize: 50,
    color: "#34434D",
    fontWeight: "bold",
    paddingBottom: 20,
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
  colorButtonCancel: {
    backgroundColor: "#D1CECE",
    marginRight: 20,
    borderRadius: 5,
  },
  colorButtonSend: {
    backgroundColor: "#ff5900",
    borderRadius: 5,
  },
});

export default SingUp;
