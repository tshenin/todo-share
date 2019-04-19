import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { BoardForm } from '../BoardForm';

it('Render BoardForm', async () => {
    const tree = renderer.create(
        <BoardForm />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
