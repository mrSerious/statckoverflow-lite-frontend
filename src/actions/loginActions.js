import Axios from 'axios';
import { toastr } from 'react-redux-toastr';
import {
  LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT
} from './actionTypes';
import initialState from '../reducers/initialState';

const loginBegin = () => ({ type: LOGIN_BEGIN });

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const loginError = error => ({
  type: LOGIN_ERROR,
  payload: error,
});

const loginRequest = user => async (dispatch) => {
  const url = 'https://stack-overflow-lite-app.herokuapp.com/api/v1/auth/login';
  dispatch(loginBegin());

  return Axios.post(url, user)
    .then((response) => {
      dispatch(loginSuccess(response.data));
      toastr.success('You are now logged in.');
    })
    .catch((error) => {
      dispatch(loginError(error.response.data.message));
      toastr.error(('There was an error, please try again.'));
    });
};

const logoutRequest = () => ({ type: LOGOUT, payload: initialState.login });

export {
  loginBegin,
  loginSuccess,
  loginError,
  loginRequest,
  logoutRequest,
};
