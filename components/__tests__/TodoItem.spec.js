import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { TodoItem } from '../TodoItem';

it('Render TodoItem', async () => {
    const todoMock = {
        id: 1,
        title: 'Test title',
        desc: 'Test desc',
    };

    const tree = renderer.create(
        <TodoItem
            index={1}
            navigation={{}}
            todo={todoMock}
        />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
