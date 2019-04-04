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
            <View style={styles.wrapper}>
                <EvilIcons
                    name={name}
                    size={36}
                    color={colors.additional}
                />
                <Text style={styles.iconText}>{label}</Text>
            </View>
            
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    labeledIcon: {
        flex: 1,
    },
    iconText: {
        fontSize: 12,
        color: colors.textDark
    }
});
