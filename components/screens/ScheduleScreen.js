import react, { useState } from "react";
import { 
    View,
    Text,
    Modal, 
    ScrollView,
    StyleSheet,
} from "react-native";

import Colors from "../constants/Colors";
import WeekDay from "./Schedule/WeekDay";
import SubjectView from "./Schedule/SubjectView";
import InfoModal from "./Schedule/ModalInfo";

export default function ScheduleScreen() {
    const [selectedDay, setSelectedDay] = useState(0);
    const [infoOpen, setInfoOpen] = useState(false);
    const [materiaSelected, setMateriaSelected] = useState(-1);

    const week = [ ...Array(7).keys() ].map((i) => {
        let date = new Date();
        date.setDate(date.getDate() + i);
        return {
            day: (() => {
                switch(date.getDay()) {
                    case 0: return 'Lun';
                    case 1: return 'Mar';
                    case 2: return 'Mie';
                    case 3: return 'Jue';
                    case 4: return 'Vie';
                    case 5: return 'Sab';
                    case 6: return 'Dom';
                }
            })(),
            num: date.getDate()
        };
    });
    
    let subjects = [
        { nombre: "Calculo integral", horaInicio: "12:00 pm", horaFin: "1:30 pm", limiteTemas: 4, limiteAlumnos: 2 },
        { nombre: "Calculo diferencial", horaInicio: "12:00 pm", horaFin: "1:30 pm", limiteTemas: 4, limiteAlumnos: 2 },
        { nombre: "Matemáticas discretas", horaInicio: "12:00 pm", horaFin: "1:30 pm", limiteTemas: 4, limiteAlumnos: 2, reservada: true },
        { nombre: "Programación", horaInicio: "12:00 pm", horaFin: "1:30 pm", limiteTemas: 4, limiteAlumnos: 2 },
    ];

    return (
        <View style={styles.screenContainer}>
                <Text style={styles.title}>
                    Horario
                </Text>
                <View style={styles.weekContainer}>
                    {
                        week.map((day, idx) => (
                            <WeekDay
                                key={idx}
                                day={day.day}
                                num={day.num}
                                selected={selectedDay === idx}
                                onPress={() => setSelectedDay(idx)}
                            />
                        ))
                    }
                </View>
                <ScrollView style={styles.scheduleContainer}>
                    {
                        subjects.map((subject, idx) => (
                            <SubjectView 
                                key={idx}
                                subjectName={subject.nombre}
                                startHour={subject.horaInicio}
                                endHour={subject.horaFin}
                                maxStudents={subject.limiteAlumnos}
                                maxTopics={subject.limiteTemas}
                                reserved={subject.reservada}
                                showInfo={() => {
                                    setInfoOpen(true);
                                    setMateriaSelected(idx);
                                }}
                            />
                        ))
                    }
                </ScrollView>
                <Modal visible={infoOpen} transparent={true} animationType="slide">
                    <InfoModal 
                        close={() => setInfoOpen(false)}
                        materiaInfo={(materiaSelected != -1 ? subjects[materiaSelected] : {})}
                    />
                </Modal>
        </View>
    );
}

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
        marginTop: 20,
    },
    scheduleContainer: {
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: Colors.extraLightOrange,
        marginTop: 20,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    }
});