import Axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { SIGNUP_BEGIN, SIGNUP_SUCCESS, SIGNUP_ERROR } from './actionTypes';

export const signupBegin = () => ({ type: SIGNUP_BEGIN });

export const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signupError = error => ({
  type: SIGNUP_ERROR,
  payload: error,
});

export const signupRequest = user => async (dispatch) => {
  const url = 'https://stack-overflow-lite-app.herokuapp.com/api/v1/auth/signup';
  dispatch(signupBegin());

  return Axios.post(url, user)
    .then((response) => {
      dispatch(signupSuccess(response.data.user));
      toastr.success('Signup successful! Login to continue.');
    })
    .catch((error) => {
      dispatch(signupError(error.response.data.message));
      toastr.error('Something went wrong, contact your admin for assitance.');
    });
};
