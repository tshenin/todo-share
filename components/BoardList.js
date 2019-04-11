import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { BoardItem } from './BoardItem';
import { BoardsFooter } from './BoardsFooter';

export class BoardList extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: null };
    }

    onPress = board => {
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

    onLongPress = board => {
        this.setState({ selected: board });
    };

    getBoardItems = () => {
        const { boards, navigation } = this.props;
        const { selected } = this.state;

        return boards.map(b => (
            <BoardItem
                board={b}
                navigation={navigation}
                onPress={() => this.onPress(b)}
                onLongPress={() => this.onLongPress(b)}
                blocked={selected && b.id !== selected.id}
                selected={selected && b.id === selected.id}
                key={b.id}
            />
        ))
    };

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
                <BoardsFooter
                    selected={selected}
                    navigation={navigation}
                />
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