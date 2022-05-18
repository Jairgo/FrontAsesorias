import react, { useState, useContext } from "react";
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    Image
} from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';
import { UserContext } from "../UserContext";

import Colors from '../constants/Colors';

const AsesorView = (props) => {
    const { user, setUser } = useContext(UserContext);
    return (
        <Pressable
            onPress={() => props.navigation.navigate('PerfilAsesor', {
                asesor: props.asesor,
            })}
            style={({ pressed }) => [{
                borderRadius: 10,
                overflow: 'hidden',
                opacity: pressed ? 0.5 : 1,
            }]}
        >
            <View style={styles.viewContainer}>

                <View style={styles.iconContainer}>

                    <Text style={{ width: 60, textAlign: 'center' }}>
                        <View style={{ borderRadius: 50, overflow: 'hidden'}}>
                            <Image
                                style={styles.tinyLogo}
                                source={{ uri: user ? props.asesor.profile_picture_url : 'https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png' }}
                            />
                        </View>

                        {/* <FontAwesome5 name={"user"} color={Colors.blancoColor} size={50} solid /> */}
                    </Text>

                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.asesorName}>
                        {props.asesor.nombre} {props.asesor.apellido_paterno}
                    </Text>
                    <Text style={styles.asesorCarrera}>
                        {props.asesor.carrera.nombre}, {props.asesor.semestre}° semestre
                    </Text>
                </View>

            </View>
        </Pressable>
    );
};

export default AsesorView;

const styles = StyleSheet.create({
    viewContainer: {
        marginLeft: 15,
        marginRight: 15,
        padding: 15,
        borderRadius: 15,
        // width: '100%',
        backgroundColor: Colors.naranjaColor,
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    contentContainer: {
        width: '100%',
        marginLeft: 15,
    },
    asesorCarrera: {
        fontSize: 14,
        color: Colors.blancoColor,
    },
    asesorName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.blancoColor,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 50,
    }
});