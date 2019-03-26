import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { getTodosByBoard } from '../services/Api';
import { Header } from '../components/Header';

export class TodosScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    async componentDidMount() {
        const boardId = this.props.navigation.getParam('boardId');
        const todos = await getTodosByBoard(boardId);
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

TodosScreen.navigationOptions = (props) => {
    const title = 'Todos';
    return {
        title,
        header: () => <Header title={title}></Header>,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    }
})