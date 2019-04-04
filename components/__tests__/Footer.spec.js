import 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { Footer } from '../Footer';
import renderer from 'react-test-renderer';

it('Render Footer', async () => {
    const tree = renderer.create(
        <Footer>
            <Text>Test</Text>
        </Footer>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
