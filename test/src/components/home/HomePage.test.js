import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import { store } from '../../../../src/store/store';
import Home, { HomePage } from '../../../../src/components/home/HomePage';

const props = {
  getQuestions: jest.fn(),
  questions: [],
  loading: false,
};

describe('Homepage tests', () => {
  it('App snapshot test', () => {
    const component = shallow(<HomePage {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('App snapshot test', () => {
    props.loading = true;
    const component = shallow(<HomePage {...props} />);
    expect(component.find('Loader').exists()).toBe(true);
  });

  it('it renders questions correctly', () => {
    props.loading = false;
    const questions = [{
      username: 'username',
    }];
    const component = shallow(<HomePage {...props} />);
    component.setState({ questions });
    expect(component.find('.question-summary').exists()).toBe(true);
  });
});

describe('Home mount tests', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Home store={store} {...props} />
    </MemoryRouter>
  );
  const instance = wrapper.find('HomePage').instance();

  it('getQuestions works as expected', () => {
    instance.props.getQuestions();
    expect(instance.props.getQuestions).toBeDefined();
  });
});
