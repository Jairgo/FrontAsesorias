import react, { useState } from "react";
import {
    View,
    Text,
    Modal,
    ScrollView,
    StyleSheet,
} from "react-native";

import Colors from "../../constants/Colors";

import MateriaInfoModal from "./MateriaInfoModal";
import MateriaView from "./MateriaView";
import WeekDay from "./WeekDay";

function HorarioScreen(props) {
    const [ selectedDay, setSelectedDay ] = useState(0);
    const [ isEnabled, setIsEnabled ] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [infoOpen, setInfoOpen] = useState(false);
    const [materiaInfoSelected, setMateriaInfoSelected] = useState(-1);

    const week = [
        { day: 'Lun', num: 10 },
        { day: 'Mar', num: 11 },
        { day: 'Mie', num: 12 },
        { day: 'Jue', num: 13 },
        { day: 'Vie', num: 14 },
        { day: 'Sab', num: 15 },
        { day: 'Dom', num: 16 },
    ];

    const materias = [
        { materia: "Calculo integral", horaInicio: "12:00 pm", horaFin: "1:30 pm", limiteTemas: 4, limiteAlumnos: 2 },
        { materia: "Calculo diferencial", horaInicio: "12:00 pm", horaFin: "1:30 pm", limiteTemas: 4, limiteAlumnos: 2 },
        { materia: "Matemáticas discretas", horaInicio: "12:00 pm", horaFin: "1:30 pm", limiteTemas: 4, limiteAlumnos: 2, reservada: true },
        { materia: "Programación", horaInicio: "12:00 pm", horaFin: "1:30 pm", limiteTemas: 4, limiteAlumnos: 2 },
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
                            onPress={() => {
                                setSelectedDay(idx);
                            }}
                        />
                    ))
                }
            </View>
            <ScrollView style={styles.horarioContainer}>
                {
                    materias.map((materia, idx) => (
                        <MateriaView
                            key={idx}
                            materia={materia.materia}
                            horaInicio={materia.horaInicio}
                            horaFin={materia.horaFin}
                            limiteTemas={materia.limiteTemas}
                            limiteAlumnos={materia.limiteAlumnos}
                            reservada={materia.reservada}
                            showInfo={() => {
                                setInfoOpen(true);
                                setMateriaInfoSelected(idx);
                            }}
                        />
                    ))
                }
            </ScrollView>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 22
            }}>
                <Modal visible={infoOpen} transparent={true} animationType="slide">
                    <MateriaInfoModal 
                        close={() => {
                            setInfoOpen(false);
                        }}
                        materiaInfo={(materiaInfoSelected != -1 ? materias[materiaInfoSelected] : {})}
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
        width: '95%',
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