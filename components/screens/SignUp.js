import React from "react";
import {
  Input,
  Icon,
  Center,
  Stack,
  NativeBaseProvider,
  Button,
} from "native-base";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

function SingUp(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Animatable.View animation="fadeInRight">
          <Text style={styles.titulo}>Registro</Text>
        </Animatable.View>
      </View>
      <Inputs />
      <Animatable.View animation="fadeInUp">
        <Send
          navigation={props.navigation} />
      </Animatable.View>
    </ScrollView>
  );
}
function Inputs() {
  const [show, setShow] = React.useState(false);
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Stack space={4} w="100%" alignItems="center">
          <Input
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
            placeholder="Apellidos"
          />
          <Input
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
            placeholder="Confirm Password"
          />
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            InputLeftElement={
              <Icon
                as={<Feather name="briefcase" />}
                size={5}
                ml="2"
                color="#ff5900"
              />
            }
            placeholder="Carrera"
          />
          <Input
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
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
}
function Send(props) {
  return (
    <NativeBaseProvider>
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
        <Button size="sm" mt='5'
          onPress={() => props.navigation.goBack()}
        >Cancelar</Button>
        <Button size="sm" mt='5' color="secondary">
          Enviar
        </Button>
      </Stack>
    </NativeBaseProvider>
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
});
export default SingUp;
