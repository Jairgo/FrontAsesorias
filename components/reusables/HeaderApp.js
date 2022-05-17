import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from '../stacks/HomeStack';
import CustomSidebarMenu from './CustomSidebarMenu';

import BottomApp from '../reusables/BottomApp';
import SchedulesSettingsScreen from '../screens/SchedulesSettingsScreen';
import About from '../screens/About';
import UserProfile from '../screens/UserProfile';

const Drawer = createDrawerNavigator();

/**
 * Función para abrir la barra lateral izquierda al precionar el logo del usuario
 * @param {asesor, userId, toggleAsesor *} props 
 * props.asesor: Contiene un booleano para saber si es hacer o no.
 * props.userId: Contiene el id del usuario.
 * props.toggleAsesor: Contiene la función para cambiar de estudiante a asesor y viceversa.
 * @returns Regresa la barra laterail de la izquierda que se abre al precionar el logo del usuario, 
 * para navegar entre las vista como son inicio, perfil, configuración de horario, acerca de, y cerrar sesión
 */

function HeaderApp(props) {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(propsInt) => <CustomSidebarMenu {...propsInt} changeView={() => props.changeView(false)} />}
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
                    {(_) => <HomeStack asesor={props.asesor} userId={props.userId} screen={BottomApp} toggleAsesor={props.toggleAsesor}/>}
                </Drawer.Screen>
                <Drawer.Screen
                    name="Perfil"
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="person-outline" size={22} color={color} />
                        ),
                    }} 
                >
                    {(_) => <HomeStack asesor={props.asesor} userId={props.userId} screen={UserProfile} toggleAsesor={props.toggleAsesor}/>}
                </Drawer.Screen>
                {
                    props.asesor ? (
                        <Drawer.Screen
                            name="Configuración de horario"
                            options={{
                                drawerIcon: ({ color }) => (
                                    <Ionicons name="settings-outline" size={22} color={color} />
                                ),
                            }} >
                            {(_) => <HomeStack asesor={props.asesor} userId={props.userId} screen={SchedulesSettingsScreen} toggleAsesor={props.toggleAsesor}/>}
                        </Drawer.Screen>
                    ) : <></>
                }
                <Drawer.Screen
                    name="Acerca de"
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="information-circle-outline" size={22} color={color} />
                        ),
                    }} >
                        {(_) => <HomeStack asesor={props.asesor} userId={props.userId} screen={About} toggleAsesor={props.toggleAsesor}/>}
                    </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default HeaderApp;