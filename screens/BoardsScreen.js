import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { getBoards } from '../services/Api';
import { BoardList } from '../components/BoardList';
import { Header } from '../components/Header';

export class BoardsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: []
        };
    }

    async componentDidMount() {
        const boards = await getBoards();
        this.setState({
            boards: [...boards]
        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <BoardList
                    boards={this.state.boards}
                />
            </ScrollView>
        );
    }
};

BoardsScreen.navigationOptions = (props) => {
    const title = 'Boards';
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