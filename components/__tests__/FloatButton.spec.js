import 'react-native';
import React from 'react';
import { FloatButton } from '../FloatButton';
import renderer from 'react-test-renderer';

it('Render FloatButton', async () => {
    const tree = renderer.create(
        <FloatButton
            title="Test"
            name="plus"
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
