import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { getBoards } from '../services/Api';
import { BoardList } from '../components/BoardList';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

export class BoardsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: []
        };
    }

    async componentDidMount() {
        const boards = await getBoards();
        this.setState({
            boards: [...boards]
        });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <ScrollView style={styles.container}>
                    <BoardList
                        boards={this.state.boards}
                        navigation={this.props.navigation}
                    />
                </ScrollView>
                <View style={styles.addButton}>
                    <Button title="Test" />
                </View>
            </View>
        );
    }
};

BoardsScreen.navigationOptions = () => {
    const title = 'Boards';
    return {
        title,
        header: () => <Header title={title}></Header>,
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    addButton: {
        position: 'absolute',
        right: 40,
        bottom: 20,
    }
})