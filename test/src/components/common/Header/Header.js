import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../../../../src/components/common/header/Header';

describe('Header tests', () => {
  const wrapper = shallow(<Header />);

  it('should render the header without crashing', () => {
    expect(wrapper.find('.navigation').exists()).toBe(true);
  });
});
