import React from 'react';
import { StyleSheet, View, AlertIOS } from 'react-native';
import PropTypes from 'prop-types';

import { deleteBoard } from '../services/Boards';
import { LabeledIcon } from './LabeledIcon';
import { Footer } from './Footer';
import { routes } from '../services/consts';

export const BoardsFooter = (props) => {
    const { navigation, selected, afterDelete } = props;
    const goToAddBoard = () => navigation.navigate(routes.AddBoard);
    const goToEditBoard = () => navigation.navigate(routes.EditBoard, { boardId: selected.id });

    const showErrorAlert = () => {
        AlertIOS.alert(
            'Something go wrong',
            'Please try later or restart the app',
        );
    };
    const deleteCurrentBoard = async () => {
        try {
            await deleteBoard(selected.id);
            afterDelete();
        } catch (e) {
            // todo if the reason is not recognized
            showErrorAlert();
        }
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
            ],
        );
    };

    return (
        <Footer>
            <View style={styles.iconWrapper}>
                {selected
                    && <LabeledIcon
                        label="Remove"
                        name="trash"
                        onPress={showDeleteAlert}
                    />
                }
                {selected
                    && <LabeledIcon
                        label="Edit"
                        name="pencil"
                        onPress={goToEditBoard}
                    />
                }
                {selected
                    && <LabeledIcon
                        label="Share"
                        name="share-apple"
                        onPress={() => { }}
                    />
                }
                {!selected
                    && <LabeledIcon
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
    },
});

BoardsFooter.propTypes = {
    navigation: PropTypes.object,
    selected: PropTypes.object,
    afterDelete: PropTypes.func,
};
