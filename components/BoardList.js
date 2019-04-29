import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Vibration,
} from 'react-native';
import PropTypes from 'prop-types';

import { BoardItem } from './BoardItem';
import { BoardsFooter } from './BoardsFooter';
import { FloatButton } from './FloatButton';
import { routes } from '../services/consts';

export class BoardList extends Component {
    state = { selected: null };

    getBoardItems = () => {
        const { boards } = this.props;
        const { selected } = this.state;

        return boards.map(b => (
            <BoardItem
                board={b}
                onPress={() => this.goToTodos(b)}
                onLongPress={() => this.selectBoard(b)}
                blocked={selected && b.id !== selected.id}
                selected={selected && b.id === selected.id}
                key={b.id}
            />
        ));
    };

    goToTodos = (board) => {
        const { navigation } = this.props;
        const { selected } = this.state;

        if (!selected || board.id === selected.id) {
            this.setState({ selected: null });
            navigation.navigate(routes.Todos, {
                boardId: board.id,
                boardTitle: board.title,
            });
            return;
        }

        this.setState({ selected: null });
    }

    selectBoard = (board) => {
        Vibration.vibrate(100);
        this.setState({ selected: board });
    }

    goToAddBoard = () => {
        this.setState({ selected: null });
        this.props.navigation.navigate(routes.AddBoard);
    }

    afterDelete = () => {
        this.props.updateBoards();
        this.setState({ selected: null });
    }

    render() {
        const { navigation } = this.props;
        const { selected } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <View style={[styles.container, styles.list]}>
                        {this.getBoardItems()}
                    </View>
                </ScrollView>
                {selected && <BoardsFooter
                    selected={selected}
                    navigation={navigation}
                    afterDelete={this.afterDelete}
                />}
                {!selected && <FloatButton
                    name="plus"
                    title="Add Board"
                    onPress={this.goToAddBoard}
                />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 40,
    },
});

BoardList.propTypes = {
    boards: PropTypes.array,
    navigation: PropTypes.object,
    updateBoards: PropTypes.func,
};
