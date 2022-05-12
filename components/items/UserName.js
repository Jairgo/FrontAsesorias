import { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../UserContext";


function UserName(props) {
    const {user, setUser} = useContext(UserContext);
    
    return(
        <View style={styles.contentStyle}>
            <Text style={styles.user}>
                {props.title}
            </Text>
            <Text style={styles.userText}>
                {user ? user.name : "Cargando..." }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contentStyle:{
        alignItems: 'center'
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