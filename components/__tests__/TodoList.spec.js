import 'react-native';
import React from 'react';
import { TodoList } from '../TodoList';
import renderer from 'react-test-renderer';


it('Render TodoList', async () => {
    const todosMock = [{
        id: 1,
        title: 'Test title',
        desc: 'Test desc'
    },
    {
        id: 2,
        title: 'Test title',
        desc: 'Test desc'
    }];

    const tree = renderer.create(
        <TodoList
            navigation={{}}
            todos={todosMock}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
