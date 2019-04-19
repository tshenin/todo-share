import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import { getTodosByBoard } from '../services/Todos';
import { Header } from '../components/Header';
import { TodoList } from '../components/TodoList';

export class TodosScreen extends React.Component {
    state = {
        todos: [],
    };

    async componentDidMount() {
        const boardId = this.props.navigation.getParam('boardId');
        const todos = await getTodosByBoard(boardId);
        this.setState({ todos });
    }

    render() {
        const { todos } = this.state;
        const { navigation } = this.props;
        const boardId = this.props.navigation.getParam('boardId');

        return (
            <View style={styles.container}>
                <TodoList
                    boardId={boardId}
                    todos={todos}
                    navigation={navigation}
                    key={boardId}
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
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

TodosScreen.propTypes = {
    navigation: PropTypes.object,
};
