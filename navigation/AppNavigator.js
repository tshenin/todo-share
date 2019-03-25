import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { BoardsScreen } from '../screens/BoardsScreen';

const AppNavigator = createStackNavigator(
    {
        Boards: BoardsScreen,
    },
    {
        initialRouteName: "Boards"
    }
);

export default createAppContainer(AppNavigator);