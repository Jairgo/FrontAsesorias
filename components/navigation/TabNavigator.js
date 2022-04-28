import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainStackNavigator,} from '../navigation/StackNavigator'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
          headerShown: false, 
          drawerStyle: {
              backgroundColor: 'white',
              width: 250,
              shadowColor: '#f4511e'
          },
      }}
    >
      <Tab.Screen name="Inicio" component={MainStackNavigator} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator