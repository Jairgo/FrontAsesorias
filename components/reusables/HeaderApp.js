import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import NotificationsScreen from '../stacks/NotificationsStack';
import ProfileScreen from '../stacks/ProfileStack';
import SchedulesSettingsScreen from '../stacks/SchedulesSettingsStack';
import SecurityScreen from '../stacks/SecurityStack';
import TermsAndConditionsScreen from '../stacks/TermsAndConditionsStack';
import HomeStack from '../stacks/HomeStack';

const Drawer = createDrawerNavigator();

function HeaderApp() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                useLegacyImplementation
                initialRouteName="Home"
                drawerContentOptions={{
                    activeTintColor: '#f4511e',
                    itemStyle: { marginVertical: 5 },
                }}
                screenOptions={{
                    headerShown: false,
                    drawerStyle: {
                        backgroundColor: 'white',
                        width: 250,
                        shadowColor: '#f4511e',
                    },
                }}>
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
                <Drawer.Screen name="Schedule Settings" component={SchedulesSettingsScreen} />
                <Drawer.Screen name="Security" component={SecurityScreen} />
                <Drawer.Screen name="Terms and conditions" component={TermsAndConditionsScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default HeaderApp;