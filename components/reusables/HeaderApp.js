import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NotificationsScreen from '../stacks/NotificationsStack';
import ProfileScreen from '../stacks/ProfileStack';
import SchedulesSettingsScreen from '../stacks/SchedulesSettingsStack';
import SecurityScreen from '../stacks/SecurityStack';
import TermsAndConditionsScreen from '../stacks/TermsAndConditionsStack';
import CustomSidebarMenu from './CustomSidebarMenu';



// function SettingsScreen({ route, navigation }) {
//   const { user } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Settings Screen</Text>
//       <Text>userParam: {JSON.stringify(user)}</Text>
//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </View>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Settings"
//         onPress={() =>
//           navigation.navigate('Root', {
//             screen: 'Settings',
//             params: { user: 'jane' },
//           })
//         }
//       />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// function Root() {
//   return (
//     <Stack.Navigator
//         screenOptions={{
//             headerTintColor: 'white',
//             headerStyle: {
//                 backgroundColor: '#f4511e'
//             },
//         }}
//     >
//         <Stack.Screen 
//             name="Home"
//             // component={HomeScreen}
//             component={HomeScreen}
//             options={({ navigation, route }) => ({
//                 headerLeft: (props) => <LogoTitle {...props} />,
//                 headerTitle: (props) => <UserName {...props} />,
//                 headerTitleAlign: 'center',
//                 headerRight: () => <Notifications />,
//             })}
//         />
//         <Stack.Screen name="Settings" component={SettingsScreen} />
//     </Stack.Navigator>
//   );
// }

function HeaderApp() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                // useLegacyImplementation
                // initialRouteName="Profile"
                // drawerContentOptions={{
                // activeTintColor: '#f4511e',
                // itemStyle: {marginVertical: 5},
                // }}
                // screenOptions={{
                //     headerShown: false, 
                //     drawerStyle: {
                //         backgroundColor: 'white',
                //         width: 250,
                //         shadowColor: '#f4511e',
                //     },
                //     // drawerType: isLargeScreen ? 'permanent' : 'back',
                //     // drawerStyle: isLargeScreen ? null : { width: '100%' },
                //     overlayColor: 1,
                // }}
                drawerContent={(props) => <CustomSidebarMenu {...props} />}
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
                    name="Profile" 
                    component={ProfileScreen}
                    options={{
                        drawerIcon: ({color}) => (
                          <Ionicons name="home-outline" size={22} color={color} />
                        ),
                    }}/>
                <Drawer.Screen 
                    name="Schedule Settings" 
                    component={SchedulesSettingsScreen} 
                    options={{
                        drawerIcon: ({color}) => (
                          <Ionicons name="home-outline" size={22} color={color} />
                        ),
                    }}/>
                <Drawer.Screen 
                    name="Security" 
                    component={SecurityScreen} 
                    options={{
                        drawerIcon: ({color}) => (
                          <Ionicons name="home-outline" size={22} color={color} />
                        ),
                    }}/>
                <Drawer.Screen 
                    name="Terms and conditions" 
                    component={TermsAndConditionsScreen} 
                    options={{
                        drawerIcon: ({color}) => (
                          <Ionicons name="home-outline" size={22} color={color} />
                        ),
                    }}/>
                <Drawer.Screen 
                    name="Notifications" 
                    component={NotificationsScreen} 
                    options={{
                        drawerIcon: ({color}) => (
                          <Ionicons name="home-outline" size={22} color={color} />
                        ),
                    }}/>
            </Drawer.Navigator>
        </NavigationContainer>
        // <NavigationContainer>
        //     <Drawer.Navigator
        //         drawerContentOptions={{
        //         activeTintColor: '#e91e63',
        //         itemStyle: {marginVertical: 5},
        //         }}
        //         screenOptions={{
        //             headerShown: false, 
        //             drawerStyle: {
        //                 width: 250,
        //             },
        //         }}
        //         drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        //         {/* <Drawer.Screen
        //         name="FirstPage"
        //         options={{drawerLabel: 'First page Option'}}
        //         component={firstScreenStack}
        //         /> */}
        //         <Drawer.Screen name="Profile" component={ProfileScreen}/>
        //     </Drawer.Navigator>
        // </NavigationContainer>
    );
}

export default HeaderApp;