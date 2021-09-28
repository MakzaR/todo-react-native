import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MaterialIcons} from "@expo/vector-icons";

import About from "../screens/About";

const Stack = createNativeStackNavigator();

export default function AboutStack({ navigation }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#67c4f0',
                },
                headerTitleAlign: 'center',
                headerTintColor: '#fff'
            }}>
            <Stack.Screen
                name={'About'}
                component={About}
                options={{
                    headerLeft: () => (
                        <MaterialIcons name='menu' size={24} color='white' onPress={openMenu}/>
                    )
                }}
            />
        </Stack.Navigator>
    );
}

