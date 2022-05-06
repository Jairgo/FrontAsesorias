import react, { useState } from "react";
import {
    View,
    Text,
    Pressable,
    StyleSheet,
} from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const AsesorView = (props) => {
    return (
        <Pressable
            onPress={() => props.navigation.navigate('PerfilAsesor', {
                asesor: props.asesorName,
                carrera: props.asesorCarrera,
                semestre: props.asesorSemestre,
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
                        <FontAwesome5 name={"user"} color={Colors.blancoColor} size={50} solid />
                    </Text>

                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.asesorName}>
                        {props.asesorName}
                    </Text>
                    <Text style={styles.asesorCarrera}>
                        {props.asesorCarrera}
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
        backgroundColor: Colors.darkGray,
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
    }
});