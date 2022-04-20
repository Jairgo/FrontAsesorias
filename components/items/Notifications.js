import { Button, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

function Notifications() {
    return(
        <Icon
            onPress={() => alert('Notifications')}
            title="Config" 
            name="bell"
            size={25}
            style={styles.iconStyle}
        />

    );
}

const styles = StyleSheet.create({
    iconStyle: {
        alignItems: 'center',
        marginRight: 14,
        color: 'white',
    },
});

export default Notifications;