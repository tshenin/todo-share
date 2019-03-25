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
    const onPress = e => console.log(e);

    return (
        <View style={[styles.wrapper, {
            paddingRight: getRightPadding(index),
            paddingLeft: getLeftPadding(index)
        }]}>
            <TouchableHighlight
                style={styles.underlay}
                underlayColor="black"
                onPress={onPress}
            >
                <View style={styles.item}>
                    <Text style={styles.text}>{board.title}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '50%',
    },
    underlay: {
        minHeight: 300,
        borderRadius: 20,
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
