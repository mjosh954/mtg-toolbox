import { createAction, handleActions } from 'redux-actions';
export const TOGGLE_20_SIDED_DIE = 'TOGGLE_20_SIDED_DIE';
export const ADD_DICE_RESULT = 'ADD_DICE_RESULT';
export const CLEAR_DICE_RESULTS = 'CLEAR_DICE_RESULTS';

export const toggle20SidedDie = createAction(TOGGLE_20_SIDED_DIE);
export const addDiceResult = createAction(ADD_DICE_RESULT);
export const clearDiceResults = createAction(CLEAR_DICE_RESULTS);

export const actions = {
  toggle20SidedDie,
  addDiceResult,
  clearDiceResults
};

const initialState = {
  settings: {
    enable20SidedDie: false
  },
  isRolling: false,
  resultHistory: []
};

export default handleActions({
  [TOGGLE_20_SIDED_DIE]: (state) => {
    return {
      ...state,
      settings: {
        ...state.settings,
        enable20SidedDie: !state.settings.enable20SidedDie
      }
    };
  },
  [ADD_DICE_RESULT]: (state, {payload}) => {
    return {
      ...state,
      resultHistory: [
        ...state.resultHistory,
        {
          value: payload,
          diceSides: state.settings.enable20SidedDie ? 20 : 6
        }
      ]
    };
  },
  [CLEAR_DICE_RESULTS]: (state) => {
    return {
      ...state,
      resultHistory: []
    };
  }
}, initialState);
