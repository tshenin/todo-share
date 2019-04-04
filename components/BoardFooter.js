import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Footer } from './Footer';
import { LabeledIcon } from './LabeledIcon';

export const BoardFooter = props => {
    const { navigation } = props;

    return (
        <Footer>
            <View style={[styles.container, styles.iconWrapper]}>
                <LabeledIcon
                    label="Delete"
                    name="trash"
                    onPress={() => {}}
                />
                <LabeledIcon
                    label="Share"
                    name="share-apple"
                    onPress={() => {}}
                />
                <LabeledIcon
                    label="Share"
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
        justifyContent: 'space-evenly'
    }
});
