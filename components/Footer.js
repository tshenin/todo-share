import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, dims } from '../services/consts';

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
        height: dims.footerHeight,
        flex: 1,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        paddingBottom: 20
    },
});
