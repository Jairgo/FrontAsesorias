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
import { StyleSheet, Text, View, ScrollView,Image,Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { endpoints } from "../constants/Backend";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";


function SingUp(props) {
  const [image, setImage] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellido_paterno, setApellido_paterno] = useState("");
  const [apellido_materno, setApellido_materno] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [semestre, setSemestre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [asesor, setAsesor] = useState("false");
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
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert(
            "Sorry, Camera roll permissions are required to make this work!"
          );
        }
      }
    })();
  }, []);
  /*
Funcion que nos permite seleccionar una imagen de la galeria del telefono.
*/
const chooseImg = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    aspect: [4, 3],
    quality: 1,
    allowsEditing: true,
  });

  console.log(result);
/*
Si la imagen seleccionada es valida, se asigna a la variable image.
*/
  if (!result.cancelled) {
    setImage(result.uri);
  }
};
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
        const data = {
          nombre: nombre,
          apellido_paterno: apellido_paterno,
          apellido_materno: apellido_materno,
          correo: correo,
          password: password,
          carrera: carrera,
          semestre: semestre,
          telefono: telefono,
          asesor: asesor,
          foto: foto,
        };
        axios
          .post(endpoints.estudiantes, data)
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
            <Button
        onPress={chooseImg}
        leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}
      >
        Subir Foto
      </Button>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
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
