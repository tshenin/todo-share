import 'react-native';
import React from 'react';
import { AddBoardForm } from '../AddBoardForm';
import renderer from 'react-test-renderer';

it('Render AddBoardForm', async () => {
    const tree = renderer.create(
        <AddBoardForm />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
