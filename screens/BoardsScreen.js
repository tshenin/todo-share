import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default class BoardsScreen extends React.Component {

    static navigationOptions = {
        title: 'Boards',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>So guys whatsap</Text>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    }
})