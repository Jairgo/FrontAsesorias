import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, FontAwesome5, Feather} from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SubjectsScreens from '../screens/SubjectsScreens';
import PerfilAsesor from '../screens/PerfilAsesor';
import ListaAsesores from '../screens/ListaAsesores';
import MessageScreen from '../screens/MessageScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import AsesorStack from '../stacks/AsesorStack';
import NotificationsScreen from '../screens/NotificationsScreen';

const Tab = createMaterialBottomTabNavigator();

export default function BottomApp(props) {
    return (
        <Tab.Navigator
            initialRouteName="Inicio"
            activeColor="#fe5700"
            inactiveColor="#747D8C"
            barStyle={{ backgroundColor: '#f2f2f2' }}
        >
            <Tab.Screen
                name="Inicio"
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    ),
                }}
                
            >
                {(_) => <ScheduleScreen asesor={props.asesor} userId={props.userId} />}
            </Tab.Screen>
            {props.asesor
             ? (
                <Tab.Screen
                    name="Materias"
                    options={{
                        tabBarLabel: 'Materias',
                        tabBarIcon: ({ color }) => (
                            <Feather name="book-open" color={color} size={24} />
                        ),
                    }}
                >

                    {(_) => <SubjectsScreens userId={props.userId} />}
                </Tab.Screen>
             ) : (
                <Tab.Screen
                    name="Asesores"
                    component={AsesorStack}
                    options={{
                        tabBarLabel: 'Asesores',
                        tabBarIcon: ({ color }) => (
                            <Feather name="book-open" color={color} size={24} />
                        ),
                    }} 
                />
            )}
            <Tab.Screen
                name="Notificaciones"
                component={NotificationsScreen}
                options={{
                    tabBarLabel: 'Notificaciones',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="bell" color={color} size={24} />
                    ),
                }} />
        </Tab.Navigator>
    );
}
