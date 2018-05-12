import React from 'react';
import DisplayBox from '../../src/components/DisplayBox';

import renderer from 'react-test-renderer';

describe('component snapshot test' , () => {
  it('renders Display Box without crashing', () => {
    const rendered = renderer.create(<DisplayBox />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

describe('component prop check', () => {
  it('renders Text passed as prop', () => {
    const displayText = 'Hello';
    const rendered = renderer.create(<DisplayBox displayText={displayText}/>).root;
    expect(rendered.findByType('Text').children[0]).toEqual('Hello');
  });
});
