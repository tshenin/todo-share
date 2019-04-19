import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '../Header';

it('Render Header with title', async () => {
    const tree = renderer.create(<Header title="test" />).toJSON();
    expect(tree).toMatchSnapshot();
});
