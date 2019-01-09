import postQuestionReducer from '../../../src/reducers/postQuestionReducer';
import * as types from '../../../src/actions/actionTypes';

const state = {
  error: null,
  loading: false,
  success: false,
  id: null,
};

describe('postQuestion reducer test', () => {
  it('should return the initial state', () => {
    expect(postQuestionReducer(undefined, {})).toEqual(state);
  });

  it('should handle POST_QUESTION_BEGIN', () => {
    state.loading = true;

    expect(postQuestionReducer(state, {
      type: types.POST_QUESTION_BEGIN,
    })).toEqual(state);
  });

  it('should handle POST_QUESTION_SUCCESS', () => {
    state.loading = false;
    state.success = true;
    state.id = 'id';

    expect(postQuestionReducer(state, {
      type: types.POST_QUESTION_SUCCESS,
      payload: 'id',
    })).toEqual(state);
  });

  it('should handle POST_QUESTION_ERROR', () => {
    state.loading = false;
    state.success = false;
    state.error = 'error';
    state.id = null;

    expect(postQuestionReducer(state, {
      type: types.POST_QUESTION_ERROR,
      payload: 'error',
    })).toEqual(state);
  });
});
