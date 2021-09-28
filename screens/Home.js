import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";

import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";

export default function Home({navigation}) {

    const [modalOpen, setModalOpen] = useState(false)

    const [todos, setTodos] = useState([
        {title: 'Homework', importance: 5, body: 'Do math', key: '1'},
        {title: 'Programming', importance: 4, body: 'create react native todo app', key: '2'}
    ]);

    const addTodo = (todo) => {
        todo.key = Math.random().toString();
        setTodos((currentTodos) => {
            return [todo, ...currentTodos];
        });
        setModalOpen(false);
    }

    const pressHandler = (item) => {
        navigation.navigate('TodoDetails', item);
    }

    return (
        <View style={styles.content}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            style={styles.modalClose}
                            name='close'
                            size={24}
                            onPress={() => setModalOpen(false)}
                        />
                        <TodoForm addTodo={addTodo}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <Button onPress={() => setModalOpen(true)} title='+ Add' color='#67c4f0'/>

            <FlatList
                data={todos}
                renderItem={({item}) => (
                    <TodoItem item={item} pressHandler={pressHandler}/>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 20
    },
    modalContent: {
        flex: 1,
        padding: 20
    },
    modalClose: {
        marginLeft: 370,
        marginBottom: 20
    }
});