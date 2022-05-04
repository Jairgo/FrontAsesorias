import React from 'react';
import SchedulesSettingsScreen from '../screens/SchedulesSettingsScreen';
import LogoTitle from '../items/LogoTitle';
import UserName from '../items/UserName';
import Notifications from '../items/Notifications';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function SchedulesSettingsStack() {
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
                name="SchedulesSettingsStacks"
                component={SchedulesSettingsScreen}
                options={({ navigation, route }) => ({
                    headerLeft: (props) =>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <LogoTitle {...props} />
                        </TouchableOpacity>,
                    headerTitle: (props) => <UserName {...props} />,
                    headerTitleAlign: 'center',
                    headerRight: () => <Notifications />,
                })}
            />
            {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
        </Stack.Navigator>
    );
}

export default SchedulesSettingsStack;