import React, { useContext }  from 'react';
import { Image, StyleSheet } from 'react-native';

import { UserContext } from "../UserContext";
import { main_endpoint } from '../constants/Backend';

/**
 * Función encargada de mostrar la imagen o Logo 
 * del usuario que inció sesión
 */

function LogoTitle() {
    const {user, setUser} = useContext(UserContext);

    return (
        <Image
            style={styles.tinyLogo}
            source={{ uri: user ? main_endpoint + user.profile_picture_url : 'https://www.jing.fm/clipimg/detail/375-3757880_my-account-profile-icon-transparent-white.png' }}
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