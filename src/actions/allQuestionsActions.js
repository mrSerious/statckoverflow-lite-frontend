import Axios from 'axios';
import { ALL_QUESTIONS_BEGIN, ALL_QUESTIONS_SUCCESS } from './actionTypes';

export const allQuestionsBegin = () => ({ type: ALL_QUESTIONS_BEGIN });

export const allQuestionsSuccess = questions => ({
  type: ALL_QUESTIONS_SUCCESS,
  payload: questions,
});

export const allQuestionsRequest = () => (dispatch) => {
  const url = 'https://stack-overflow-lite-app.herokuapp.com/api/v1/questions';

  dispatch(allQuestionsBegin());

  return Axios.get(url)
    .then((response) => {
      dispatch(allQuestionsSuccess(response.data.data.questions));
    })
    .catch(() => { /* do nothing */ });
};
