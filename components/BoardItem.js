import React from 'react';
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native';

const BASE_PADDING = 20;

const isEven = i => i % 2 === 0;

const getRightPadding = i => isEven(i)
    ? BASE_PADDING / 2
    : BASE_PADDING;

const getLeftPadding = i => isEven(i)
    ? BASE_PADDING
    : BASE_PADDING / 2;

export const BoardItem = (props) => {
    const { board, index } = props;

    return (
        <View style={[styles.wrapper, {
            paddingRight: getRightPadding(index),
            paddingLeft: getLeftPadding(index)
        }]}>
            <TouchableHighlight style={styles.item}>
                <Text style={styles.text}>{board.title}</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '50%',
        minHeight: 300,
    },
    item: {
        flex: 1,
        backgroundColor: '#5e1c73',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        paddingRight: 20,
        borderRadius: 20,
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: '200',
    }
});
