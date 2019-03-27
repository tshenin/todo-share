import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header = props => {
    const { title } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 80,
        paddingLeft: 40,
        paddingRight: 20,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#5e1c73',
    }
})
