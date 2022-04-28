import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SchedulesSettingsScreen from "../screens/SchedulesSettingsScreen";
import SecurityScreen from "../screens/SecurityScreen";
import TermsAndConditionsScreen from "../screens/TermsAndConditionsScreen";


import LogoTitle from '../items/LogoTitle';
import UserName from '../items/UserName';
import Notifications from '../items/Notifications';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={({ navigation, route }) => ({
            headerLeft: (props) => 
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <LogoTitle {...props}/>
                </TouchableOpacity>,
            headerTitle: (props) => <UserName {...props} />,
            headerTitleAlign: 'center',
            headerRight: () => <Notifications />,
        })}
      />
      <Stack.Screen 
        name="About" 
        component={About} 
        options={() => ({
          headerTitleAlign: 'center',
          headerRight: () => <Notifications />,
      })}
      />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={({ navigation, route }) => ({
          headerLeft: (props) => 
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <LogoTitle {...props}/>
              </TouchableOpacity>,
          headerTitle: (props) => <UserName {...props} />,
          headerTitleAlign: 'center',
          headerRight: () => <Notifications />,
      })}
      />
    </Stack.Navigator>
  );
};

const NotificationsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen 
        name="Notifications" 
        component={NotificationsScreen} 
        options={({ navigation, route }) => ({
          headerLeft: (props) => 
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <LogoTitle {...props}/>
              </TouchableOpacity>,
          headerTitle: (props) => <UserName {...props} />,
          headerTitleAlign: 'center',
          headerRight: () => <Notifications />,
      })}
    />
    </Stack.Navigator>
  );
};

const SchedulesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen 
        name="ScheduleSettings" 
        component={SchedulesSettingsScreen} 
        options={({ navigation, route }) => ({
          headerLeft: (props) => 
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <LogoTitle {...props}/>
              </TouchableOpacity>,
          headerTitle: (props) => <UserName {...props} />,
          headerTitleAlign: 'center',
          headerRight: () => <Notifications />,
      })}
    />
    </Stack.Navigator>
  );
};

const SecurityStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen 
        name="Security" 
        component={SecurityScreen} 
        options={({ navigation, route }) => ({
          headerLeft: (props) => 
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <LogoTitle {...props}/>
              </TouchableOpacity>,
          headerTitle: (props) => <UserName {...props} />,
          headerTitleAlign: 'center',
          headerRight: () => <Notifications />,
      })}
    />
    </Stack.Navigator>
  );
};

const TermsAndConditionsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen 
        name="TermsAndConditions" 
        component={TermsAndConditionsScreen} 
        options={({ navigation, route }) => ({
          headerLeft: (props) => 
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <LogoTitle {...props}/>
              </TouchableOpacity>,
          headerTitle: (props) => <UserName {...props} />,
          headerTitleAlign: 'center',
          headerRight: () => <Notifications />,
      })}
    />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, 
         ProfileStackNavigator, 
         NotificationsStackNavigator, 
         SchedulesStackNavigator, 
         SecurityStackNavigator, 
         TermsAndConditionsStackNavigator 
};
