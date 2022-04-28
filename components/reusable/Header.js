import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Linking,
    StyleProp,
    TextStyle,
    ViewStyle,
    TouchableOpacity
} from 'react-native';

function Header(props) {
    return (
        <View style={styles.header}>
            <Text> Prueba </Text>
        </View>

        //     <SafeAreaProvider>
        //         <HeaderRNE
        //             leftComponent={{
        //                 icon: 'menu',
        //                 color: '#fff',
        //             }}
        //             rightComponent={
        //                 <View style={styles.headerRight}>
        //                     <TouchableOpacity>
        //                         <Icon name="description" color="white" />
        //                     </TouchableOpacity>
        //                     <TouchableOpacity
        //                         style={{ marginLeft: 10 }}
        //                     >
        //                         <Icon type="antdesign" name="rocket1" color="white" />
        //                     </TouchableOpacity>
        //                 </View>
        //             }
        //             centerComponent={{ text: 'Header', style: styles.heading }}
        //         />
        //     </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: "20px",
        backgroundColor: "#1abc9c",
        color: "white",
        fontSize: "30px"
    }
});

export default Header;