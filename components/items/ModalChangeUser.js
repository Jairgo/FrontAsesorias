import {
    View,
    Text,
    Pressable,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';
import Colors from "../constants/Colors";

/**
 * Función encargada del modal para cambiar de estudiante a asesor y viceversa
 * @param {text, close, onPress, changeState} props 
 * props.text: Es la variable que contiene el texto que debe mostrar el modal.
 * props.close: Es la función para cerrar el modal.
 * props.onPress: Contiene la función que se le envíe por ejemplo tan solo cerrar el modal
 * props.changeState: Función para cambiar de asesor a estudiante o viceversa
 * @returns Regresa el modal para cambiar a asesor si tiene permiso 
 * o muestra un texto que dice que no tiene permisos
 */

const ModalChangeUser = (props) => {

    return (
        <View style={styles.screenContainer}>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>
                    {props.text}
                </Text>
                <Pressable 
                    style={styles.closeIcon}
                    onPress={() => props.close()}
                >
                    <FontAwesome5 name={"times"} color={"black"} size={16} solid />
                </Pressable>
                <TouchableOpacity
                    onPress={props.onPress ? props.onPress : () => {props.changeState(); props.close()}}
                    style={styles.ButtonStyle}
                >
                    <Text style={styles.textStyle}>
                        Aceptar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ModalChangeUser;

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
        padding: 35,
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
    }
});