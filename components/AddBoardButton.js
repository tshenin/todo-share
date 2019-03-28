import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const AddBoardButton = props => {
    const { navigation } = props;
    const goToForm = () => {};
    
    return (
        <TouchableHighlight
            onPress={goToForm}
            style={styles.button}
        >
            <Ionicons
                name="ios-add-circle"
                size={82}
                color="#fa6c35"
            />
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        right: 40,
        bottom: 40,
    },
});
