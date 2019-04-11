import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Footer } from './Footer';
import { LabeledIcon } from './LabeledIcon';

export const BoardFooter = props => {
    const { navigation, boardId } = props;
    const goToAddTodo = () => navigation.navigate('AddTodo', { boardId });

    return (
        <Footer>
            <View style={styles.iconWrapper}>
                <LabeledIcon
                    label="Add todo"
                    name="plus"
                    onPress={goToAddTodo}
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
