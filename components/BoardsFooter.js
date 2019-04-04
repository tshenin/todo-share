import React from 'react';
import { StyleSheet, View } from 'react-native';

import { LabeledIcon } from './LabeledIcon';
import { Footer } from './Footer';

export const BoardsFooter = props => {
    const { navigation } = props;

    return (
        <Footer>
            <View style={[styles.container, styles.iconWrapper]}>
                <LabeledIcon
                    label="Add board"
                    name="plus"
                    onPress={() => {}}
                />
            </View>
        </Footer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});
