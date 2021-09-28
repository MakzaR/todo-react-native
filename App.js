import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";

import Navigator from "./routes/Drawer";

export default function App() {
    return(
        <NavigationContainer>
            <Navigator/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});