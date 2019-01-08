import React from 'react';
import { shallow } from 'enzyme';
import ResultsPage from '../../../../src/components/results/ResultsPage';

describe('Header tests', () => {
  const wrapper = shallow(<ResultsPage />);

  it('should render the results page without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
