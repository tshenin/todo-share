import 'react-native';
import React from 'react';
import { LabeledInput } from '../LabeledInput';
import renderer from 'react-test-renderer';

it('Render LabeledInput', async () => {
    const tree = renderer.create(
        <LabeledInput label="test" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
