import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from '../stacks/HomeStack';
import CustomSidebarMenu from './CustomSidebarMenu';

import BottomApp from '../reusables/BottomApp';
import SchedulesSettingsScreen from '../screens/SchedulesSettingsScreen';
import SecurityScreen from '../screens/SecurityScreen';
import About from '../screens/About';
import UserProfile from '../screens/UserProfile';

const Drawer = createDrawerNavigator();

function HeaderApp(props) {
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
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="home-outline" size={22} color={color} />
                        ),
                    }} 
                >
                    {(_) => <HomeStack asesor={props.asesor} screen={BottomApp} />}
                </Drawer.Screen>
                <Drawer.Screen
                    name="Perfil"
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="person-outline" size={22} color={color} />
                        ),
                    }} >
                        {(_) => <HomeStack asesor={props.asesor} screen={UserProfile} />}
                    </Drawer.Screen>
                <Drawer.Screen
                    name="Configuración de horario"
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="settings-outline" size={22} color={color} />
                        ),
                    }} >
                        {(_) => <HomeStack asesor={props.asesor} screen={SchedulesSettingsScreen} />}
                    </Drawer.Screen>
                <Drawer.Screen
                    name="Seguridad"
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="lock-closed-outline" size={22} color={color} />
                        ),
                    }} >
                        {(_) => <HomeStack asesor={props.asesor} screen={SecurityScreen} />}
                    </Drawer.Screen>
                <Drawer.Screen
                    name="Acerca de"
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="information-circle-outline" size={22} color={color} />
                        ),
                    }} >
                        {(_) => <HomeStack asesor={props.asesor} screen={About} />}
                    </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default HeaderApp;