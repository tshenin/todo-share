import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { getTodosByBoard } from '../services/Api';
import { Header } from '../components/Header';
import { TodoList } from '../components/TodoList';
import { BoardFooter } from '../components/BoardFooter';

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
        const boardId = this.props.navigation.getParam('boardId');
        const title = this.props.navigation.getParam('boardTitle');

        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <TodoList
                        todos={todos}
                        navigation={navigation}
                    />
                </ScrollView>
                <BoardFooter
                    navigation={navigation}
                    boardId={boardId}
                    boardTitle={title}
                />
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
    },
})