import React from 'react';
import { StyleSheet, View, AlertIOS } from 'react-native';

import { deleteBoard } from '../services/Boards';
import { LabeledIcon } from './LabeledIcon';
import { Footer } from './Footer';

export const BoardsFooter = props => {
    const { navigation, selected } = props;
    const goToAddBoard = () => navigation.navigate('AddBoard');
    const goToEditBoard = () => navigation.navigate('EditBoard', { boardId: selected.id })
    const deleteCurrentBoard = async () => {
        await deleteBoard(selected.id);
        navigation.navigate('Boards');
    };
    const showDeleteAlert = () => {
        AlertIOS.alert(
            `Delete board ${selected.title}`,
            'Are you sure you want delete this board?',
            [
                {
                    text: 'Cancel',
                    onPress: () => { },
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
                {selected &&
                    <LabeledIcon
                        label="Remove"
                        name="trash"
                        onPress={showDeleteAlert}
                    />
                }
                {selected &&
                    <LabeledIcon
                        label="Edit"
                        name="pencil"
                        onPress={goToEditBoard}
                    />
                }
                {selected &&
                    <LabeledIcon
                        label="Share"
                        name="share-apple"
                        onPress={() => {}}
                    />
                }
                {!selected &&
                    <LabeledIcon
                        label="Add board"
                        name="plus"
                        onPress={goToAddBoard}
                    />
                }
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
