import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { TodoItem } from './TodoItem';
import { FloatButton } from './FloatButton';
import { TodoForm } from './TodoForm';
import { addTodo } from '../services/Todos';

export class TodoList extends Component {

    state = {
        addMode: false,
        todos: [],
        firstUpdate: true
    }

    static getDerivedStateFromProps(props, state) {
        const { firstUpdate } = state;
        if (firstUpdate && props.todos.length > state.todos.length) {
            let todos = props.todos;
            return { todos, firstUpdate: false };
        } else {
            let todos = state.todos;
            return { todos };
        }
    }

    getTodoItems = todos =>
        todos.map(t => (
            <TodoItem
                todo={t}
                key={t.id}
            />
        ));


    setAddMode = value => this.setState({ addMode: value });

    addNewTodo = async data => {
        const { boardId } = this.props;
        const { todos } = this.state;
        const todo = { board_id: boardId, ...data };

        try {
            const newTodo = await addTodo(todo);
            this.setState({ todos: [...todos, newTodo] });
        } catch (e) {
            console.error(e);
        }
        this.setAddMode(false);
    }

    render() {
        const { addMode, todos } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    {this.getTodoItems(todos)}
                    {addMode && <TodoForm
                        onCancel={() => this.setAddMode(false)}
                        onSend={data => this.addNewTodo(data)}
                    />}
                </ScrollView>
                {!addMode && <FloatButton
                    name="plus"
                    title="Add Todo"
                    onPress={() => this.setAddMode(true)}
                />}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
    }
});