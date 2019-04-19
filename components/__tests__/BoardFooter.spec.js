import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { BoardFooter } from '../BoardFooter';

it('Render BoardFooter', async () => {
    const tree = renderer.create(
        <BoardFooter
            navigation={{}}
            boardId={1}
        />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
