import react, { useState } from "react";
import {
    View,
    Text,
    Pressable,
    StyleSheet,
} from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';

import Colors from "../../constants/Colors";

const TimesView = (props) => {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.subjectHour}>
                    {props.startHour} - {props.endHour}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'baseline', marginTop: 5}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        Lugar: 
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 5}}>
                        {props.place}
                    </Text>
                </View>
            </View>
            
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
                        <FontAwesome5 name="trash-alt" color={Colors.orange} size={18} solid />
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default TimesView;

const styles = StyleSheet.create({
    viewContainer: {
        padding: 15,
        borderRadius: 15,
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        borderColor: Colors.orange,
        borderWidth: 3,
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    contentContainer: {
        width: '82%',
        marginLeft: 15,
    },
    subjectHour: {
        fontSize: 15,
        color: Colors.black,
    },
});