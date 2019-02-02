import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import ListScreen from '../screens/ListScreen';
import BoardsScreen from '../screens/BoardsScreen';
import { getBoards } from '../services/Api';

const BoardsStacks = {};
const boards = getBoards();
// todo move custom to component
boards.forEach(board => {
    BoardsStacks[board.title] = createStackNavigator({
        [board.id]: {
            screen: ListScreen,
            navigationOptions: {
                title: board.title,
            },
            params: {
                boardId: board.id
            }
        }
    });
});

const BoardsStack = createStackNavigator({ BoardsScreen });
BoardsStack.navigationOptions = {
    title: 'All boards'
};

export default createDrawerNavigator({
    ...BoardsStacks,
    BoardsStack
});
