import React, { useState } from 'react';
import BottomApp from '../reusables/BottomApp';
import LogoTitle from '../items/LogoTitle';
import UserName from '../items/UserName';
import UserChange from '../items/UserChange';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

const Stack = createStackNavigator();

function HomeStack(props) {
    const [isStudent, setIsStudent] = useState(true);

    const handlerStudent = () => setIsStudent(!isStudent);

    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#f4511e',
                    height: Platform.OS === "ios" ? 110 : undefined,
                },
            }}
        >
            <Stack.Screen
                name="HomeStack"
                options={({ navigation, route }) => ({
                    headerLeft: (props) =>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <LogoTitle {...props} />
                        </TouchableOpacity>,
                    headerTitle: (props) => <UserName {...props} title={isStudent ? "Estudiante" : "Asesor"}  />,
                    headerTitleAlign: 'center',
                    headerRight: () => <UserChange state={isStudent} changeState={handlerStudent}/>,
                })}
            >
                {(_) => <props.screen asesor={props.asesor} userId={props.userId} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default HomeStack;