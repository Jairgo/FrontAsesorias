import react from "react";
import { View, Text } from "react-native";

import HorarioScreen from "../Horario/Horario";

export default function ScheduleScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
            <HorarioScreen />
        </View>
    );
}