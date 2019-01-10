import {
  LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT
} from '../actions/actionTypes';
import initialState from './initialState';

const loginReducer = (state = initialState.login, action) => {
  switch (action.type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        error: null,
        loading: true,
        loggedIn: false,
        user: null,
        success: false,
        token: null
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        success: true,
        token: action.payload.data.token,
        loggedIn: true,
        user: action.payload.data.loggedInUser
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload,
        user: null,
        success: false,
      };

    case LOGOUT:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default loginReducer;
