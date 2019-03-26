import 'react-native';
import React from 'react';
import { BoardItem } from '../BoardItem';
import renderer from 'react-test-renderer';

it('Render BoardsItem', async () => {
    const boardMock = {
        id: 1,
        title: 'Test title',
        desc: 'Test desc'
    };

    const tree = renderer.create(
        <BoardItem
            index={1}
            navigation={{}}
            board={boardMock}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
