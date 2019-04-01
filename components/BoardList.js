import React from 'react';
import { BoardItem } from './BoardItem';
import { View, StyleSheet } from 'react-native';

export const BoardList = (props) => {
    const { boards, navigation } = props;
    const boardItems = boards.map((b, i) => (
        <BoardItem
            index={i}
            board={b}
            navigation={navigation}
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
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 40,
    }
});