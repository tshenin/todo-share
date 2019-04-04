import 'react-native';
import React from 'react';
import { BoardsFooter } from '../BoardsFooter';
import renderer from 'react-test-renderer';

it('Render BoardsFooter', async () => {
    const tree = renderer.create(
        <BoardsFooter navigation={{}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
