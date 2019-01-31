import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import BoardsScreen from '../screens/BoardsScreen';
import EmptyScreen from '../screens/EmptyScreen';

const BoardsStack = createStackNavigator({ BoardsScreen });
BoardsStack.navigationOptions = {
    drawerLabel: 'Boards',
}

const EmptyStack = createStackNavigator({ EmptyScreen });
EmptyStack.navigationOptions = {
    drawerLabel: 'No boards',
};

export default createDrawerNavigator({
    BoardsStack,
    EmptyStack
});
