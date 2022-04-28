import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import {MainStackNavigator,
        ProfileStackNavigator, 
        NotificationsStackNavigator, 
        SchedulesStackNavigator, 
        SecurityStackNavigator, 
        TermsAndConditionsStackNavigator  } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Home3"
      drawerContentOptions={{
      activeTintColor: '#f4511e',
      itemStyle: {marginVertical: 5},
      }}
      screenOptions={{
          headerShown: false, 
          drawerStyle: {
              backgroundColor: 'white',
              width: 250,
              shadowColor: '#f4511e'
          },
      }}
    >
      <Drawer.Screen name="Inicio" component={TabNavigator} />
      <Drawer.Screen name="Perfil" component={ProfileStackNavigator} />
      <Drawer.Screen name="Ajustes de horario" component={SchedulesStackNavigator} />
      <Drawer.Screen name="Seguridad" component={SecurityStackNavigator} />
      <Drawer.Screen name="Términos y condiciones" component={TermsAndConditionsStackNavigator} />
      <Drawer.Screen name="Notificación" component={NotificationsStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
