import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { getTodosByBoard } from '../services/Api';

export default class ListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        const boardId = this.props.navigation.getParam('boardId')
        const todos = getTodosByBoard(boardId)
        this.setState({
            todos
        });
    }

    getTodos = () => this.state.todos
        .map(todo => <Text key={todo.id}>{todo.title}</Text>);

    render() {
        const todos = this.getTodos();
        return (
            <ScrollView style={styles.container}>
                {todos}
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    }
})