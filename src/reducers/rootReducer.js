import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  toastr: toastrReducer,
  search: searchReducer,
  signup: signupReducer,
  login: loginReducer
});

export default rootReducer;
