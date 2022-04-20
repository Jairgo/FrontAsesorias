import {Image, StyleSheet} from 'react-native';

function LogoTitle() {
    return (
        <Image
        style={styles.tinyLogo}
        source={
            require('../pictures/perfil.jpeg')
        }
        />
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 12,
    }
});

export default LogoTitle;