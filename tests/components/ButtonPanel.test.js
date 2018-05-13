import React from 'react';
import ButtonPanel from '../../src/components/ButtonPanel';
import Numpad from '../../src/components/Numpad';

import renderer from 'react-test-renderer';

describe('component snapshot test', () => {
  it('renders ButtonPanel without crashing', () => {
    const rendered = renderer.create(<ButtonPanel />).toJSON();
    expect(rendered).toMatchSnapshot(); 
  });
});

describe('renders various components', () => {
  it('renders the Numpad', () => {
    const rendered = renderer.create(<ButtonPanel />).root;
    expect(rendered.findByType(Numpad));
  });
});