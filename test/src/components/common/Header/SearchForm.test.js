import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { store } from '../../../../../src/store/store';
import Search, { SearchForm } from '../../../../../src/components/common/header/SearchForm';

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

describe('searchform mount tests', () => {
  const wrapper = mount(
    <MemoryRouter>
      <SearchForm store={store} {...props} />
    </MemoryRouter>
  );
  const instance = wrapper.find('SearchForm').instance();
  const e = {
    preventDefault: jest.fn(),
    target: { name: 'value', value: 'something' },
  };

  it('handleChange works as expected', () => {
    instance.handleChange(e);
    expect(instance.state.value).toEqual('something');
  });

  it('handleSubmit works as expected', () => {
    instance.handleChange(e);
    instance.handleSubmit(e);
    expect(e.preventDefault).toBeCalledTimes(1);
    expect(props.search).toBeCalledTimes(1);
    expect(props.history.push).toBeCalledTimes(1);
  });
});

describe('Search mount tests', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Search store={store} {...props} />
    </MemoryRouter>
  );
  const instance = wrapper.find('SearchForm').instance();

  it('search works as expected', () => {
    instance.props.search('stuff');
    expect(instance.props.search).toBeDefined();
  });
});
