import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { TodoList } from '../TodoList';

it('Render TodoList', async () => {
    const todosMock = [{
        id: 1,
        title: 'Test title',
        desc: 'Test desc',
    },
    {
        id: 2,
        title: 'Test title',
        desc: 'Test desc',
    }];

    const tree = renderer.create(
        <TodoList todos={todosMock} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
