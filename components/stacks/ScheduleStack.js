import React from 'react';
import SecurityScreen from '../screens/ScheduleScreen';


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ScheduleStack() {
    <Stack.Navigator>
        <Stack.Screen name="Horario"
            component={ScheduleScreen}
            options={{
                tabBarLabel: 'Horario',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="clock-outline" color={color} size={24} />
                ),
            }} />

    </Stack.Navigator>
}

export default ScheduleStack;