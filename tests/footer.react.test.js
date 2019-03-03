import React from 'react';
import Footer from '../src/components/navbar/Footer';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Footer/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});