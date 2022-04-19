import { View, Text, StyleSheet } from "react-native";

function UserName() {
    return(
        <View style={styles.contentStyle}>
            <Text style={styles.user}>
                Estudiante
            </Text>
            <Text style={styles.userText}>
                Jessica Ramirez
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