import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { addBoard, updateBoardById } from '../services/Boards';
import { colors } from '../services/consts';
import { LabeledInput } from './LabeledInput';
import { CustomButton } from './CustomButton';

export class BoardForm extends Component {
    constructor(props) {
        super(props);
        const { board = {} } = this.props;
        this.state = {
            title: board.title,
            desc: board.desc,
        };
    }

    isUpdateMode = () => {
        return !!(this.props.board && this.props.board.id);
    }

    submitForm = async () => {
        const { navigation, board = null } = this.props;
        const data = { ...this.state };
        try {
            if (this.isUpdateMode()) {
                await updateBoardById(board.id, data);
            } else {
                await addBoard(data);
            }
            navigation.goBack();
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.fieldset}>
                    <LabeledInput
                        label='Title'
                        value={this.state.title}
                        onChangeText={title => this.setState({ title })}
                        maxLength={40}
                    />
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
                        onPress={this.submitForm}
                    />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingLeft: 40,
    },
    fieldset: {
        marginBottom: 20
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderBottomColor: colors.main,
        borderBottomWidth: 1,
        fontSize: 24,
    },
    label: {
        color: colors.textDark,
    }
});
