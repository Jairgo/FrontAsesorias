import React, { useState } from 'react';
import { StyleSheet, View, Text, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';

export default function Calendar() {
    var today = new Date();
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);

    const [date, setDate] = useState(today);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View>
            {(Platform.OS === 'android') ?
                <View>
                    <View>
                        <TouchableOpacity 
                            onPress={showDatepicker}
                            style={styles.chooseDateButton}
                            underlayColor='#fff'>
                            <Text style={styles.chooseDateText} >{Strings.seleccionarFecha}</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity 
                            onPress={showTimepicker}
                            style={styles.chooseDateButton}
                            underlayColor='#fff'>
                            <Text style={styles.chooseDateText} >{Strings.seleccionarHorario}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>selected: {date.toLocaleString()}</Text>
                    {
                        show && (
                            <View>
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    onChange={onChange}
                                    minimumDate={today}
                                    maximumDate={nextweek} 
                                    display="spinner"
                                />
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    onChange={onChange}
                                    minimumDate={today}
                                    maximumDate={nextweek} 
                                    display="spinner"
                                />
                            </View>
                        )
                    }

                </View> :
                <View>
                    <Text style={styles.boldText}>Selecciona una fecha y hora:</Text>
                    {/* <Text>selected: {date.toLocaleString()}</Text> */}
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        onChange={onChange}
                        minimumDate={today}
                        maximumDate={nextweek}
                        display="spinner"
                        themeVariant="light"
                        locale="es-ES"
                        textColor={Colors.naranjaColor}
                    />
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'time'}
                        onChange={onChange}
                        minimumDate={today}
                        maximumDate={nextweek}
                        display="spinner"
                        themeVariant="light"
                        locale="es-ES"
                        textColor={Colors.naranjaColor}       
                    />
                </View>
            }
        </View>
    );
}


const styles = StyleSheet.create({
    iosDatepicker: {
        backgroundColor: Colors.naranjaColor,
    },
    chooseDateButton: {
        marginRight:110,
        marginLeft:110,
        marginTop:10,
        paddingTop:6,
        paddingBottom:6,
        backgroundColor: Colors.naranjaColor,
        borderRadius:10,
    },
    chooseDateText:{
        color: Colors.blancoColor,
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 15
    },
    boldText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.negroColor,
        textAlign: 'center',
        marginTop: 15,
    },
});