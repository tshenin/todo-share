import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import { LabeledInput } from './LabeledInput';
import { CustomButton } from './CustomButton';

export class TodoForm extends React.Component {

    state = {
        title: '',
        desc: ''
    }

    render() {
        const { onCancel, onSend } = this.props;

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
                {/* <View style={styles.fieldset}>
                    <LabeledInput
                        size="small"
                        label='Description'
                        multiline={true}
                        numberOfLines={4}
                        value={this.state.desc}
                        onChangeText={desc => this.setState({ desc })}
                    />
                </View> */}
                <View style={[styles.fieldset, styles.buttons]}>
                    <CustomButton
                        title={'Cancel'}
                        mod="light"
                        onPress={onCancel}
                    />
                    <CustomButton
                        title={'Add Todo'}
                        onPress={() => onSend({...this.state})}
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
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
