import allQuestionsReducer from '../../../src/reducers/allQuestionsReducer';
import { ALL_QUESTIONS_BEGIN, ALL_QUESTIONS_SUCCESS } from '../../../src/actions/actionTypes';

const state = {
  loading: false,
  questions: [],
  success: false,
};

describe('getQuestions reducer test', () => {
  it('should return the initial state', () => {
    expect(allQuestionsReducer(undefined, {})).toEqual(state);
  });

  it('should handle GET_QUESTIONS_BEGIN', () => {
    state.loading = true;

    expect(allQuestionsReducer(state, {
      type: ALL_QUESTIONS_BEGIN,
    })).toEqual(state);
  });

  it('should handle GET_QUESTIONS_SUCCESS', () => {
    state.loading = false;
    state.success = true;
    state.questions = [{ question: 'question' }];

    expect(allQuestionsReducer(state, {
      type: ALL_QUESTIONS_SUCCESS,
      payload: state.questions,
    })).toEqual(state);
  });
});
