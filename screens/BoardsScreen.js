import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { getBoards } from '../services/Api';
import { BoardList } from '../components/BoardList';
import { Header } from '../components/Header';
import { AddButton } from '../components/AddButton';

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

    goToAddBoard = () => {
        this.props.navigation.navigate('AddBoard');
    }

    render() {
        const { navigation } = this.props;
        const { boards } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <BoardList
                        boards={boards}
                        navigation={navigation}
                    />
                </ScrollView>
                <AddButton onPress={this.goToAddBoard} />
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
    container: {
        flex: 1,
    },
})