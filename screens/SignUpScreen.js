import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import { SignUpForm } from '../components/SignUpForm';

export const SignUpScreen = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.wrapper}>
            <SignUpForm navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
});

SignUpScreen.propTypes = {
    navigation: PropTypes.object,
};
