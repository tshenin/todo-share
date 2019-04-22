import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../services/consts';

export const CustomButton = (props) => {
    const { title, onPress, mod } = props;
    return (
        <TouchableOpacity
            style={[
                styles.button,
                mod === 'light' && styles.lightButton,
                mod === 'trans' && styles.transButton,
            ]}
            onPress={onPress}
        >
            <Text
                style={[
                    styles.title,
                    mod === 'light' && styles.lightModText,
                    mod === 'trans' && styles.transModText,
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
    transButton: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
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
    transModText: {
        color: 'white',
    },
});

CustomButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    mod: PropTypes.string,
};
