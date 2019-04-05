import React from 'react';
import { StyleSheet, View, AlertIOS } from 'react-native';

import { Footer } from './Footer';
import { LabeledIcon } from './LabeledIcon';
import { deleteBoard } from '../services/Api';

export const BoardFooter = props => {
    const { navigation, boardId, boardTitle } = props;
    const goToAddTodo = () => navigation.navigate('AddTodo', { boardId });
    const deleteCurrentBoard = async () => {
        await deleteBoard(boardId);
        navigation.navigate('Boards');
    };
    const showDeleteAlert = () => {
        AlertIOS.alert(
            `Delete board ${boardTitle}`,
            'Are you sure you want delete this board?',
            [
                {
                    text: 'Cancel',
                    onPress: () => {},
                    style: 'cancel',
                },
                {
                    text: 'Yes, delete',
                    onPress: deleteCurrentBoard,
                },
            ]
        );
    };

    return (
        <Footer>
            <View style={styles.iconWrapper}>
                <LabeledIcon
                    label="Delete"
                    name="trash"
                    onPress={showDeleteAlert}
                />
                <LabeledIcon
                    label="Share"
                    name="share-apple"
                    onPress={() => { }}
                />
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
