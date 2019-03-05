import React from 'react';
import HomePage from '../src/components/navbar/Footer';
import renderer from 'react-test-renderer';

test('HomePage component tree to match snapshot', () => {
    const component = renderer.create(
        <HomePage/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});