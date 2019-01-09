import React from 'react';
import { shallow } from 'enzyme';
import { ResultPage } from '../../../../src/components/results/ResultsPage';

const props = {
  results: ['test'],
  history: { push: jest.fn() },
};

describe('results page tests', () => {
  const wrapper = shallow(<ResultPage {...props} />);

  it('should render the results page without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
