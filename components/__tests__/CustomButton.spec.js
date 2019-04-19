import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { CustomButton } from '../CustomButton';

it('Render BoardsFooter', async () => {
    const tree = renderer.create(
        <CustomButton title="test" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
