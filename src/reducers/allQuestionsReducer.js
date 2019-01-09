import { ALL_QUESTIONS_BEGIN, ALL_QUESTIONS_SUCCESS } from '../actions/actionTypes';
import initialState from './initialState';

const allQuestionsReducer = (state = initialState.questions, action) => {
  switch (action.type) {
    case ALL_QUESTIONS_BEGIN:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case ALL_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: action.payload,
        success: true,
      };

    default:
      return state;
  }
};

export default allQuestionsReducer;
