import React, {useEffect,useState} from 'react';
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    TouchableOpacity,
    Image,
    Platform,
    TextInput
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {NativeBaseProvider } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from "../constants/Colors";
import GalleryComponenet from "../screens/Gallery_component";

const ModalUpdateUser = (props) => {
    const [image, setImage] = useState(null);
    const [phone, sePhone] = useState('');
    const [phoneError, sePhoneError] = useState('');
    const [profilePic, setProfilePic] = useState('');
	useEffect(() => {
		(async () => {
			if (Platform.OS !== 'web') {
				const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== 'granted') {
					alert('Sorry, Camera roll permissions are required to make this work!');
				}
			}
		})();
	}, []);
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
    const setPhoneNumber = (input) => {
        console.log(input.length);
        if(input.length > 10 || input.length<10){
            setPhoneError('Número de caracteres inválido')
        } else {
            setPhoneNumber(input);
            setPhoneError('');
        }
    }
    return (
        <View style={styles.screenContainer}>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>
                    {props.nombre}
                </Text>
                <Pressable 
                    style={styles.closeIcon}
                    onPress={() => props.close()}
                >
                    <FontAwesome5 name={"times"} color={"black"} size={16} solid />
                </Pressable>

                <View style={styles.column}>
                    <TouchableOpacity onPress={chooseImg} style={{backgroundColor: Colors.naranjaSecundarioColor, alignItems:'center',
                    padding: 10, borderRadius: 5}}>
                        <FontAwesome5 name={"upload"} color={Colors.orange} size={16} solid /> 
                        <Text style={styles.listText}>
                            Nueva foto de perfil
                        </Text>
                    </TouchableOpacity>
			        {image && <Image source={{ uri: image }}
                                    style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10, marginTop:10, opacity: 1}} />}
                </View>
                <View style={styles.row}>
                    <Text style={{marginRight: 4, color: Colors.orange}}>Teléfono: </Text>
                    <TextInput placeholder='Número de teléfono' keyboardType='numeric' onChangeText={input => setPhoneNumber(input)}></TextInput>
                </View>
                <Text style={{color: 'red'}}>{phoneError}</Text>
                <TouchableOpacity
                    onPress={props.onPress ? props.onPress: () => {props.close()}}
                    style={styles.ButtonStyle}
                >
                    <Text style={styles.textStyle}>
                        Guardar cambios
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ModalUpdateUser;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    container: {
        width: '80%',
        height: 'auto',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: "center",
    },
    closeIcon: {
        position: 'absolute',
        right: 20,
        top: 15,
    },
    titleStyle: {
        fontSize: 20, 
        textAlign: 'center', 
        marginBottom: 15,
    },
    ButtonStyle: {
        marginTop: 15, 
        backgroundColor: Colors.orange,
        borderRadius: 5, 
        paddingHorizontal: 10, 
        paddingVertical: 8,
    },
    textStyle: {
        color: 'white', 
        fontSize: 20,
    },
    column: {
        flexDirection: 'column',
        marginBottom: 4,
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 4,
        alignItems: 'center'
    },
    listText:{
        color:Colors.orange,
        fontSize: 18,
    },
});