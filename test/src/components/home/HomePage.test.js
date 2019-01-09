import React from 'react';
import { shallow } from 'enzyme';

import { HomePage } from '../../../../src/components/home/HomePage';

const props = {
  getQuestions: jest.fn(),
  questions: [],
  loading: false,
};

test('App snapshot test', () => {
  const component = shallow(<HomePage {...props} />);
  expect(component).toMatchSnapshot();
});
