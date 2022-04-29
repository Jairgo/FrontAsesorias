import React from 'react';
import SecurityScreen from '../screens/SecurityScreen';
import LogoTitle from '../items/LogoTitle';
import UserName from '../items/UserName';
import Notifications from '../items/Notifications';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function SecurityStack() {
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
                name="SecurityStack"
                component={SecurityScreen}
                options={({ navigation, route }) => ({
                    headerLeft: (props) => 
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <LogoTitle {...props}/>
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

export default SecurityStack;