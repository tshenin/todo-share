import 'react-native';
import React from 'react';
import { TodoItem } from '../TodoItem';
import renderer from 'react-test-renderer';

it('Render TodoItem', async () => {
    const todoMock = {
        id: 1,
        title: 'Test title',
        desc: 'Test desc'
    };

    const tree = renderer.create(
        <TodoItem
            index={1}
            navigation={{}}
            todo={todoMock}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
