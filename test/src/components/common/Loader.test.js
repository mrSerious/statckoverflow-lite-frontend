import React from 'react';
import { shallow } from 'enzyme';

import Loader from '../../../../src/components/common/Loader';

test('App snapshot test', () => {
  const component = shallow(<Loader />);
  expect(component).toMatchSnapshot();
});
