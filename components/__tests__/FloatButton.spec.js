import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { FloatButton } from '../FloatButton';

it('Render FloatButton', async () => {
    const tree = renderer.create(
        <FloatButton
            title="Test"
            name="plus"
        />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
