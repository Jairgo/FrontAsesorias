import React from 'react';
import LogoTitle from '../items/LogoTitle';
import UserName from '../items/UserName';
import UserChange from '../items/UserChange';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

const Stack = createStackNavigator();

/**
 * Función que muestra la vista selecionada desde la barra laterral izquierda
 * @param {asesor, toggleAsesor, screen, userId} props 
 * props.asesor: Booleano para saber si está como asesor o estudiante.
 * props.toggleAsesor: Función para cambiar entre estudiante y asesor.
 * props.screen: Variable que contiene la pantalla que se debe mostrar de a cuerdo a la que se seleccionó desde el HeaderApp.
 * props.userId: Variable con el id del usuario.
 * @returns Regresa la vista que debe mostrarse de acuerdo a lo que se selecciono desde la barra lateral izquierda
 */



function HomeStack(props) {

    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#f4511e',
                    height: Platform.OS === "ios" ? 110 : undefined,
                },
            }}
        >
            <Stack.Screen
                name="HomeStack"
                options={({ navigation, route }) => ({
                    headerLeft: (otherProps) =>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <LogoTitle {...otherProps} />
                        </TouchableOpacity>,
                    headerTitle: (otherProps) => <UserName {...otherProps} title={props.asesor ? "Asesor" : "Estudiante"}  />,
                    headerTitleAlign: 'center',
                    headerRight: () => <UserChange asesor={props.asesor} toggleAsesor={props.toggleAsesor}/>,
                })}
            >
                {(_) => <props.screen asesor={props.asesor} userId={props.userId} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default HomeStack;