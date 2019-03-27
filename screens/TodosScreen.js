import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { getTodosByBoard } from '../services/Api';
import { Header } from '../components/Header';
import { TodoList } from '../components/TodoList';

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
        this.setState({ todos });
    }


    render() {
        const { todos } = this.state;
        const { navigation } = this.props;
        return (
            <ScrollView style={styles.container}>
                <TodoList
                    todos={todos}
                    navigation={navigation}
                />
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