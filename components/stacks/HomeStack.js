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
                    headerLeft: (otherProps) =>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <LogoTitle {...otherProps} />
                        </TouchableOpacity>,
                    headerTitle: (otherProps) => <UserName {...otherProps} title={props.asesor ? "Asesor" : "Estudiante"}  />,
                    headerTitleAlign: 'center',
                    headerRight: () => <UserChange asesor={props.asesor} toggleAsesor={props.toggleAsesor}/>,
                })}
            >
                {(_) => <props.screen asesor={props.asesor} userId={props.userId} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default HomeStack;