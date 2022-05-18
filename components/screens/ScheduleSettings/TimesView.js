import {
    View,
    Text,
    Pressable,
    StyleSheet,
} from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';

import Colors from "../../constants/Colors";

/**
 * Función que muestra la vista de los horarios seleccionados por el usuario para dar asesorias
 * @param {startHour, endHour, place, showInfo()} props 
 * props.startHour: Variable con la hora de inicio de la asesoría.
 * props.endHour: Variable con la hora de fin de la asesoría.
 * props.place: Variable con el lugar de la asesoría.
 * props.showInfo(): Función para mostrar la información de la asesoría.
 * @returns Regresa una lista de horarios que seleccionó el asesor.
 */

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