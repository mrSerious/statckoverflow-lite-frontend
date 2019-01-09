import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { store } from '../../../../src/store/store';
import Signup, { SignupPage } from '../../../../src/components/signup/SignupPage';

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

describe('results page mount tests', () => {
  const wrapper = mount(
    <MemoryRouter>
      <SignupPage store={store} {...props} />
    </MemoryRouter>
  );
  const instance = wrapper.find('SignupPage').instance();
  const e = {
    preventDefault: jest.fn(),
    target: { name: 'email', value: 'something' },
  };

  it('handleChange works as expected', () => {
    instance.handleChange(e);
    expect(instance.state.email).toEqual('something');
  });

  it('handleFormSubmit works as expected', () => {
    instance.handleFormSubmit(e);
    expect(e.preventDefault).toBeCalledTimes(1);
  });
});

describe('Signup mount tests', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Signup store={store} {...props} />
    </MemoryRouter>
  );
  const instance = wrapper.find('SignupPage').instance();

  it('handleChange works as expected', () => {
    instance.props.signup();
    expect(instance.props.signup).toBeDefined();
  });
});
