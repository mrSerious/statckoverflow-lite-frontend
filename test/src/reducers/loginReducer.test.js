import loginReducer from '../../../src/reducers/loginReducer';
import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../../../src/actions/actionTypes';

const state = {
  error: null,
  id: null,
  loading: false,
  loggedIn: false,
  success: false,
  token: null,
  user: null,
  username: null,
};

describe('login reducer test', () => {
  it('should return the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(state);
  });

  it('should handle LOGIN_BEGIN', () => {
    state.loading = true;

    expect(loginReducer(state, {
      type: LOGIN_BEGIN,
    })).toEqual(state);
  });

  it('should handle LOGIN_SUCCESS', () => {
    state.loading = false;
    state.success = true;
    state.id = 'something';
    state.token = 'token';
    state.username = 'username';
    state.loggedIn = true;
    state.user = {
      userid: 'something',
      token: 'token',
      username: 'username',
    };

    expect(loginReducer(state, {
      type: LOGIN_SUCCESS,
      payload: {
        data: {
          userid: 'something',
          token: 'token',
          username: 'username',
          loggedInUser: state.user,
        }
      },
    })).toEqual(state);
  });

  it('should handle LOGIN_ERROR', () => {
    state.loading = false;
    state.success = false;
    state.id = null;
    state.token = null;
    state.error = 'error';
    state.user = null;
    state.loggedIn = false;

    expect(loginReducer(state, {
      type: LOGIN_ERROR,
      payload: 'error',
    })).toEqual(state);
  });
});
