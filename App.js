import React from 'react';
import { View } from 'react-native';
import HeaderApp from './components/reusables/HeaderApp';
import BottomApp from './components/reusables/BottomApp';

function App() {
  return (
    <BottomApp />
  );
}

export default App;





// import 'react-native-gesture-handler';

// import * as React from 'react';
// import {View, TouchableOpacity, Image} from 'react-native';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {Button, Text, SafeAreaView} from 'react-native';

// // import SecondPage from './pages/SecondPage';
// // import ThirdPage from './pages/ThirdPage';

// // Import Custom Sidebar
// import CustomSidebarMenu from './CustomSidebarMenu';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const NavigationDrawerStructure = (props) => {
//   //Structure for the navigatin Drawer
//   const toggleDrawer = () => {
//     //Props to open/close the drawer
//     props.navigationProps.toggleDrawer();
//   };

//   return (
//     <View style={{flexDirection: 'row'}}>
//       <TouchableOpacity onPress={toggleDrawer}>
//         {/*Donute Button Image */}
//         <Image
//           source={{
//             uri:
//               'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
//           }}
//           style={{width: 25, height: 25, marginLeft: 5}}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// function firstScreenStack({navigation}) {
//   return (
//     <Stack.Navigator initialRouteName="FirstPage">
//       <Stack.Screen
//         name="FirstPage"
//         component={FirstPage}
//         options={{
//           title: 'First Page', //Set Header Title
//           headerLeft: () => (
//             <NavigationDrawerStructure
//               navigationProps={navigation}
//             />
//           ),
//           headerStyle: {
//             backgroundColor: '#f4511e', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// function secondScreenStack({navigation}) {
//   return (
//     <Stack.Navigator
//       initialRouteName="SecondPage"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: '#f4511e', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         },
//       }}>
//       <Stack.Screen
//         name="SecondPage"
//         component={SecondPage}
//         options={{
//           title: 'Second Page', //Set Header Title
//         }}
//       />
//       <Stack.Screen
//         name="ThirdPage"
//         component={ThirdPage}
//         options={{
//           title: 'Third Page', //Set Header Title
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// const FirstPage = ({navigation}) => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={{flex: 1, padding: 16}}>
//         <View
//           style={{
//             flex: 1,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Text
//             style={{
//               fontSize: 25,
//               textAlign: 'center',
//               marginBottom: 16,
//             }}>
//             This is the First Page under First Page Option
//           </Text>
//           <Button
//             onPress={() => navigation.navigate('SecondPage')}
//             title="Go to Second Page"
//           />
//           <Button
//             onPress={() => navigation.navigate('ThirdPage')}
//             title="Go to Third Page"
//           />
//         </View>
//         <Text
//           style={{
//             fontSize: 18,
//             textAlign: 'center',
//             color: 'grey'
//           }}>
//           Custom React Navigate Drawer
//         </Text>
//         <Text
//           style={{
//             fontSize: 16,
//             textAlign: 'center',
//             color: 'grey'
//           }}>
//           www.aboutreact.com
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContentOptions={{
//           activeTintColor: '#e91e63',
//           itemStyle: {marginVertical: 5},
//         }}
//         drawerContent={(props) => <CustomSidebarMenu {...props} />}>
//         <Drawer.Screen
//           name="FirstPage"
//           options={{drawerLabel: 'First page Option'}}
//           component={firstScreenStack}
//         />
//         {/* <Drawer.Screen
//           name="SecondPage"
//           options={{drawerLabel: 'Second page Option'}}
//           component={secondScreenStack}
//         /> */}
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;









// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";

// import DrawerNavigator from "./components/navigation/DrawerNavigator";

// const App = () => {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;
