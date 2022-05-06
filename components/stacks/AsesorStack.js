import React from 'react';
import ListaAsesores from '../screens/ListaAsesores';
import PerfilAsesor from '../screens/PerfilAsesor';
import SolicitudAsesoria from '../screens/SolicitudAsesoria';
import SolicitudAsesoriaAgendada from '../screens/SolicitudAsesoriaAgendada';


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AsesorStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name="Lista Asesores"
                component={ListaAsesores}
            />
            <Stack.Screen name="PerfilAsesor" component={PerfilAsesor} />
            <Stack.Screen name="SolicitudAsesoria" component={SolicitudAsesoria} />
            <Stack.Screen name="SolicitudAsesoriaAgendada" component={SolicitudAsesoriaAgendada} />

        </Stack.Navigator>
    );

}

export default AsesorStack;