import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import signupReducer from './signupReducer';

const rootReducer = combineReducers({
  toastr: toastrReducer,
  search: searchReducer,
  signup: signupReducer
});

export default rootReducer;
