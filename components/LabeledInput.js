import React from 'react';
import {
    StyleSheet, View, Text, TextInput,
} from 'react-native';
import { colors } from '../services/consts';

export const LabeledInput = (props) => {
    const { label, size } = props;

    return (
        <View>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput
                style={[
                    styles.input,
                    size === 'small' && styles.smallInput,
                ]}
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderBottomColor: colors.main,
        borderBottomWidth: 1,
        fontSize: 24,
    },
    smallInput: {
        fontSize: 14,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
    label: {
        color: colors.textDark,
    },
});
