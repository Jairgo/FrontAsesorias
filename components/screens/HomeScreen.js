import react from "react";
import { View, Text } from "react-native";

import BusquedaScreen from "../Busqueda/Busqueda";

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
            <BusquedaScreen />
        </View>
    );
}