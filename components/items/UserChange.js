import { Button, View, StyleSheet, Modal } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState, useContext } from 'react';
import ModalChangeUser from './ModalChangeUser';
import { UserContext } from '../UserContext';

function UserChange(props) {

    const [showModal, setShowModal] = useState(false);
    const {user, setUser} = useContext(UserContext);

    return(
        <View>
            <FontAwesome5 onPress={() => setShowModal(true)} name="user-friends" style={styles.iconStyle} size={28}/>
            <Modal visible={showModal} transparent={true} animationType="fade">
                <ModalChangeUser 
                    text={user && user.asesor ? `¿Desea Cambiar a ${props.asesor ? "estudiante" : "asesor"}?` : `Solicite permisos para ser asesor`}
                    changeState={() => props.toggleAsesor()}
                    close={() => setShowModal(false)}
                />
            </Modal>
        </View>

    );
}

const styles = StyleSheet.create({
    iconStyle: {
        alignItems: 'center',
        marginRight: 21,
        color: 'white',
    },
});

export default UserChange;