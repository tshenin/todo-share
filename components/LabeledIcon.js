import React from 'react';
import {
    StyleSheet, TouchableHighlight, Text, View,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { colors } from '../services/consts';

export const LabeledIcon = (props) => {
    const {
        onPress,
        label,
        name,
        mod,
    } = props;

    let iconColor;
    switch (mod) {
    case 'danger':
        iconColor = 'white';
        break;
    default:
        iconColor = colors.additional;
        break;
    }

    return (
        <TouchableHighlight
            onPress={onPress}
            style={[
                styles.labeledIcon,
                mod === 'danger' && styles.labeledIconDanger,
            ]}
            underlayColor='rgba(255, 255, 255, 0)'
        >
            <View>
                <EvilIcons
                    style={styles.icon}
                    name={name}
                    size={36}
                    color={iconColor}
                />
                <Text style={[
                    styles.text,
                    mod === 'danger' && styles.textLight,
                ]}>{label}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    labeledIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labeledIconDanger: {
        backgroundColor: 'red',
    },
    icon: {
        alignSelf: 'center',
    },
    text: {
        fontSize: 12,
        color: colors.textDark,
        textAlign: 'center',
    },
    textLight: {
        color: 'white',
    },
});

LabeledIcon.propTypes = {
    onPress: PropTypes.func,
    label: PropTypes.string,
    name: PropTypes.string,
    mod: PropTypes.string,
};
