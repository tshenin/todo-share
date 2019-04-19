import React from 'react';
import { StyleSheet, View } from 'react-native';

import { getBoards } from '../services/Boards';
import { BoardList } from '../components/BoardList';
import { Header } from '../components/Header';

export class BoardsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: [],
        };
    }

    updateBoards = async () => {
        const boards = await getBoards();
        this.setState({
            boards: [...boards],
        });
    }

    componentDidMount() {
        this.updateBoards();
        this.props.navigation.addListener('willFocus', (payload) => {
            if (payload.state.params) {
                this.updateBoards();
            }
        });
    }

    render() {
        const { navigation } = this.props;
        const { boards } = this.state;

        return (
            <View style={styles.container}>
                <BoardList
                    boards={boards}
                    navigation={navigation}
                />
            </View>
        );
    }
}

BoardsScreen.navigationOptions = () => {
    const title = 'Boards';
    return {
        title,
        header: () => <Header title={title}></Header>,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
