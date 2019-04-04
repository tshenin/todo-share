import React from 'react';
import { StyleSheet, View } from 'react-native';

import { LabeledIcon } from './LabeledIcon';
import { Footer } from './Footer';

export const BoardsFooter = props => {
    const { navigation } = props;
    const goToAddBoard = () => navigation.navigate('AddBoard');

    return (
        <Footer>
            <View style={styles.iconWrapper}>
                <LabeledIcon
                    label="Add board"
                    name="plus"
                    onPress={goToAddBoard}
                />
            </View>
        </Footer>
    );
};

const styles = StyleSheet.create({
    iconWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});
