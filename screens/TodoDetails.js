import React from 'react';
import {StyleSheet, View, Text,} from 'react-native';

export default function TodoDetails({route}) {
    const {body, importance} = route.params;

    return (
        <View style={styles.content}>
            <Text style={styles.text}>Importance: {importance}</Text>
            <Text style={styles.text}>Tasks: {body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 20
    }
});