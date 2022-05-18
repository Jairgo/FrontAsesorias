import React, { useContext } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { UserContext } from "../UserContext";
import { main_endpoint } from '../constants/Backend';

/**
 * Función para personalizar la barra lateral que se abre al precionar el logo del usuario
 * @param {*} props 
 * En props recibe los stacks y estilos que provienen de la función HeaderApp
 * @returns Regresa una barra lateral personalizada con los colores y estilos establecidos
 */


const CustomSidebarMenu = (props) => {
  const {user, setUser} = useContext(UserContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView 
        {...props}
        contentContainerStyle={{backgroundColor: '#f4511e'}}
      >
      <View
          style={{padding: 20, backgroundColor: '#f4511e'}}
          >
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{uri: user ? main_endpoint + user.profile_picture_url : 'https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png'}}
              style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10, opacity: 1}}
            />
            <View style={{flexDirection: 'column', marginLeft: 10}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  marginBottom: 5,
                }}>
                {user ? user.nombre : ""}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  marginRight: 5,
                  marginBottom: 5,
                }}>
                {user ? user.carrera.nombre : ""}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  marginRight: 5,
                }}>
                {user ? user.semestre : ""}º semestre
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#f4511e'}}>
        <TouchableOpacity onPress={() => props.changeView()} style={{paddingVertical: 15}}>
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