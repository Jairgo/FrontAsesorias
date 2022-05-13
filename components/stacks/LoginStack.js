import React from 'react';
import registro from '../screens/SignUp';
import login from '../screens/Login';
import reset from '../screens/ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function LoginStack(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen
                    name="Login"
                    component={login}
                />
                <Stack.Screen name="registro" component={registro} />
                <Stack.Screen name="reset" component={reset} />

            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default LoginStack;