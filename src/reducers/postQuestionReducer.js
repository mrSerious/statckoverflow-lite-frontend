import { POST_QUESTION_BEGIN, POST_QUESTION_SUCCESS, POST_QUESTION_ERROR } from '../actions/actionTypes';

import initialState from './initialState';

const postQuestionReducer = (state = initialState.newQuestion, action) => {
  switch (action.type) {
    case POST_QUESTION_BEGIN:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case POST_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        id: action.payload,
        success: true,
      };

    case POST_QUESTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };

    default:
      return state;
  }
};

export default postQuestionReducer;
