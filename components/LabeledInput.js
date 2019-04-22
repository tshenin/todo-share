import React from 'react';
import {
    StyleSheet, View, Text, TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../services/consts';

export const LabeledInput = (props) => {
    const { label, size, mod } = props;

    return (
        <View>
            <Text style={[
                styles.label,
                mod === 'light' && styles.lightLabel,
            ]}>
                {label}
            </Text>
            <TextInput
                style={[
                    styles.input,
                    size === 'small' && styles.smallInput,
                    mod === 'light' && styles.lightInput,
                ]}
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderBottomColor: colors.main,
        borderBottomWidth: 1,
        fontSize: 24,
    },
    lightInput: {
        borderBottomColor: 'white',
    },
    smallInput: {
        fontSize: 14,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
    label: {
        color: colors.textDark,
    },
    lightLabel: {
        color: 'rgba(255, 255, 255, 0.6)',
    },
});

LabeledInput.propTypes = {
    label: PropTypes.string,
    size: PropTypes.number,
    mod: PropTypes.string,
};
