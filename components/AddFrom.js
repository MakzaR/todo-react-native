import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, Button, View} from 'react-native';

export default function AddFrom({addHandler}) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={changeHandler}
            />
            <Button onPress={() => addHandler(text)} title='Добавить' color='#67c4f0'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#ddd',
    },
});