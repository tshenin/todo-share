import 'react-native';
import React from 'react';
import { TodoForm } from '../TodoForm';
import renderer from 'react-test-renderer';

it('Render TodoForm', async () => {
    const tree = renderer.create(
        <TodoForm />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
