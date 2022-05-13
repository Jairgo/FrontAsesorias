import { Button, View, StyleSheet, Modal } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import ModalChangeUser from './ModalChangeUser';

function UserChange(props) {

    const [showModal, setShowModal] = useState(false);

    return(
        <View>
            <FontAwesome5 onPress={() => setShowModal(true)} name="user-friends" style={styles.iconStyle} size={28}/>
            <Modal visible={showModal} transparent={true} animationType="fade">
                <ModalChangeUser 
                    text={`¿Desea Cambiar a ${props.state ? "asesor" : "estudiante"}?`}
                    changeState={() => props.changeState()}
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