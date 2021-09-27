import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

export default function TodoDetails({ route, navigation }) {
    const { title, body, rating } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});