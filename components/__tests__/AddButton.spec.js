import 'react-native';
import React from 'react';
import { AddButton } from '../AddButton';
import renderer from 'react-test-renderer';

it('Render AddButton', async () => {
    const tree = renderer.create(
        <AddButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
