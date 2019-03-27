import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

export const Button = props => {
    const { title, onPress } = props;
    return (
        <TouchableHighlight
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})
