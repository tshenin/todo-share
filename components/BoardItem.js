import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

export const BoardItem = (props) => {
    const { board } = props;
    return (
        <TouchableHighlight>
            <Text>{board.title}</Text>
        </TouchableHighlight>
    );
}

