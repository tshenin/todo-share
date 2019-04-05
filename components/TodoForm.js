import React from 'react';
import {
    TextInput,
    View,
    Button,
    StyleSheet,
    Text
} from 'react-native';

import { addTodo } from '../services/Api';
import { colors } from '../services/consts';
import { LabeledInput } from './LabeledInput';
import { CustomButton } from './CustomButton';

export class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: ''
        }
    }

    submitForm = async () => {
        const { navigation, boardId } = this.props;
        const data = {
            board_id: boardId,
            ...this.state
        };
        try {
            await addTodo(data);
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
                        title={'Add Todo'}
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
});
