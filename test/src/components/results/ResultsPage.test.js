import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { store } from '../../../../src/store/store';
import Results, { ResultPage } from '../../../../src/components/results/ResultsPage';

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

describe('Results mount tests', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Results store={store} {...props} />
    </MemoryRouter>
  );
  const instance = wrapper.find('ResultPage').instance();

  it('mapStateToProps works as expected', () => {
    expect(instance.props.results).toBeDefined();
  });
});
