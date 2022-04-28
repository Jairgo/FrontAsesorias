import React from 'react';
import BottomApp from '../reusables/BottomApp';
import LogoTitle from '../items/LogoTitle';
import UserName from '../items/UserName';
import Notifications from '../items/Notifications';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeStack() {
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
                name="HomeStack"
                component={BottomApp}
                options={({ navigation, route }) => ({
                    headerLeft: (props) => <LogoTitle {...props} />,
                    headerTitle: (props) => <UserName {...props} />,
                    headerTitleAlign: 'center',
                    headerRight: () => <Notifications />,
                })}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;