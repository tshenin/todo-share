import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { colors } from '../services/consts';

export const CustomButton = (props) => {
    const { title, onPress, mod } = props;
    return (
        <TouchableOpacity
            style={[
                styles.button,
                mod === 'light' && styles.lightButton,
            ]}
            onPress={onPress}
        >
            <Text
                style={[
                    styles.title,
                    mod === 'light' && styles.lightModText,
                ]}>
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
    lightButton: {
        backgroundColor: 'white',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        fontWeight: '300',
        lineHeight: 36,
    },
    lightModText: {
        color: colors.additional,
    },
});
