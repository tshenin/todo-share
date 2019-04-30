import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { TodoItem } from './TodoItem';
import { FloatButton } from './FloatButton';
import { TodoForm } from './TodoForm';
import { addTodo, deleteTodo, updateTodoById } from '../services/Todos';

export class TodoList extends Component {
    state = {
        addMode: false,
        todos: [],
        firstUpdate: true,
        updating: null,
    }

    static getDerivedStateFromProps(props, state) {
        const { firstUpdate } = state;
        if (firstUpdate && props.todos.length > state.todos.length) {
            const { todos } = props;
            return { todos, firstUpdate: false };
        }
        const { todos } = state;
        return { todos };
    }

    setAddMode = value => this.setState({ addMode: value });

    setUpdating = value => this.setState({ updating: value });

    addNewTodo = async (data) => {
        const { boardId } = this.props;
        const { todos } = this.state;
        const todo = { board_id: boardId, ...data };

        try {
            const newTodo = await addTodo(todo);
            this.setState({ todos: [...todos, newTodo] });
        } catch (e) {
            // console.error(e);
        }
        this.setAddMode(false);
    }

    updateTodo = async (id, data) => {
        try {
            const changedTodo = await updateTodoById(id, data);
            const todos = this.state.todos.map(t => (t.id === changedTodo.id ? changedTodo : t));
            this.setState({ todos, updating: null });
        } catch (e) {
            console.error(e);
        }
    }

    onDeleteTodo = async (id) => {
        try {
            await deleteTodo(id);
            const todos = this.state.todos.filter(todo => todo.id !== id);
            this.setState({ todos });
        } catch (e) {
            console.error(e);
        }
    }

    getTodoItems = todos => (todos.map(t => (this.state.updating === t.id
        ? <TodoForm
            key={t.id}
            todo={t}
            onCancel={() => this.setUpdating(null)}
            onSend={data => this.updateTodo(t.id, data)}
        />
        : <TodoItem
            todo={t}
            key={t.id}
            onPress={() => this.setState({ updating: t.id })}
            onDelete={this.onDeleteTodo}
        />
    )));

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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
    },
});

TodoList.propTypes = {
    navigation: PropTypes.object,
    todos: PropTypes.array,
    boardId: PropTypes.number,
};
