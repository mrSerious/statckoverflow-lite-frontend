import Axios from 'axios';
import { SEARCH_BEGIN, SEARCH_SUCCESS, SEARCH_ERROR } from './actionTypes';

const searchBegin = () => ({
  type: SEARCH_BEGIN,
  loading: true
});

const searchSuccess = results => ({
  type: SEARCH_SUCCESS,
  payload: results,
  loading: false
});

const searchError = () => ({
  type: SEARCH_ERROR,
  loading: false
});

const searchRequest = searchTerm => (dispatch) => {
  const url = `https://stack-overflow-lite-app.herokuapp.com/api/v1/questions?q=${searchTerm}`;
  dispatch(searchBegin());

  return Axios.get(url)
    .then(json => dispatch(searchSuccess(json.data.data.questions)))
    .catch(() => dispatch(searchError()));
};

export {
  searchBegin,
  searchSuccess,
  searchError,
  searchRequest,
};
