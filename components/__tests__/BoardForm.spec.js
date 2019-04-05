import 'react-native';
import React from 'react';
import { BoardForm } from '../BoardForm';
import renderer from 'react-test-renderer';

it('Render BoardForm', async () => {
    const tree = renderer.create(
        <BoardForm />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
