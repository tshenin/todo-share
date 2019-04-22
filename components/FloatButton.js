import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { colors } from '../services/consts';

export const FloatButton = (props) => {
    const { title, onPress, name } = props;
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <EvilIcons
                style={styles.icon}
                name={name}
                size={36}
                color={'white'}
            />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        right: 40,
        bottom: 20,
        borderRadius: 20,
        backgroundColor: colors.additional,
        padding: 10,
    },
    icon: {
        alignSelf: 'center',
    },
    text: {
        fontSize: 12,
        color: colors.textLight,
        textAlign: 'center',
    },
});

FloatButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    name: PropTypes.string,
};
