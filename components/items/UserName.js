import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../UserContext";

/**
 * Función que muestra el nombre del usuario que inició sesión
 * @param {title} props 
 * @returns Regresa el nombre del usuario y un holder de cargando mientras extrae el nombre de la base
 */

function UserName(props) {
    const {user, setUser} = useContext(UserContext);
    
    return(
        <View style={styles.contentStyle}>
            <Text style={styles.user}>
                {props.title}
            </Text>
            <Text style={styles.userText}>
                {user ? user.nombre : "Cargando..." }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contentStyle:{
        alignItems: 'center',
    },
    user:{
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    userText:{
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
    }
})

export default UserName;