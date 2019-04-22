import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import { BoardsScreen } from '../screens/BoardsScreen';
import { TodosScreen } from '../screens/TodosScreen';
import { AddBoardScreen } from '../screens/AddBoardScreen';
import { AddTodoScreen } from '../screens/AddTodoScreen';
import { EditBoardScreen } from '../screens/EditBoardScreen';
import { SignInScreen } from '../screens/SignInScreen';
import { AuthLoadingScreen } from '../screens/AuthLoadingScreen';
import { routes } from '../services/consts';

const AppStack = createStackNavigator(
    {
        [routes.Boards]: BoardsScreen,
        [routes.Todos]: TodosScreen,
        [routes.AddBoard]: AddBoardScreen,
        [routes.AddTodo]: AddTodoScreen,
        [routes.EditBoard]: EditBoardScreen,
    },
    {
        initialRouteName: routes.Boards,
        headerMode: 'screen',
    },
);

const AuthStack = createStackNavigator(
    {
        SignIn: SignInScreen,
    },
    {
        headerMode: 'none',
    },
);

const AppNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    },
);

export default createAppContainer(AppNavigator);
