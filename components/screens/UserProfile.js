import React, {useContext,useState} from 'react';
import {View, SafeAreaView, StyleSheet, Text, TouchableOpacity, Image,
        Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { main_endpoint } from '../constants/Backend';
import ModalUpdateUser from '../items/ModalUpdateUser';
import { UserContext } from '../UserContext';


function ProfileScreen() {
  const {user, setUser} = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={styles.mainUser}>
          <View style={{marginLeft: 20}}>
            <Text style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{user ? `${user.nombre} ${user.apellido_paterno} ${user.apellido_materno}` : ""}</Text>
            <Text style={styles.caption}>
              {user ? user.correo : ""}
            </Text>
          </View>
          <View style={{marginLeft: 8, marginTop:20}}>
            <TouchableOpacity onPress={()=>{setShowModal(true)}}>
              <Icon reverse name="pencil" color="#FD5A04" size={20}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={styles.listText}>Oaxaca, México</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={styles.listText}>{user ? user.telefono : ""}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={styles.listText}>{user ? user.correo : ""}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="face" color="#777777" size={20}/>
          <Text style={styles.listText}>{user ? `${user.semestre}º semestre` : ""}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="card-account-details" color="#777777" size={20}/>
          <Text style={styles.listText}>{user.asesor ? "Asesor" : "Estudiante"}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="card-account-details-outline" color="#777777" size={20}/>
          <Text style={styles.listText}>{user ? user.carrera.nombre : ""}</Text>
        </View>

      </View>
      <View style={styles.centerView}>
        <TouchableOpacity style={styles.btnAsesor} onPress={() => {}}>
            <Icon reverse name="account-convert" color="white" size={20}/>
            <Text style={{color: 'white'}}>Convertirme en asesor</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showModal} transparent={true} animationType="fade">
        <ModalUpdateUser
          user={user}
          close={() => setShowModal(false)}
        />
      </Modal>

    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  listText:{
    color:"#777777",
    marginLeft: 20,
    fontSize: 18,
  },
  btnAsesor:{
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FD5A04',
    width: '50%',
    padding: 4,
    borderRadius: 8,
  },
  centerView:{
    alignItems: 'center',
  },
  mainUser:{
    flexDirection: 'row', 
    marginTop: 15,
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  }
});