import 'react-native';
import React from 'react';
import { AddTodoForm } from '../AddTodoForm';
import renderer from 'react-test-renderer';

it('Render AddTododForm', async () => {
    const tree = renderer.create(
        <AddTodoForm />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
