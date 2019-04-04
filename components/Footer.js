import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../services/consts';

export const Footer = props => {
    return (
        <View style={styles.footer}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        borderTopWidth: 1,
        borderTopColor: colors.border,
        position: 'absolute',
        height: 84,
        flex: 1,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        paddingBottom: 20
    },
});
