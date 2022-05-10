import { Picker, PickerIOS } from '@react-native-picker/picker';
import react, { useState } from 'react';

import { 
    View,
    StyleSheet,
    TextInput, 
} from "react-native";
import Colors from '../constants/Colors';

const SearchScreen = (props) => {
    const [schools, setSchools] = useState({
        0: {
            nombre: ''
        },
        1: {

        }
    });
    const [selectedSchool, setSelectedSchool] = useState(0);

    return (
        <View>
            <View>
                {/* <Picker
                    selectedValue={materiaSelected}
                    onValueChange={(materia) => {
                        setMateriaSelected(materia)
                    }}
                    style={styles.picker}
                    mode="dropdown"
                >
                    {
                        Object.keys(Materias).map((materiaId, idx) => (
                            <Picker.Item
                                key={idx}
                                label={Materias[ materiaId ].Nombre}
                                value={materiaId}
                            />
                        ))
                    }
                </Picker> */}
            </View>
            <TextInput 
                style={{
                    backgroundColor: Colors.extraLightOrange,
                    height: 50,
                    fontSize: 18,
                    margin: 20,
                    borderRadius: 16,
                    padding: 10
                }}
            />
        </View>
    )
};

export default SearchScreen;

const styles = StyleSheet.create({

});