import React from 'react';
import { Button, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LogoTitle from '../items/LogoTitle';
import UserName from '../items/UserName';
import Notifications from '../items/Notifications';



function SettingsScreen({ route, navigation }) {
  const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>userParam: {JSON.stringify(user)}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'Settings',
            params: { user: 'jane' },
          })
        }
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#f4511e'
            },
        }}
    >
    <Stack.Screen 
        // name="Profile" 
        // component={ProfileScreen} 
        name="Home"
        component={HomeScreen}
        // component={HomeScreen}
        options={({ navigation, route }) => ({
            headerLeft: (props) => <LogoTitle {...props} />,
            headerTitle: (props) => <UserName {...props} />,
            headerTitleAlign: 'center',
            headerRight: () => <Notifications />,
        })}
    />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function HeaderApp(props) {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                useLegacyImplementation
                initialRouteName="Root"
                screenOptions={{
                    headerShown: false 
                }}
            >
                <Drawer.Screen name="Root" component={Root} />
                <Drawer.Screen name="Home" component={HomeScreen} />
                {/* <Drawer.Screen name="Notification" component={Notifications} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
        // <NavigationContainer>
        //     <Stack.Navigator
        //         initialRouteName="Home"
        //         screenOptions={{
        //             headerTintColor: 'white',
        //             headerStyle: {
        //                 backgroundColor: '#f4511e'
        //             },
        //         }}
        //     >
        //         <Stack.Screen
        //             name="Home"
        //             component={props.HomeScreen}
        //             // component={HomeScreen}
        //             options={({ navigation, route }) => ({
        //                 headerTitle: (props) => <UserName {...props} />,
        //                 headerTitleAlign: 'center',
        //                 headerLeft: (props) => <LogoTitle {...props} />,
        //                 headerRight: () => <Notifications />,
        //             })}
        //         />
        //     </Stack.Navigator>
        // </NavigationContainer>
    );
}

export default HeaderApp;