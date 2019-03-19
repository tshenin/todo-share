import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { getBoards } from '../services/Api';



export class CustomDrawerContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { boards: [] };
    }

    async componentDidMount() {
        const boards = await getBoards();
        this.setState({
            boards: [...boards]
        });
    }

    getItems = () => {
        const { boards } = this.state;
        return boards
            .map(board => <Text key={board.id}>{board.title}</Text>);
    }

    render() {
        const items = this.getItems();

        return (
            <ScrollView>
                <SafeAreaView
                    style={styles.container}
                    forceInset={{ top: 'always', horizontal: 'never' }}
                >
                    {items}
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
