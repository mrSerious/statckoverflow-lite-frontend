import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { store } from '../../../../src/store/store';
import Login, { LoginPage } from '../../../../src/components/login/LoginPage';

const props = {
  login: jest.fn(),
  history: { push: jest.fn() },
};

describe('login page tests', () => {
  const wrapper = shallow(<LoginPage {...props} />);

  it('should render the login page without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('login page mount tests', () => {
  const wrapper = mount(
    <MemoryRouter>
      <LoginPage store={store} {...props} />
    </MemoryRouter>
  );
  const instance = wrapper.find('LoginPage').instance();
  const e = {
    preventDefault: jest.fn(),
    target: { name: 'email', value: 'something' },
  };

  it('handleChange works as expected', () => {
    instance.handleChange(e);
    expect(instance.state.email).toEqual('something');
  });

  it('handleSubmit works as expected', () => {
    instance.handleSubmit(e);
    expect(e.preventDefault).toBeCalledTimes(1);
  });
});

describe('Login mount tests', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Login store={store} {...props} />
    </MemoryRouter>
  );
  const instance = wrapper.find('LoginPage').instance();

  it('login works as expected', () => {
    instance.props.login();
    expect(instance.props.login).toBeDefined();
  });
});
