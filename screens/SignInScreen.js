import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import { SignInForm } from '../components/SignInForm';

export const SignInScreen = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.wrapper}>
            <SignInForm navigation={navigation}/>
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

SignInScreen.propTypes = {
    navigation: PropTypes.object,
};
