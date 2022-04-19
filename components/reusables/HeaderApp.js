import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LogoTitle from '../Items.js/LogoTitle';

const Stack = createNativeStackNavigator();

function HeaderApp() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Home 1"
                component={HomeScreen}
                options={{
                    headerTitle: (props) => <LogoTitle {...props} />
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HeaderApp;