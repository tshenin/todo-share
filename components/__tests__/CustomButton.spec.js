import 'react-native';
import React from 'react';
import { CustomButton } from '../CustomButton';
import renderer from 'react-test-renderer';

it('Render BoardsFooter', async () => {
    const tree = renderer.create(
        <CustomButton title="test" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
