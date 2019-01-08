import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from '../../../../../src/components/common/header/SearchForm';

describe('Header tests', () => {
  const wrapper = shallow(<SearchForm />);

  it('should render the search form without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
