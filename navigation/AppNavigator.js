import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { BoardsScreen } from '../screens/BoardsScreen';
import { TodosScreen } from '../screens/TodosScreen';
import { AddBoardScreen } from '../screens/AddBoardScreen';
import { AddTodoScreen } from '../screens/AddTodoScreen';
import { EditBoardScreen } from '../screens/EditBoardScreen';
import { routes } from '../services/consts';

const AppNavigator = createStackNavigator(
    {
        [routes.Boards]: BoardsScreen,
        [routes.Todos]: TodosScreen,
        [routes.AddBoard]: AddBoardScreen,
        [routes.AddTodo]: AddTodoScreen,
        [routes.EditBoard]: EditBoardScreen,
    },
    {
        initialRouteName: routes.Boards,
        headerMode: 'screen'
    }
);

export default createAppContainer(AppNavigator);