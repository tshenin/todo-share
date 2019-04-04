import 'react-native';
import React from 'react';
import { LabeledIcon } from '../LabeledIcon';
import renderer from 'react-test-renderer';

it('Render LabeledIcon', async () => {
    const tree = renderer.create(
        <LabeledIcon
            label="Test"
            name="plus"
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
