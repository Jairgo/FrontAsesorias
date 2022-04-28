import React from 'react';
import TermsAndConditionsScreen from '../screens/TermsAndConditionsScreen';
import LogoTitle from '../items/LogoTitle';
import UserName from '../items/UserName';
import Notifications from '../items/Notifications';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function TermsAndConditionsStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#f4511e'
                },
            }}
        >
            <Stack.Screen 
                name="Home"
                component={TermsAndConditionsScreen}
                options={({ navigation, route }) => ({
                    headerLeft: (props) => <LogoTitle {...props} />,
                    headerTitle: (props) => <UserName {...props} />,
                    headerTitleAlign: 'center',
                    headerRight: () => <Notifications />,
                })}
            />
            {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
        </Stack.Navigator>
    );
}

export default TermsAndConditionsStack;