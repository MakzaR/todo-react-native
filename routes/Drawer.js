import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from "./HomeStack";
import AboutStack from "../screens/About";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Drawer.Screen name="Todos" component={HomeStack}/>
                <Drawer.Screen name="About" component={AboutStack}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}