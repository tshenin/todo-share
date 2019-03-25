import React from 'react';
import { BoardItem } from './BoardItem';
import { View, StyleSheet } from 'react-native';

export const BoardList = (props) => {
    const { boards } = props;
    const boardItems = boards.map((b, i) => (
        <BoardItem
            index={i}
            board={b}
            key={b.id}
        />
    ));

    return (
        <View style={styles.container}>
            {boardItems}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    }
});