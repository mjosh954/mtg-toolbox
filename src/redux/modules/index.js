import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import game from './game';
import signup from './signup';
import draft from './draft';
import modifyPlayer from './modifyPlayer';

export default combineReducers({
  game,
  signup,
  modifyPlayer,
  draft,
  router: routeReducer
});
