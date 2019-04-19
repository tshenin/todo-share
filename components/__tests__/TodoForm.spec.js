import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { TodoForm } from '../TodoForm';

it('Render TodoForm', async () => {
    const tree = renderer.create(
        <TodoForm />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
