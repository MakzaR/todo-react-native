import React from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import {Formik} from 'formik';

export default function TodoForm({addTodo}) {
    return (
        <View>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    importance: ''
                }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addTodo(values);
                }}
            >
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Title'
                            onChangeText={handleChange('title')}
                            value={values.title}
                        />
                        <TextInput
                            multiline
                            minHeight={60}
                            style={styles.input}
                            placeholder='Tasks'
                            onChangeText={handleChange('body')}
                            value={values.body}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Task importance'
                            onChangeText={handleChange('importance')}
                            value={values.importance}
                            keyboardType='numeric'
                        />

                        <Button onPress={handleSubmit} title="Submit" color='#67c4f0'/>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: 10
    }
})