import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todo List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        backgroundColor: '#67c4f0',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        paddingTop: 30
    },
});