import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import game from './game';
import signup from './signup';
import draft from './draft';

export default combineReducers({
  game,
  signup,
  draft,
  router: routeReducer
});
