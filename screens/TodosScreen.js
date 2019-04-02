import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { getTodosByBoard } from '../services/Api';
import { Header } from '../components/Header';
import { TodoList } from '../components/TodoList';
import { AddButton } from '../components/AddButton';

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

    goToAddTodo = () => {
        const boardId = this.props.navigation.getParam('boardId');
        this.props.navigation.navigate('AddTodo', { boardId });
    }

    render() {
        const { todos } = this.state;
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <TodoList
                        todos={todos}
                        navigation={navigation}
                    />
                </ScrollView>
                <AddButton onPress={this.goToAddTodo} />
            </View>
        );
    }
}

TodosScreen.navigationOptions = (props) => {
    const title = props.navigation.getParam('boardTitle');
    return {
        title,
        header: () => <Header title={title}></Header>,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})