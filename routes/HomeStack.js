import React from 'react';
import {StyleSheet, View, Text,} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

import Home from "../screens/Home";
import TodoDetails from "../screens/TodoDetails";

const HomeStack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <HomeStack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#67c4f0',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff'
                }}>
                <HomeStack.Screen
                    name={'Home'}
                    component={Home}
                    options={{
                        title: 'Todo'
                    }}
                />
                <HomeStack.Screen
                    name={'TodoDetails'}
                    component={TodoDetails}
                    options={({route}) => ({
                        title: route.params.title
                    })}
                />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}
