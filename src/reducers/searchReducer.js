import { SEARCH_BEGIN, SEARCH_SUCCESS, SEARCH_ERROR } from '../actions/actionTypes';
import initialState from './initialState';

const { search } = initialState;

const searchReducer = (state = search, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_BEGIN:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        results: payload,
        success: true,
      };

    case SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        results: [],
        success: false,
      };

    default:
      return state;
  }
};

export default searchReducer;
