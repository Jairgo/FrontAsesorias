import React from 'react';
import ListaAsesores from '../screens/ListaAsesores';
import PerfilAsesor from '../screens/PerfilAsesor';
import SoliciudAsesoria from '../screens/SoliciudAsesoria';
import SoliciudAsesoriaAgendada from '../screens/SoliciudAsesoriaAgendada';


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AsesorStack() {
    <Stack.Navigator>
        <Stack.Screen name="ListaAsesores" component={ListaAsesores}/>
        <Stack.Screen name="PerfilAsesor" component={PerfilAsesor}/>
        <Stack.Screen name="SoliciudAsesoria" component={SoliciudAsesoria}/>
        <Stack.Screen name="SoliciudAsesoriaAgendada" component={SoliciudAsesoriaAgendada}/>

    </Stack.Navigator>
}

export default AsesorStack;