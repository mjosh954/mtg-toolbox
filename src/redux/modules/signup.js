import { createAction, handleActions } from 'redux-actions';
import { addNewDraftPlayer } from './draft';

export const EDIT_NEW_PLAYER_NAME = 'EDIT_NEW_PLAYER_NAME';
export const ADD_NEW_SIGNUP_PLAYER = 'ADD_NEW_SIGNUP_PLAYER';
export const CLEAR_NEW_PLAYER_NAME_TEXT = 'CLEAR_NEW_PLAYER_NAME_TEXT';
export const TOGGLE_SHOW_ADD_PLAYER_MODAL = 'TOGGLE_SHOW_ADD_PLAYER_MODAL';

export const editNewName = createAction(EDIT_NEW_PLAYER_NAME);
export const clearNewNameText = createAction(CLEAR_NEW_PLAYER_NAME_TEXT);
export const toggleShowAddPlayerModal = createAction(TOGGLE_SHOW_ADD_PLAYER_MODAL);

export const addNewSignupPlayer = () => {
  return (dispatch, getState) => {
    // check for dupes and add error message
    dispatch(addNewDraftPlayer(getState().signup.newPlayerName));
    dispatch(clearNewNameText());
  };
};

export const actions = {
  editNewName,
  addNewSignupPlayer,
  toggleShowAddPlayerModal
};

const initialState = {
  newPlayerName: '',
  showAddPlayerModal: false,
  errorMessage: ''
};

export default handleActions({
  [EDIT_NEW_PLAYER_NAME]: (state, {payload}) => {
    return {
      ...state,
      newPlayerName: payload
    };
  },
  [CLEAR_NEW_PLAYER_NAME_TEXT]: (state) => {
    return {
      ...state,
      newPlayerName: ''
    };
  },
  [TOGGLE_SHOW_ADD_PLAYER_MODAL]: (state) => {
    return {
      ...state,
      newPlayerName: '',
      showAddPlayerModal: !state.showAddPlayerModal
    };
  }
}, initialState);
