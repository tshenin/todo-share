import React from 'react';
import { TodoItem } from './TodoItem';
import { View, StyleSheet } from 'react-native';

export const TodoList = (props) => {
    const { todos } = props;
    const todoItems = todos.map(t => (
        <TodoItem
            todo={t}
            key={t.id}
        />
    ));

    return (
        <View style={styles.container}>
            {todoItems}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
    }
});