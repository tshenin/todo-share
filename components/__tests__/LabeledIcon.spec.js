import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { LabeledIcon } from '../LabeledIcon';

it('Render LabeledIcon', async () => {
    const tree = renderer.create(
        <LabeledIcon
            label="Test"
            name="plus"
        />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
