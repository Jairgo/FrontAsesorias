import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const MateriaList = (props) => {
    return(
        <View style={styles.comp}>
            <Text style={styles.name}>{props.name}</Text>
            <TouchableOpacity style={styles.btn} onPress={()=>{}}>
                <Icon name="delete" color="#FFA471" size={20}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    comp: {
        borderRadius: 8,
        borderColor: '#FFA471',
        borderWidth: 2,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '72%',
        marginTop: 12,
    },
    name:{
        marginLeft: 6
    },
    btn:{
        marginRight: 4
    }
});

export default MateriaList;