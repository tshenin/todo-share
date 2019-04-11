import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { BoardItem } from './BoardItem';
import { BoardsFooter } from './BoardsFooter';
import { FloatButton } from './FloatButton';

export class BoardList extends Component {

    state = {
        selected: null
    };

    getBoardItems = () => {
        const { boards, navigation } = this.props;
        const { selected } = this.state;

        return boards.map(b => (
            <BoardItem
                board={b}
                navigation={navigation}
                onPress={() => this.goToTodos(b)}
                onLongPress={() => this.selectBoard(b)}
                blocked={selected && b.id !== selected.id}
                selected={selected && b.id === selected.id}
                key={b.id}
            />
        ))
    };

    goToTodos = board => {
        const { navigation } = this.props;
        const { selected } = this.state;

        if (!selected || board.id === selected.id) {
            navigation.navigate('Todos', {
                boardId: board.id,
                boardTitle: board.title
            });
            return;
        }

        this.setState({ selected: null });
    }

    selectBoard = board => {
        this.setState({ selected: board });
    };

    goToAddBoard = () => {
        this.props.navigation.navigate('AddBoard');
    }

    render() {
        const { navigation } = this.props;
        const { selected } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView style={[styles.container, styles.pb]}>
                    <View style={[styles.container, styles.list]}>
                        {this.getBoardItems()}
                    </View>
                </ScrollView>
                {selected && <BoardsFooter
                    selected={selected}
                    navigation={navigation}
                />}
                {!selected && <FloatButton
                    name="plus"
                    title="Add Board"
                    onPress={this.goToAddBoard}
                />}
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 40,
    }
});