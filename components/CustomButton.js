import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { colors } from '../services/consts';

export const CustomButton = props => {
    const { title, onPress } = props;
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.additional,
        padding: 10,
        borderRadius: 10,
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        fontWeight: '300',
        lineHeight: 36,
    }
});