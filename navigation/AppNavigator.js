import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { BoardsScreen } from '../screens/BoardsScreen';
import { TodosScreen } from '../screens/TodosScreen';

const AppNavigator = createStackNavigator(
    {
        Boards: BoardsScreen,
        Todos: TodosScreen
    },
    {
        initialRouteName: "Boards",
        headerMode: 'screen'
    }
);

export default createAppContainer(AppNavigator);