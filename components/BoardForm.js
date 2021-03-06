import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    AlertIOS,
} from 'react-native';
import PropTypes from 'prop-types';

import { addBoard, updateBoardById } from '../services/Boards';
import { colors, routes } from '../services/consts';
import { LabeledInput } from './LabeledInput';
import { CustomButton } from './CustomButton';

export class BoardForm extends Component {
    constructor(props) {
        super(props);
        const { board = {} } = this.props;
        this.state = {
            title: board.title,
            desc: board.desc,
            invalidTitle: false,
        };
    }

    showErrorAlert = () => {
        AlertIOS.alert(
            'Something go wrong',
            'Please try later or restart the app',
        );
    };

    isUpdateMode = () => !!(this.props.board && this.props.board.id)

    checkBoardValidity = (data) => {
        if (!data.title) {
            this.setState({ invalidTitle: true });
            return false;
        }
        return true;
    }

    submitForm = async () => {
        const { navigation, board = null } = this.props;
        const { title, desc } = this.state;
        const data = { title, desc };

        if (!this.checkBoardValidity(data)) {
            return;
        }

        try {
            if (this.isUpdateMode()) {
                await updateBoardById(board.id, data);
                navigation.navigate(routes.Boards, { refresh: true });
            } else {
                const newBoard = await addBoard(data);
                navigation.navigate(routes.Todos, {
                    boardId: newBoard.id,
                    boardTitle: newBoard.title,
                });
            }
        } catch (e) {
            // todo if the reason is not recognized
            this.showErrorAlert();
        }
    }

    render() {
        const { invalidTitle } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.fieldset}>
                    <LabeledInput
                        label='Title'
                        value={this.state.title}
                        onChangeText={title => this.setState({ title, invalidTitle: false })}
                        maxLength={40}
                    />
                    {invalidTitle && <Text style={styles.errorMessage}>Please enter Title</Text>}
                </View>
                <View style={styles.fieldset}>
                    <LabeledInput
                        label='Description'
                        multiline={true}
                        numberOfLines={4}
                        value={this.state.desc}
                        onChangeText={desc => this.setState({ desc })}
                    />
                </View>
                <View style={styles.fieldset}>
                    <CustomButton
                        title={this.isUpdateMode()
                            ? 'Update Board'
                            : 'Add Board'}
                        disabled={!this.submitButtonDisabled}
                        onPress={this.submitForm}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingLeft: 40,
    },
    fieldset: {
        marginBottom: 20,
    },
    errorMessage: {
        paddingTop: 5,
        color: colors.danger,
    },
});

BoardForm.propTypes = {
    board: PropTypes.object,
    navigation: PropTypes.object,
};
