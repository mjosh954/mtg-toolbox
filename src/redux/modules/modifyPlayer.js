import { createAction, handleActions } from 'redux-actions';
import { updatePlayerMatchupDetails } from './game';

export const OPEN_MODIFY_PLAYER_MODAL = 'OPEN_MODIFY_PLAYER_MODAL';
export const CLOSE_MODIFY_PLAYER_MODAL = 'CLOSE_MODIFY_PLAYER_MODAL';
export const UPDATE_MATCHUP_PLAYER = 'UPDATE_MATCHUP_PLAYER';

export const openModifyPlayerModal = createAction(OPEN_MODIFY_PLAYER_MODAL);
export const closeModifyPlayerModal = createAction(CLOSE_MODIFY_PLAYER_MODAL);

export const updateMatchupPlayer = () => {
  return (dispatch, getState) => {
    dispatch(updatePlayerMatchupDetails(getState().modifyPlayer));
    dispatch(closeModifyPlayerModal());
  };
};

export const actions = {
  updateMatchupPlayer
};

const initialState = {
  showModal: false,
  playerName: ''
};

export default handleActions({
  [OPEN_MODIFY_PLAYER_MODAL]: (state, {payload}) => {
    return {
      ...state,
      showModal: true,
      playerName: payload.playerName
    };
  },
  [CLOSE_MODIFY_PLAYER_MODAL]: (state) => {
    return initialState;
  }
}, initialState);
