import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, FontAwesome5, Feather, Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SubjectsScreens from '../screens/SubjectsScreens';
import PerfilAsesor from '../screens/PerfilAsesor';
import ListaAsesores from '../screens/ListaAsesores';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import AsesorStack from '../stacks/AsesorStack';

const Tab = createMaterialBottomTabNavigator();

export default function BottomApp(props) {
    const [IsAsesor, setIsAsesor] = useState(false);
    return (
        <Tab.Navigator
            initialRouteName="Inicio"
            activeColor="#fe5700"
            inactiveColor="#747D8C"
            barStyle={{ backgroundColor: '#f2f2f2' }}
        >
            <Tab.Screen
                name="Inicio"
                component={ScheduleScreen}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    ),
                }}
            />
            {IsAsesor ? 
                <Tab.Screen
                name="Materias"
                component={SubjectsScreens}
                options={{
                    tabBarLabel: 'Materias',
                    tabBarIcon: ({ color }) => (
                        <Feather name="book-open" color={color} size={24} />
                    ),
                }} /> :
                <Tab.Screen
                name="Asesores"
                component={AsesorStack}
                options={{
                    tabBarLabel: 'Asesores',
                    tabBarIcon: ({ color }) => (
                        <Feather name="book-open" color={color} size={24} />
                    ),
                }} />
            }
            <Tab.Screen
                name="Cuenta"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Cuenta',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-circle" color={color} size={24} />
                    ),
                }} />
        </Tab.Navigator>
    );
}
