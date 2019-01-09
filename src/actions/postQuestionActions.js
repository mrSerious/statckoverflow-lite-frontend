import Axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { POST_QUESTION_BEGIN, POST_QUESTION_SUCCESS, POST_QUESTION_ERROR } from './actionTypes';
import { store } from '../store/store';

export const postQuestionBegin = () => ({ type: POST_QUESTION_BEGIN });

export const postQuestionSuccess = id => ({
  type: POST_QUESTION_SUCCESS,
  payload: id,
});

export const postQuestionError = error => ({
  type: POST_QUESTION_ERROR,
  payload: error,
});

export const requestPostQuestion = question => async (dispatch) => {
  const url = 'https://stack-overflow-lite-app.herokuapp.com/api/v1/questions';
  const { token } = store.getState().login;
  dispatch(postQuestionBegin());

  return Axios.post(url, question, { headers: { 'x-access-token': token } })
    .then((response) => {
      if (response.error) {
        toastr.success('Something went wrong. Please try again.');
      } else {
        dispatch(postQuestionSuccess(response.data.question.questionid));
        toastr.success('Your question was added successfully');
      }
    })
    .catch(error => dispatch(postQuestionError(error.response.data.message)));
};
