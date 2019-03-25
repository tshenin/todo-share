import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { getBoards } from '../services/Api';
import { BoardList } from '../components/BoardList';

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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})