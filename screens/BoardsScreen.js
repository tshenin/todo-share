import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { getBoards } from '../services/Api';
import { COLORS } from '../services/consts';
import { BoardList } from '../components/BoardList';

export default class ListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: []
        };
    }

    componentDidMount() {
        const boards = getBoards();
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
        backgroundColor: COLORS.MAIN_BG,
        color: COLORS.FONT_LIGHT,
    }
})