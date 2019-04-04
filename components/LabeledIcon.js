import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { colors } from '../services/consts';

export const LabeledIcon = props => {
    const { onPress, label, name } = props;

    return (
        <TouchableHighlight
            onPress={onPress}
            style={styles.labeledIcon}
            underlayColor="rgba(255, 255, 255, 0)"
        >
            <View>
                <EvilIcons
                    style={styles.icon}
                    name={name}
                    size={36}
                    color={colors.additional}
                />
                <Text style={styles.text}>{label}</Text>
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
    icon: {
        alignSelf: 'center',
    },
    text: {
        fontSize: 12,
        color: colors.textDark,
        textAlign: 'center'
    }
});
