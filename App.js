import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddFrom from "./components/AddFrom";

export default function App() {
    const [todos, setTodos] = useState([]);

    const pressHandler = (key) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.key !== key)
        });
    };

    const addHandler = (text) => {
        setTodos((prevTodos) => {
           return [
               {text: text, key: Math.random().toString()},
               ...prevTodos
           ]
        });
    }

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <AddFrom addHandler={addHandler}/>
                <FlatList
                    style={styles.list}
                    data={todos}
                    renderItem={({item}) => (
                        <TodoItem
                            item={item}
                            pressHandler={pressHandler}
                        />
                    )}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
    },
    list: {
        marginTop: 20,
    },
});