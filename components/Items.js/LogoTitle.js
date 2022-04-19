import {Image, StyleSheet} from 'react-native';

function LogoTitle() {
    return (
        <Image
        style={styles.tinyLogo}
        source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        />
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
    }
});

export default LogoTitle;