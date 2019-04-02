import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { BoardsScreen } from '../screens/BoardsScreen';
import { TodosScreen } from '../screens/TodosScreen';
import { AddBoardScreen } from '../screens/AddBoardScreen';
import { AddTodoScreen } from '../screens/AddTodoScreen';

const AppNavigator = createStackNavigator(
    {
        Boards: BoardsScreen,
        Todos: TodosScreen,
        AddBoard: AddBoardScreen,
        AddTodo: AddTodoScreen
    },
    {
        initialRouteName: 'Boards',
        headerMode: 'screen'
    }
);

export default createAppContainer(AppNavigator);