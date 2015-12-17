import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import game from './game';

export default combineReducers({
  game,
  router: routeReducer
});
