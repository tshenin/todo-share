import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { TodosScreen } from '../screens/TodosScreen';
import { CustomDrawerContent } from '../components/CustomDrawerContent';


export default createDrawerNavigator(
    {
        Todos: {
            screen: TodosScreen,
        }
    },
    {
        contentComponent: CustomDrawerContent,
    }
);
