import react, { useEffect, useState } from "react";
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

import { endpoints } from "../constants/Backend";
import axios from "axios";


function HorarioScreen(props) {
    const [ selectedDay, setSelectedDay ] = useState(0);
    const [ isEnabled, setIsEnabled ] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [infoOpen, setInfoOpen] = useState(false);
    const [materiaInfoSelected, setMateriaInfoSelected] = useState(-1);
    const [timerOpen, setTimerOpen] = useState(false);
    const [materias, setMaterias] = useState([]);

    const week = [
        { day: 'Lun'},
        { day: 'Mar'},
        { day: 'Mie'},
        { day: 'Jue'},
        { day: 'Vie' },
        { day: 'Sab'},
        { day: 'Dom'},
    ];

    useEffect(() => {
        axios.get(endpoints.horarioAsesorView(props.userId),{
            params:{
                day: week[selectedDay].day
            }
        }).then((response) => {
            const to12Hours = (horaString) => {
                let parts = horaString.split(':');
                let hour = parseInt(parts[ 0 ])    
                let pm = hour > 12;
                return `${pm ? hour - 12 : hour}:${parts[ 1 ]} ${pm ? 'pm' : 'am'}`
            };
            let tempMaterias = response.data.map((horario) => {
                return{
                    id: horario.id,
                    startHour: to12Hours(horario.hora_inicio),
                    endHour: to12Hours(horario.hora_fin),
                    place: horario.lugar
                }
            })

            tempMaterias.sort((a, b) => {
                let a_staHour = a.startHour.split(':');
                let b_staHour = b.startHour.split(':');
                let a_form = a_staHour[1].split(' ');
                let b_form = b_staHour[1].split(' ');

                if(a_form[1] === b_form[1]){
                    if (parseInt(a_staHour[0]) < parseInt(b_staHour[0])) {
                        return -1;
                    }
                    else if (parseInt(a_staHour[ 0 ]) > parseInt(b_staHour[ 0 ])){
                        return 1;
                    }
                    else {
                        let min_a = parseInt((a_staHour[ 1 ].split(' '))[ 0 ]);
                        let min_b = parseInt((b_staHour[ 1 ].split(' '))[ 0 ]);
                        return min_a < min_b ? -1 : 1;
                    }
                }else{
                    if(a_form[1] < b_form[1]) return -1;
                }
            })
            setMaterias(tempMaterias);
        })
    },[selectedDay, timerOpen])


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
                        materias.length > 0 ?
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
                            )) :
                        <View style={{height: 130, display: 'flex', justifyContent: 'flex-end'}}>
                            <Text style={{textAlign: 'center', fontSize: 30, color: Colors.white, fontWeight: 'bold'}}>Agrega un horario</Text>
                        </View>
                    }
                    <TouchableOpacity onPress={() => {
                        setTimerOpen(true);
                    }} style={{alignItems: 'center', marginTop: 10}}>
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
                        onRemove = {(id) => {setMaterias(materias.filter((materia) => materia.id != id))}}
                    />
                </Modal>
                <Modal visible={timerOpen} transparent={true} animationType="fade">
                        <ModalTimePicker 
                            close={() => {
                                setTimerOpen(false);
                            }}
                            id_Asesor={props.userId}
                            day={week[selectedDay].day}
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