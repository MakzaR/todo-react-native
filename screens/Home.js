import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';
import TodoItem from "../components/TodoItem";

export default function Home({navigation}) {
    const [todos, setTodos] = useState([
        {title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1'},
        {title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2'},
        {title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
    ]);

    const pressHandler = (item) => {
        navigation.navigate('TodoDetails', item);
    }

    return (
        <View>
            <FlatList
                data={todos}
                renderItem={({item}) => (
                    <TodoItem item={item} pressHandler={pressHandler}/>
                )}/>
        </View>
    );
}

const styles = StyleSheet.create({});