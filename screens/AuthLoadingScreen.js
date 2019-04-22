import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { getAuthStatus } from '../services/Auth';


export const AuthLoadingScreen = (props) => {
    const { navigation } = props;

    const checkToken = async () => {
        try {
            await getAuthStatus();
            navigation.navigate('App');
        } catch (e) {
            navigation.navigate('Auth');
        }
    };

    checkToken();

    return (
        <View style={styles.wrapper}>
            <Text>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

AuthLoadingScreen.propTypes = {
    navigation: PropTypes.object,
};
