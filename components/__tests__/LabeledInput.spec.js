import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { LabeledInput } from '../LabeledInput';

it('Render LabeledInput', async () => {
    const tree = renderer.create(
        <LabeledInput label="test" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
