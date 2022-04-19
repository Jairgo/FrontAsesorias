import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const MateriaList = (props) => {
    return(
        <View style={styles.comp}>
            <Text style={styles.name}>{props.name}</Text>
            <TouchableOpacity onPress={()=>{}}>
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
        width: '70%',
        marginTop: 12,
    },
    name:{
    },
    btn:{
        backgroundColor: '#FFA471',
    }
});

export default MateriaList;