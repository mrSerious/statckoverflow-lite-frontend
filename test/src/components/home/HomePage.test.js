import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../../../../src/components/home/HomePage';

test('App snapshot test', () => {
  const component = shallow(<HomePage />);
  expect(component).toMatchSnapshot();
});
