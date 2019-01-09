import React from 'react';
import { shallow } from 'enzyme';
import { PostQuestionPage } from '../../../../src/components/post-question/PostQuestionPage';

const props = {
  error: '',
  history: { push: jest.fn() },
  postQuestion: jest.fn(),
  id: 1
}
describe('login page tests', () => {
  const wrapper = shallow(<PostQuestionPage {...props} />);

  it('should render the login page without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
