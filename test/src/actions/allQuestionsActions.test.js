import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import  { allQuestionsBegin, allQuestionsSuccess, allQuestionsRequest } from '../../../src/actions/allQuestionsActions';
import { ALL_QUESTIONS_SUCCESS, ALL_QUESTIONS_BEGIN } from '../../../src/actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const expectedAction = {};

describe('getQuestions actions test', () => {
  it('should handle GET_QUESTIONS_BEGIN', () => {
    expectedAction.type = ALL_QUESTIONS_BEGIN;
    expect(allQuestionsBegin()).toEqual(expectedAction);
  });

  it('should handle GET_QUESTIONS_SUCCESS', () => {
    expectedAction.type = ALL_QUESTIONS_SUCCESS;
    expectedAction.payload = [{ question: 'question' }];

    expect(allQuestionsSuccess(expectedAction.payload))
      .toEqual(expectedAction);
  });
});
