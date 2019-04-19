import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { BoardsFooter } from '../BoardsFooter';

it('Render BoardsFooter', async () => {
    const tree = renderer.create(
        <BoardsFooter navigation={{}} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
