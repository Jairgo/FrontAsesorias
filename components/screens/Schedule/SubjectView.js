import react, { useState } from "react";
import {
    View,
    Text,
    Pressable,
    StyleSheet,
} from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';

import Colors from "../../constants/Colors";

const SubjectView = (props) => {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.iconContainer}>
                <Pressable
                    onPress={() => props.showInfo()}
                    style={({ pressed }) => [ {
                        borderRadius: 10,
                        overflow: 'hidden',
                        opacity: pressed ? 0.5 : 1,
                    } ]}
                >
                    <Text style={{ width: 60, textAlign: 'center' }}>
                        <FontAwesome5 name={props.reserved ? "user-lock" : "user"} color={"white"} size={50} solid />
                    </Text>
                </Pressable>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.subjectHour}>
                    {props.startHour} - {props.endHour}
                </Text>
                <Text style={styles.subjectName}>
                    {props.subjectName}
                </Text>
            </View>
        </View>
    );
};

export default SubjectView;

const styles = StyleSheet.create({
    viewContainer: {
        padding: 15,
        borderRadius: 15,
        width: '100%',
        backgroundColor: Colors.orange,
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
    subjectHour: {
        fontSize: 14,
        color: Colors.white,
    },
    subjectName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.white,
    }
});