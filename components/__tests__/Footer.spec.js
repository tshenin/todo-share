import { Text } from 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import { Footer } from '../Footer';

it('Render Footer', async () => {
    const tree = renderer.create(
        <Footer>
            <Text>Test</Text>
        </Footer>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
