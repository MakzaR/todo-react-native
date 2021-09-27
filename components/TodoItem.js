import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item)}>
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginTop: 16,
        padding: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 5,
    },
});