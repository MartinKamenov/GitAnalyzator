import React from 'react';
import Footer from '../src/components/navbar/Footer';
import renderer from 'react-test-renderer';

test('Footer component tree to match snapshot', () => {
    const component = renderer.create(
        <Footer/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});