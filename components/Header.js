import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../services/consts';

export const Header = (props) => {
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
        paddingTop: 64,
        paddingLeft: 40,
        paddingRight: 20,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: colors.main,
    },
});

Header.propTypes = {
    title: PropTypes.string,
};
