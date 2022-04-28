import React from 'react';
import NotificationsScreen from '../screens/NotificationsScreen';
import LogoTitle from '../items/LogoTitle';
import UserName from '../items/UserName';
import Notifications from '../items/Notifications';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function NotificationsStack() {
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
                name="NotificationsStack"
                component={NotificationsScreen}
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

export default NotificationsStack;