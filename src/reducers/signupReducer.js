import { SIGNUP_BEGIN, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actions/actionTypes';
import initialState from './initialState';

const signupReducer = (state = initialState.signup, action) => {
  switch (action.type) {
    case SIGNUP_BEGIN:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        user: action.payload,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        user: null,
      };

    default:
      return state;
  }
};

export default signupReducer;
