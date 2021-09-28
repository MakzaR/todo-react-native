import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Drawer.Screen
                name="Todos"
                component={HomeStack}
            />
            <Drawer.Screen
                name="About"
                component={AboutStack}
            />
        </Drawer.Navigator>
    );
}