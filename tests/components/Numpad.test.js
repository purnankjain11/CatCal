import React from 'react';
import Numpad from '../../src/components/Numpad';

import renderer from 'react-test-renderer';

describe('component snapshot test', () => {
  it('renders component without crashing', () => {
    const rendered = renderer.create(<Numpad />).toJSON();
  });
});