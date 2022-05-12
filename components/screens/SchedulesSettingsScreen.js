import react, { useState } from "react";
import {
    View,
    Text,
    Modal,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';

import Colors from "../constants/Colors";
import ModalInfo from "./ScheduleSettings/ModalInfo";
import TimesView from "./ScheduleSettings/TimesView";
import WeekDaySettings from "./ScheduleSettings/WeekDaySettings";
import ModalTimePicker from "./ScheduleSettings/ModalTimePicker";

function HorarioScreen(props) {
    const [ selectedDay, setSelectedDay ] = useState(0);
    const [ isEnabled, setIsEnabled ] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [infoOpen, setInfoOpen] = useState(false);
    const [materiaInfoSelected, setMateriaInfoSelected] = useState(-1);
    const [timerOpen, setTimerOpen] = useState(false);

    const week = [
        { day: 'Lun'},
        { day: 'Mar'},
        { day: 'Mie'},
        { day: 'Jue'},
        { day: 'Vie' },
        { day: 'Sab'},
        { day: 'Dom'},
    ];

    const materias = [
        { startHour: "12:00 pm", endHour: "1:30 pm", place: "Cisco" },
        { startHour: "1:30 pm", endHour: "3:00 pm", place: "A12" },
        { startHour: "3:00 pm", endHour: "4:30 pm", place: "Zoom" },
        { startHour: "4:30 pm", endHour: "6:00 pm", place: "Teams" },
    ];

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>
                Configuración de Horario
            </Text>
            <View style={styles.weekContainer}>
                {
                    week.map((day, idx) => (
                        <WeekDaySettings
                            key={idx}
                            day={day.day}
                            selected={selectedDay === idx}
                            onPress={() => {
                                setSelectedDay(idx);
                            }}
                        />
                    ))
                }
            </View>
            <ScrollView style={styles.horarioContainer}>
                <View style={{paddingBottom: 25}}>
                    {
                        materias.map((schedule, idx) => (
                            <TimesView
                                key={idx}
                                startHour={schedule.startHour}
                                endHour={schedule.endHour}
                                place={schedule.place}
                                showInfo={() => {
                                    setInfoOpen(true);
                                    setMateriaInfoSelected(idx);
                                }}
                            />
                        ))
                    }
                    <TouchableOpacity onPress={() => {setTimerOpen(true)}} style={{alignItems: 'center', marginTop: 10}}>
                        <FontAwesome5 name={"plus-circle"} color={Colors.orange} size={35} solid/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 22
            }}>
                <Modal visible={infoOpen} transparent={true} animationType="fade">
                    <ModalInfo
                        close={() => {
                            setInfoOpen(false);
                        }}
                        materiaInfo={(materiaInfoSelected != -1 ? materias[materiaInfoSelected] : {})}
                        day={selectedDay}
                    />
                </Modal>
                <Modal visible={timerOpen} transparent={true} animationType="fade">
                        <ModalTimePicker 
                            close={() => {
                                setTimerOpen(false);
                            }}
                        />
                </Modal>
            </View>
        </View>
    );
};

export default HorarioScreen;

const styles = StyleSheet.create({
    screenContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },
    weekContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.extraLightOrange,
        borderRadius: 10,
        marginVertical: 20,
    },
    horarioContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: Colors.extraLightOrange,
        marginTop: 10,
        marginBottom: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    }
});