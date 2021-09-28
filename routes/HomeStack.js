import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MaterialIcons} from "@expo/vector-icons";

import Home from "../screens/Home";
import TodoDetails from "../screens/TodoDetails";

const Stack = createNativeStackNavigator();

export default function HomeStack({ navigation }) {

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
                name={'Home'}
                component={Home}
                options={{
                    title: 'Todos',
                    headerLeft: () => (
                        <MaterialIcons name='menu' size={24} color='white' onPress={openMenu}/>
                    )
                }}
            />
            <Stack.Screen
                name={'TodoDetails'}
                component={TodoDetails}
                options={({route}) => ({
                    title: route.params.title
                })}
            />
        </Stack.Navigator>
    );
}
