import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { BoardItem } from '../BoardItem';

jest.useFakeTimers();

it('Render BoardsItem', async () => {
    const boardMock = {
        id: 1,
        title: 'Test title',
        desc: 'Test desc',
    };

    const tree = renderer.create(
        <BoardItem
            index={1}
            navigation={{}}
            board={boardMock}
        />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
