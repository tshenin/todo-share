import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../services/consts';

export const AddButton = props => {
    const { onPress } = props;

    return (
        <TouchableHighlight
            onPress={onPress}
            style={styles.wrapper}
            underlayColor="black"
        >
            <View style={styles.button}>
                <Ionicons
                    name="ios-add"
                    size={40}
                    color="white"
                />
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        right: 40,
        bottom: 40,
        borderRadius: 20,
    },
    button: {
        backgroundColor: colors.additional,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 20,
    }
});
