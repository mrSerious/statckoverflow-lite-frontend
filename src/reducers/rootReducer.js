import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import allQuestionsReducer from './allQuestionsReducer';

const rootReducer = combineReducers({
  toastr: toastrReducer,
  search: searchReducer,
  signup: signupReducer,
  login: loginReducer,
  questions: allQuestionsReducer
});

export default rootReducer;
