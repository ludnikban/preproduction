import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { users, usersHasErrored, usersIsLoading } from './users';

export default combineReducers({
  users,
  usersHasErrored,
  usersIsLoading,
  routing: routerReducer
});