// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NotificationsScreen from '../screens/NotificationsScreen';

// import NotificationsScreen from '../stacks/NotificationsStack';
// import ProfileScreen from '../stacks/ProfileStack';
// import SchedulesSettingsScreen from '../stacks/SchedulesSettingsStack';
// import SecurityScreen from '../stacks/SecurityStack';
// import TermsAndConditionsScreen from '../stacks/TermsAndConditionsStack';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      {/* <Image
        source={
            require('../pictures/perfil.jpeg')
        }
        style={styles.tinyLogo}
      /> */}
      <DrawerContentScrollView 
      {...props}
      contentContainerStyle={{backgroundColor: '#f4511e'}}
      >
      <View
          // source={require('../pictures/orange_Background.png')}
          style={{padding: 20, backgroundColor: '#f4511e'}}
          >
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../pictures/perfil.jpeg')}
              style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10, opacity: 1}}
            />
            <View style={{flexDirection: 'column', marginLeft: 10}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  marginBottom: 5,
                }}>
                Jessica Ramírez
              </Text>
              <Text
                style={{
                  color: '#fff',
                  marginRight: 5,
                }}>
                Ing. Industrial
              </Text>
                {/* <FontAwesome5 name="coins" size={14} color="#fff" /> */}
            </View>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#f4511e'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Cerrar Sesión
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'orange'
  },
  tinyLogo: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginTop: 30,
    marginLeft: 10,
  },
  colorItem: {
    borderColor: 'orange',
    backgroundColor: 'orange',
    opacity: 0.7,
    color: 'white',
  },
});

export default CustomSidebarMenu;