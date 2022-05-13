import React from 'react';
import registro from '../screens/SignUp';
import login from '../screens/Login';
import reset from '../screens/ForgotPassword';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function LoginStack(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name="Login"
                component={login}
            >
            </Stack.Screen>
            <Stack.Screen name="registro" component={registro} />
            <Stack.Screen name="reset" component={reset} />

        </Stack.Navigator>
    );

}

export default LoginStack;