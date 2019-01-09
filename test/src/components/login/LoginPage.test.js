import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../../../src/components/login/LoginPage';

const props = {
  login: jest.fn()
}
describe('results page tests', () => {
  const wrapper = shallow(<LoginPage {...props} />);

  it('should render the results page without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
