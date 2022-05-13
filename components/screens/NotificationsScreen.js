import react, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import NotificationsView from "./NotificationsView";
import { endpoints } from "../constants/Backend";
import axios from 'axios';

export default function NotificationsScreen() {

  // const [notifications, setNotifications] = useState();
  // const getNotifications = () => {

  //   let endpoint = 'http://10.0.2.2:8000/notificaciones/'

  //   axios.get(endpoint).then((response) => {
  //     console.log(JSON.stringify(response.data));
  //     setNotifications(notifications)
  //   }).catch(err => {
  //     console.log(err);
  //   }
  //   );
  // }

  // useEffect(() => {
  //   getNotifications();
  // }, []);

  const notifications = [
    {
      "id": 6,
      "nombre": "Titulo de notificacion 6",
      "descripcion": "descripcion de notificacion",
      "fecha": "2022-05-12",
      "estudiante": 1,
      "created": "2022-05-12T17:57:13.272459-05:00",
      "updated": "2022-05-12T17:57:13.272481-05:00"
    },
    {
      "id": 5,
      "nombre": "Titulo de notificacion 5",
      "descripcion": "descripcion de notificacion",
      "fecha": "2022-05-12",
      "estudiante": 1,
      "created": "2022-05-12T17:57:10.802024-05:00",
      "updated": "2022-05-12T17:57:10.802046-05:00"
    },
    {
      "id": 4,
      "nombre": "Titulo de notificacion 4",
      "descripcion": "descripcion de notificacion",
      "fecha": "2022-05-12",
      "estudiante": 1,
      "created": "2022-05-12T17:57:08.283999-05:00",
      "updated": "2022-05-12T17:57:08.284019-05:00"
    },
    {
      "id": 3,
      "nombre": "Titulo de notificacion 3",
      "descripcion": "descripcion de notificacion",
      "fecha": "2022-05-12",
      "estudiante": 1,
      "created": "2022-05-12T17:57:05.735620-05:00",
      "updated": "2022-05-12T17:57:05.735641-05:00"
    },
    {
      "id": 2,
      "nombre": "Titulo de notificacion 2",
      "descripcion": "descripcion de notificacion",
      "fecha": "2022-05-12",
      "estudiante": 1,
      "created": "2022-05-12T17:57:03.382375-05:00",
      "updated": "2022-05-12T17:57:03.382397-05:00"
    },
    {
      "id": 1,
      "nombre": "Titulo de notificacion 1",
      "descripcion": "descripcion de notificacion",
      "fecha": "2022-05-12",
      "estudiante": 1,
      "created": "2022-05-12T17:56:59.905500-05:00",
      "updated": "2022-05-12T17:56:59.905522-05:00"
    }
  ];

  console.log(notifications)

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>
        Notificaciones
      </Text>
      <ScrollView>
        {
          notifications.map((notifications) => (
            <NotificationsView
              key={notifications.id}
              nombre={notifications.nombre}
              descripcion={notifications.descripcion}
              fecha={notifications.fecha}
            />
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  screen: {
    paddingBottom: 40
  }
});