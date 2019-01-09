import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/actionTypes';
import initialState from './initialState';

const loginReducer = (state = initialState.login, action) => {
  switch (action.type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        success: true,
        token: action.payload.token,
        id: action.payload.userid,
        username: action.payload.username,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case 'LOGOUT':
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};

export default loginReducer;
