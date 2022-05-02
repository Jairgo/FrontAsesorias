import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NotificationsScreen from '../stacks/NotificationsStack';
import ProfileScreen from '../stacks/ProfileStack';
import SchedulesSettingsScreen from '../stacks/SchedulesSettingsStack';
import SecurityScreen from '../stacks/SecurityStack';
import TermsAndConditionsScreen from '../stacks/TermsAndConditionsStack';
import HomeStack from '../stacks/HomeStack';
import CustomSidebarMenu from './CustomSidebarMenu';

const Drawer = createDrawerNavigator();

function HeaderApp() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomSidebarMenu {...props} />}
                screenOptions={{
                    headerShown: false,
                    drawerActiveBackgroundColor: '#f4511e',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#333',
                    drawerLabelStyle: {
                        marginLeft: -25,
                        fontSize: 15,
                    },
                }}>
                {/* <Drawer.Screen name="Root" component={Root} /> */}
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="home-outline" size={22} color={color} />
                        ),
                    }} />
                <Drawer.Screen
                    name="Schedule Settings"
                    component={SchedulesSettingsScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="home-outline" size={22} color={color} />
                        ),
                    }} />
                <Drawer.Screen
                    name="Security"
                    component={SecurityScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="home-outline" size={22} color={color} />
                        ),
                    }} />
                <Drawer.Screen
                    name="Terms and conditions"
                    component={TermsAndConditionsScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="home-outline" size={22} color={color} />
                        ),
                    }} />
                <Drawer.Screen
                    name="Notifications"
                    component={NotificationsScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="home-outline" size={22} color={color} />
                        ),
                    }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default HeaderApp;