import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { BoardList } from '../BoardList';


it('Render BoardList', async () => {
    const boardsMock = [{
        id: 1,
        title: 'Test title',
        desc: 'Test desc',
    },
    {
        id: 2,
        title: 'Test title',
        desc: 'Test desc',
    }];

    const tree = renderer.create(
        <BoardList
            navigation={{}}
            boards={boardsMock}
        />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
