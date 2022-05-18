import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    TouchableOpacity,
    Image,
    Platform,
    TextInput,
    ActivityIndicator, 
    Modal
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { NativeBaseProvider } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from "../constants/Colors";
import ModalChangeUser from './ModalChangeUser';
import axios from 'axios';
import { endpoints } from '../constants/Backend';

/* 
    función para actualizar el teléfono y/o la foto de perfil del usuario
    @param {props}
    props contiene la función para cerrar el modal al igual que la información del usuario
    logueado en la aplicación
    @returns regresa el contenido del modal donde se ingresan los datos nuevos
 */

const ModalUpdateUser = (props) => {
    const [image, setImage] = useState(null);
    const [showLoader, setLoader] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [modalData, setModalData] = useState({
        text: "",
        isOpen: false
    });

    /*
        useEffect para preguntar por los permisos a la galería y subir un archivo
     */
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
    /* 
        función para abrir la galería del usuario y guardar el uri de la imagen
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
    /* 
        función para validar los caracteres que se ingresan en el campo teléfono
        @param {input}
        input contiene el texto ingresado en el front
     */
    const setPhoneNumber = (input) => {
        if (input.length != 10) {
            setPhoneError('Número de caracteres inválido')
        } else {
            setPhone(input);
            setPhoneError('');
        }
    }
    /* 
        función que guarda los cambios ingresados por el usuario para actualizar la información
        de su perfil, contiene petición PATCH al endpoint con los datos ingresados por el usuario
     */
    const saveChanges = () => {
        if (phoneError == '') {
            setLoader(true);
            let name =image.substr(image.lastIndexOf('/')+1);
            let bodyFormData = new FormData();
            if(image) bodyFormData.append('profile_picture_url',{uri: image, type:'image/jpeg',name:name});
            if(phone != '' ) bodyFormData.append('telefono',phone);
            axios.patch(endpoints.updateEstudiantes(props.user.id),
            bodyFormData,
            {headers: { "Content-Type": "multipart/form-data" }}
            ).then(response => {
                props.user.profile_picture_url = response.data.profile_picture_url;
                props.user.telefono = response.data.telefono;
                setLoader(false);
                setModalData({
                    text: 'Datos actualizados correctamente',
                    isOpen: true
                })
                props.close();
            }, (error) => {
                console.log(error);
                setModalData({
                    text: 'Error al actualizar',
                    isOpen: true
                })
                setLoader(false);
            });
        } else setModalData({
            text: 'Teléfono inválido,debe contener exactamente 10 caracteres',
            isOpen: true
        })
    }
    return (
        <View style={styles.screenContainer}>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>
                    Actualizar información
                </Text>
                <Pressable
                    style={styles.closeIcon}
                    onPress={() => props.close()}
                >
                    <FontAwesome5 name={"times"} color={"black"} size={16} solid />
                </Pressable>

                <View style={styles.column}>
                    <TouchableOpacity onPress={chooseImg} style={{
                        backgroundColor: Colors.naranjaSecundarioColor, alignItems: 'center',
                        padding: 10, borderRadius: 5
                    }}>
                        <FontAwesome5 name={"upload"} color={Colors.orange} size={16} solid />
                        <Text style={styles.listText}>
                            Nueva foto de perfil
                        </Text>
                    </TouchableOpacity>
                    {image && <Image source={{ uri: image }}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10, marginTop: 10, opacity: 1 }} />}
                </View>
                <View style={styles.row}>
                    <Text style={{ marginRight: 4, color: Colors.orange }}>Teléfono: </Text>
                    <TextInput placeholder='Número de teléfono' keyboardType='numeric' onChangeText={input => setPhoneNumber(input)}></TextInput>
                </View>
                <Text style={{ color: 'red' }}>{phoneError}</Text>
                <TouchableOpacity
                    onPress={props.onPress ? props.onPress : () => { saveChanges() }}
                    style={styles.ButtonStyle}
                >
                    <Text style={styles.textStyle}>
                        Guardar cambios
                    </Text>
                </TouchableOpacity>
                <ActivityIndicator size="large" color="#ff5900" animating={showLoader} />
            </View>
            <Modal visible={modalData.isOpen} transparent={true} animationType="fade">
                <ModalChangeUser
                    text={modalData.text}
                    close={() => setModalData({ isOpen: false })}
                    onPress={() => setModalData({ isOpen: false })}
                />
            </Modal>
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
    listText: {
        color: Colors.orange,
        fontSize: 18,
    },
});