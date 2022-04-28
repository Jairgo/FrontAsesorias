import react from "react";
import { View, Text } from "react-native";

import MateriasScreen from "../Materias/Materias";

export default function SubjectsScreens() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
            <MateriasScreen />
        </View>
    );
}