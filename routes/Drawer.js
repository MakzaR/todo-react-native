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
            }}>
            <Drawer.Screen
                name='TodosDrawer'
                component={HomeStack}
            />
            <Drawer.Screen
                name='AboutDrawer'
                component={AboutStack}
            />
        </Drawer.Navigator>
    );
}