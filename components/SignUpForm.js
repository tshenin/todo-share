import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { SecureStore } from 'expo';

import { colors } from '../services/consts';
import { LabeledInput } from './LabeledInput';
import { CustomButton } from './CustomButton';
import { signUp } from '../services/Auth';


export class SignUpForm extends Component {
    state = {
        email: '',
        password: '',
    };

    signup = async () => {
        const { email, password } = this.state;
        if (!email || !password) {
            return;
        }

        try {
            const { token } = await signUp({ username: email, password });
            await SecureStore.setItemAsync('token', token);
            this.props.navigation.navigate('App');
        } catch (e) {
            console.log(e);
        }
    }

    forget = () => {
        this.props.navigation.navigate('App');
    }

    signin = () => {
        this.props.navigation.navigate('SignIn');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
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
                        title='Sign Up'
                        onPress={this.signup}
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
                        title='Sign in'
                        onPress={this.signin}
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

SignUpForm.propTypes = {
    navigation: PropTypes.object,
};
