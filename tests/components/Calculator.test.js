import React from 'react';
import Calculator from '../../src/components/Calculator';

import renderer from 'react-test-renderer';

describe('component snapshot test', () => {
  it('renders calculator without crashing', () => {
    const rendered = renderer.create(<Calculator />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});