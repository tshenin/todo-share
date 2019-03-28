import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo';

import { getBoards } from '../services/Api';
import { BoardList } from '../components/BoardList';
import { Header } from '../components/Header';
import { AddBoardButton } from '../components/AddBoardButton';

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
        const { navigation } = this.props;
        const { boards } = this.state;

        return (
            <View style={styles.wrapper}>
                <ScrollView style={styles.container}>
                    <BoardList
                        boards={boards}
                        navigation={navigation}
                    />
                </ScrollView>
                <AddBoardButton
                    navigation={navigation}
                />
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
})