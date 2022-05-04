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
                <Drawer.Screen 
                    name="Inicio" 
                    component={HomeStack}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="home-outline" size={22} color={color} />
                        ),
                    }} 
                />
                <Drawer.Screen
                    name="Perfil"
                    component={ProfileScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="person-outline" size={22} color={color} />
                        ),
                    }} />
                <Drawer.Screen
                    name="Configuración de horario"
                    component={SchedulesSettingsScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="settings-outline" size={22} color={color} />
                        ),
                    }} />
                <Drawer.Screen
                    name="Seguridad"
                    component={SecurityScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="lock-closed-outline" size={22} color={color} />
                        ),
                    }} />
                <Drawer.Screen
                    name="Terminos y condiciones"
                    component={TermsAndConditionsScreen}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="information-circle-outline" size={22} color={color} />
                        ),
                    }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default HeaderApp;