import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../../../../src/components/common/header/Header';


const props = {
  loggedIn: true,
  history: { push: jest.fn() },
}
describe('Header tests', () => {
  const wrapper = shallow(<Header {...props} />);

  it('should render the header without crashing', () => {
    expect(wrapper.find('.navigation').exists()).toBe(true);
  });
});
