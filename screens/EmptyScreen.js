import React from 'react';
import { Button, View } from 'react-native';
import { StyleSheet } from 'react-native';

export default class EmptyScreen extends React.Component {
    goToNewBoard = (e) => {
        console.log(e);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Add board"
                    onPress={this.goToNewBoard}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    }
})