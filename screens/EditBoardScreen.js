import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { BoardForm } from '../components/BoardForm';
import { Header } from '../components/Header';
import { getBoardById } from '../services/Boards';

export class EditBoardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { board: {} };
    }

    async componentDidMount() {
        const id = this.props.navigation.getParam('boardId');
        const board = await getBoardById(id);
        this.setState({ board });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <ScrollView style={styles.container}>
                    <BoardForm
                        navigation={this.props.navigation}
                        board={this.state.board}
                        key={this.state.board.id}
                    />
                </ScrollView>
            </View>
        );
    }

};

EditBoardScreen.navigationOptions = () => {
    const title = 'Edit Board';
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
})