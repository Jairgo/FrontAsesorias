import react, { useState } from "react";
import {
    View,
    Text,
    Pressable,
    StyleSheet,
} from "react-native";

import Colors from "../constants/Colors";
import { Ionicons } from '@expo/vector-icons';

const NotificationsView = (props) => {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.iconContainer}>
                <Text style={{ width: 60, textAlign: 'center' }}>
                    <Ionicons name={"notifications"} color={Colors.blancoColor} size={35} solid />
                </Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.titleNotification}>
                    {props.nombre}
                </Text>
                <Text style={styles.descripctionNotification}>
                    {props.descripcion}
                </Text>
                <Text style={styles.dateNotifications}>
                    {props.fecha}
                </Text>
            </View>

        </View>
    );
};

export default NotificationsView;

const styles = StyleSheet.create({
    viewContainer: {
        marginLeft: 15,
        marginRight: 15,
        padding: 5,
        borderRadius: 15,
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
    descripctionNotification: {
        fontSize: 14,
        color: Colors.blancoColor,
    },
    titleNotification: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.blancoColor,
    },
    dateNotifications: {
        fontSize: 10,
        color: Colors.blancoColor
    }
});