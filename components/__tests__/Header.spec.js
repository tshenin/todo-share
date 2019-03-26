import 'react-native';
import React from 'react';
import { Header } from '../Header';
import renderer from 'react-test-renderer';


it('Render Header with title', async () => {
    const tree = renderer.create(<Header title="test"/>).toJSON();
    expect(tree).toMatchSnapshot();
});
