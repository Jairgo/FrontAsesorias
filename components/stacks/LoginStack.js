import React from "react";
import registro from "../screens/SignUp";
import login from "../screens/Login";
import reset from "../screens/ForgotPassword";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
/*
Stack de navegación para la pantalla de login.
Permite moverse entre login principal, el registro y la pantalla de olvido de contraseña.
*/
const Stack = createStackNavigator();

function LoginStack(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login">
          {(otherProps) => (
            <Login changeView={props.changeView} {...otherProps} />
          )}
        </Stack.Screen>
        <Stack.Screen name="registro" component={registro} />
        <Stack.Screen name="reset" component={reset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginStack;
