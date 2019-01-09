import React from 'react';
import { shallow } from 'enzyme';
import { SignupPage } from '../../../../src/components/signup/SignupPage';

const props = {
  signup: jest.fn(),
  history: { push: jest.fn() },
};

describe('results page tests', () => {
  const wrapper = shallow(<SignupPage {...props} />);

  it('should render the results page without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
