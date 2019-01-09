import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../../../src/components/login/LoginPage';

const props = {
  login: jest.fn(),
  history: { push: jest.fn() },
}
describe('login page tests', () => {
  const wrapper = shallow(<LoginPage {...props} />);

  it('should render the login page without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
