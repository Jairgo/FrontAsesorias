import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ProfileScreen = () => {

  const myCustomShare = async() => {
    const shareOptions = {
      message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
      url: files.appLogo,
      // urls: [files.image1, files.image2]
    }

    try {
    //   const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{marginLeft: 20}}>
            <Text style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>John Doe</Text>
            <Text style={styles.caption}>@j_doe</Text>
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
          <Text style={styles.listText}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={styles.listText}>john_doe@anahuac.mx</Text>
        </View>
        <View style={styles.row}>
          <Icon name="face" color="#777777" size={20}/>
          <Text style={styles.listText}>6° semestre</Text>
        </View>
        <View style={styles.row}>
          <Icon name="card-account-details" color="#777777" size={20}/>
          <Text style={styles.listText}>Estudiante</Text>
        </View>
        <View style={styles.row}>
          <Icon name="card-account-details-outline" color="#777777" size={20}/>
          <Text style={styles.listText}>Ingeniería Biomédica</Text>
        </View>
      </View>

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
  }
});