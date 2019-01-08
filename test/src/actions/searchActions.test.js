import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import {
  searchBegin, searchSuccess, searchError, searchRequest
} from '../../../src/actions/searchAction';
import { SEARCH_BEGIN, SEARCH_ERROR, SEARCH_SUCCESS } from '../../../src/actions/actionTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const expectedAction = {};

const searchTerm = 'test';
const results = [{ data: { questions: 'questions' } }];

describe('search actions tests', () => {
  it('should handle SEARCH_BEGIN', () => {
    expectedAction.type = SEARCH_BEGIN;
    expectedAction.loading = true;

    expect(searchBegin()).toEqual(expectedAction);
  });

  it('should handle SEARCH_SUCCESS', () => {
    expectedAction.type = SEARCH_SUCCESS;
    expectedAction.payload = results;
    expectedAction.loading = false;

    expect(searchSuccess(results)).toEqual(expectedAction);
  });

  it('should handle SEARCH_ERROR', () => {
    expectedAction.type = SEARCH_ERROR;
    delete expectedAction.payload;

    expect(searchError()).toEqual(expectedAction);
  });
});
