import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm } from '../../../../../src/components/common/header/SearchForm';

const props = {
  search: jest.fn(),
  history: { push: jest.fn() },
};

describe('search form tests', () => {
  const wrapper = shallow(<SearchForm {...props} />);

  it('should render the search form without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
