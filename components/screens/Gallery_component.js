import React, { useState, useEffect } from "react";
import { Button, Stack, Icon, Center, NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Image, View, Platform } from "react-native";

/*
Componente que nos permite solicitar acceso a la galeria del telefono para la seleccion de una imagen.
*/
export default function GalleryComponenet() {
  const [image, setImage] = useState(null);
/*
  Funcion que nos permite seleccionar una imagen de la galeria del telefono.
*/
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert(
            "Sorry, Camera roll permissions are required to make this work!"
          );
        }
      }
    })();
  }, []);
/*
Funcion que nos permite seleccionar una imagen de la galeria del telefono.
*/
  const chooseImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      allowsEditing: true,
    });

		console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};

	return (

		<NativeBaseProvider >
{/* style={styles.container} */}
			<Button onPress={chooseImg} leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}>
				Subir Foto
			</Button>
			{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}



		</NativeBaseProvider>


	);
}
