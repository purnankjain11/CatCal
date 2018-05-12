import React from 'react';
import ButtonPanel from '../../src/components/ButtonPanel';

import renderer from 'react-test-renderer';

describe('component snapshot test', () => {
  it('renders ButtonPanel without crashing', () => {
    const rendered = renderer.create(<ButtonPanel />).toJSON();
    expect(rendered).toMatchSnapshot(); 
  });
});