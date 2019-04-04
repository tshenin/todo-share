import 'react-native';
import React from 'react';
import { BoardFooter } from '../BoardFooter';
import renderer from 'react-test-renderer';

it('Render BoardFooter', async () => {
    const tree = renderer.create(
        <BoardFooter
            navigation={{}}
            boardId={1}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
