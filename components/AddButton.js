import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../services/consts';

export const AddButton = props => {
    const { onPress } = props;

    return (
        <Ionicons
            style={styles.wrapper}
            onPress={onPress}
            name="ios-add-circle"
            size={48}
            color={colors.additional}
        />
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        right: 40,
        bottom: 40,
    }
});
