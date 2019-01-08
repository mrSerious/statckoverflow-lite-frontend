
import searchReducer from '../../../src/reducers/search';
import { SEARCH_BEGIN, SEARCH_ERROR, SEARCH_SUCCESS } from '../../../src/actions/actionTypes';

const state = {
  loading: false,
  results: [],
  success: false,
};
const results = [{ question: 'question' }];

describe('search reducer tests', () => {
  it('should return the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual(state);
  });

  it('should handle SEARCH_BEGIN', () => {
    state.loading = true;

    expect(searchReducer(state, {
      type: SEARCH_BEGIN
    })).toEqual(state);
  });

  it('should handle SEARCH_SUCCESS', () => {
    state.loading = false;
    state.success = true;
    state.results = results;
    delete state.request;

    expect(searchReducer(state, {
      type: SEARCH_SUCCESS,
      payload: results,
    })).toEqual(state);
  });

  it('should handle SEARCH_ERROR', () => {
    state.success = false;
    state.results = [];

    expect(searchReducer(state, {
      type: SEARCH_ERROR,
      payload: results,
    })).toEqual(state);
  });
});
