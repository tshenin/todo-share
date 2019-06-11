import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { setItemAsync } from 'expo-secure-store';

import { colors } from '../services/consts';
import { LabeledInput } from './LabeledInput';
import { CustomButton } from './CustomButton';
import { signIn } from '../services/Auth';


export class SignInForm extends Component {
    state = {
        email: '',
        password: '',
    };

    signin = async () => {
        const { email, password } = this.state;
        if (!email || !password) {
            return;
        }

        try {
            const { token } = await signIn({ username: email, password });
            await setItemAsync('token', token);
            this.props.navigation.navigate('App');
        } catch (e) {
            console.log(e);
        }
    }

    forget = () => {
        this.props.navigation.navigate('App');
    }

    signup = () => {
        this.props.navigation.navigate('SignUp');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sign In</Text>
                <View style={styles.fieldset}>
                    <LabeledInput
                        label='E-mail'
                        mod='light'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        autoCapitalize='none'
                        color='white'
                    />
                </View>
                <View style={styles.fieldset}>
                    <LabeledInput
                        label='Password'
                        mod='light'
                        value={this.state.password}
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}
                        color='white'
                    />
                </View>
                <View style={styles.fieldset}>
                    <CustomButton
                        title='Sign in'
                        onPress={this.signin}
                    />
                </View>
                <View style={styles.fieldset}>
                    <CustomButton
                        title='Forget password?'
                        onPress={this.forget}
                        mod='trans'
                    />
                </View>
                <View style={styles.fieldset}>
                    <CustomButton
                        title='Sign up'
                        onPress={this.signup}
                        mod='trans'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: '15%',
        paddingLeft: '15%',
        backgroundColor: colors.main,
        justifyContent: 'center',
    },
    title: {
        fontSize: 48,
        color: 'white',
        marginBottom: 20,
    },
    fieldset: {
        marginBottom: 20,
    },
    errorMessage: {
        paddingTop: 5,
        color: colors.danger,
    },
});

SignInForm.propTypes = {
    navigation: PropTypes.object,
};
