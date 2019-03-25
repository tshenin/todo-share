import React from 'react';
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native';

export const BoardItem = (props) => {
    const { board, index } = props;
    return (
        <View style={styles.wrapper}>
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
        padding: 20,
        paddingRight: 0,
    },
    item: {
        flex: 1,
        backgroundColor: '#5e1c73',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingRight: 10,
        borderRadius: 20,
    },

    text: {
        color: 'white',
        fontSize: 24,
    }
});
