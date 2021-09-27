import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import About from "../screens/About";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
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
                    title: 'Just About'
                }}
            />
        </Stack.Navigator>
    );
}

