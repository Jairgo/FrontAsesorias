import react, { useEffect, useState } from "react";
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
import AsesoriaView from "./Schedule/AsesoriaView";
import AsesoriaInfoModal from "./Schedule/AsesoriaViewInfo";

import { endpoints } from "../constants/Backend";
import axios from "axios";
import { parse } from "react-native-svg";

export default function ScheduleScreen(props) {
    const [selectedDay, setSelectedDay] = useState(0);
    const [infoOpen, setInfoOpen] = useState(false);
    const [materiaSelected, setMateriaSelected] = useState(-1);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const to12Hours = (horaString) => {
            let parts = horaString.split(':');
            let hour = parseInt(parts[ 0 ])
            let pm = hour > 12;
            return `${pm ? hour - 12 : hour}:${parts[ 1 ]} ${pm ? 'pm' : 'am'}`
        };

        if (props.asesor) {
            axios.get(endpoints.horario(props.userId), {
                params: {
                    day: week[selectedDay].day,
                    offset_days: week[selectedDay].offset,
                    isAsesor: props.asesor
                }
            }).then(
                (response) => {
                    if (response.status == 200) {
                        let weekFromBack = [];
    
                        const getAsesoria = (horarioId) => {
                            return (response.data.asesorias.filter((asesoria) => asesoria.horario == horarioId))[0];
                        };
    
                        const getLimits = (materiaId) => {
                            return (response.data.materiasImpartidas.filter((materia) => materia.materias == materiaId))[0];
                        };

                        const getAlumnosTemas = (asesoriaId) => {
                            return (response.data.asesoriasDetalles.filter((as_det) => as_det.asesoria == asesoriaId));
                        };
    
                        for(let horario of response.data.horario) {
                            let as_ho = getAsesoria(horario.id);
                            
                            let as_ho_data = {};
    
                            if (as_ho != undefined) {
                                as_ho_data['date'] = as_ho.fecha;
                                as_ho_data['subject'] = as_ho.materia.nombre;
    
                                let limits = getLimits(as_ho.materia.id);
    
                                as_ho_data['maxStudents'] = limits.limite_alumnos;
                                as_ho_data['maxTopics'] = limits.limite_temas;

                                let studentsTopics = getAlumnosTemas(as_ho.id);

                                as_ho_data['students'] = studentsTopics.map((as_det) => as_det.asesorado);
                                as_ho_data['topics'] = studentsTopics.map((as_det) => as_det.tema);
                            }
    
                            weekFromBack.push({
                                horarioId: horario.id,
                                startHour: to12Hours(horario.hora_inicio),
                                endHour: to12Hours(horario.hora_fin),
                                lugar: horario.lugar,
                                reserved: as_ho != undefined,
                                ...as_ho_data
                            })
                        }
                        weekFromBack.sort((a, b) => {
                            let a_staHour = a.startHour.split(':');
                            let b_staHour = b.startHour.split(':');

                            if (parseInt(a_staHour[0]) < parseInt(b_staHour[0])) {
                                return 1;
                            }
                            else if (parseInt(a_staHour[ 0 ]) > parseInt(b_staHour[ 0 ])){
                                return -1;
                            }
                            else {
                                let min_a = parseInt((a_staHour[ 1 ].split(' '))[ 0 ]);
                                let min_b = parseInt((b_staHour[ 1 ].split(' '))[ 0 ]);
                                return min_a < min_b ? 1 : -1;
                            }
                        })
                        setSubjects(weekFromBack);
                        console.log(weekFromBack)
                    }
                    else {
                        console.log(response.data);
                    }

                },
                (err) => {
                    console.log(err);
                }
            )
        }
        else {
            let weekFromBack = [];
            axios.get(endpoints.horario(props.userId), {
                params: {
                    day: week[ selectedDay ].day,
                    offset_days: week[ selectedDay ].offset,
                    isAsesor: props.asesor
                }
            }).then(
                (response) => {
                    let fromBack = response.data.map(({ asesoria }) => {
                        return {
                            studentView: true,
                            id: asesoria.id,
                            state: asesoria.estado,
                            date: asesoria.fecha,
                            subject: asesoria.materia.nombre,
                            asesor: {
                                id: asesoria.asesor.id,
                                nombre: asesoria.asesor.nombre,
                                apellido_paterno: asesoria.asesor.apellido_paterno,
                                apellido_materno: asesoria.asesor.apellido_materno
                            },
                            lugar: asesoria.horario.lugar,
                            startHour: to12Hours(asesoria.horario.hora_inicio),
                            endHour: to12Hours(asesoria.horario.hora_fin)
                        }
                    })
                    setSubjects(fromBack);
                },
                (err) => {
                    console.log(err.message);
                }
            )
            setSubjects(weekFromBack);
        }
    }, [selectedDay])

    const week = [ ...Array(7).keys() ].map((i) => {
        let date = new Date();
        date.setDate(date.getDate() + i);
        return {
            day: (() => {
                switch(date.getDay()) {
                    case 0: return 'Dom';
                    case 1: return 'Lun';
                    case 2: return 'Mar';
                    case 3: return 'Mie';
                    case 4: return 'Jue';
                    case 5: return 'Vie';
                    case 6: return 'Sab';
                }
            })(),
            num: date.getDate(),
            offset: i
        };
    });

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
                    <View style={{paddingBottom: 20}}>
                        {
                            subjects.length == 0 ? (
                                <View style={{
                                    width: '100%',
                                    height: 330,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontSize: 30,
                                        opacity: 1,
                                        color: Colors.white,
                                        fontWeight: 'bold'
                                    }}>
                                        No hay horarios
                                    </Text>
                                </View>
                            ) : (
                                subjects.map((subject, idx) => (
                                    props.asesor ? (
                                    <SubjectView 
                                        key={idx}
                                        subjectName={subject.subject}
                                        startHour={subject.startHour}
                                        endHour={subject.endHour}
                                        maxStudents={subject.limiteAlumnos}
                                        maxTopics={subject.limiteTemas}
                                        reserved={subject.reserved}
                                        place={subject.lugar}
                                        showInfo={() => {
                                            setInfoOpen(true);
                                            setMateriaSelected(idx);
                                        }}
                                    />
                                ) : ( 
                                    <AsesoriaView 
                                        key={idx}
                                        subjectName={subject.subject}
                                        startHour={subject.startHour}
                                        endHour={subject.endHour}
                                        place={subject.lugar}
                                        showInfo={() => {
                                            setInfoOpen(true);
                                            setMateriaSelected(idx);
                                        }}
                                    />
                                )))
                            )
                        }
                    </View>
                </ScrollView>
                <Modal visible={infoOpen} transparent={true} animationType="slide">
                    {
                        props.asesor ? (
                            <InfoModal 
                                close={() => setInfoOpen(false)}
                                materiaInfo={(materiaSelected != -1 ? subjects[materiaSelected] : {})}
                            />
                        ) : (
                            <AsesoriaInfoModal 
                                close={() => setInfoOpen(false)}
                                materiaInfo={(materiaSelected != -1 ? subjects[ materiaSelected ] : {})}
                            />
                        )
                    }
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