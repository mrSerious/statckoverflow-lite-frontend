import signupReducer from '../../../src/reducers/signupReducer';
import {
  SIGNUP_BEGIN, SIGNUP_SUCCESS, SIGNUP_ERROR
} from '../../../src/actions/actionTypes';

const state = {
  loading: false,
  success: false,
  error: null,
  user: null,
};

describe('signup reducer tests', () => {
  it('should return the initial state', () => {
    expect(signupReducer(undefined, {})).toEqual(state);
  });

  it('should handle SIGNUP_BEGIN', () => {
    state.loading = true;

    expect(signupReducer(state, {
      type: SIGNUP_BEGIN,
    })).toEqual(state);
  });

  it('should handle SIGNUP_SUCCESS', () => {
    state.loading = false;
    state.error = null;
    state.user = 'oluseyi';

    expect(signupReducer(state, {
      type: SIGNUP_SUCCESS,
      payload: 'oluseyi',
    })).toEqual(state);
  });

  it('should handle SIGNUP_ERROR', () => {
    state.loading = false;
    state.error = 'Some Error Message';
    state.user = null;

    expect(signupReducer(state, {
      type: SIGNUP_ERROR,
      payload: 'Some Error Message',
    })).toEqual(state);
  });
});
