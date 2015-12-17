import { createAction, handleActions } from 'redux-actions';

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_PLAYER = 'ADD_PLAYER';
export const NEW_ROUND = 'NEW_ROUND';
export const RESET_GAME = 'RESET_GAME';
export const INCREMENT_LIFE = 'INCREMENT_LIFE';
export const DECREMENT_LIFE = 'DECREMENT_LIFE';
export const TOGGLE_EDIT_NAME_MODE = 'TOGGLE_EDIT_NAME_MODE';
// ------------------------------------
// Actions
// ------------------------------------
export const addPlayer = createAction(ADD_PLAYER, (value = 'player_name') => value);
export const resetGame = createAction(RESET_GAME);
export const incrementLife = createAction(INCREMENT_LIFE);
export const decrementLife = createAction(DECREMENT_LIFE);
export const toggleEditNameMode = createAction(TOGGLE_EDIT_NAME_MODE);
export const newRound = createAction(NEW_ROUND);

export const actions = {
  addPlayer,
  resetGame,
  incrementLife,
  decrementLife,
  toggleEditNameMode,
  newRound
};

const initialState = {
  round: 1,
  players: [{
    name: 'Player 1',
    life: 20,
    editName: false
  }, {
    name: 'Player 2',
    life: 20,
    editName: false
  }]
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [ADD_PLAYER]: (state, { payload }) => {
    return Object.assign({}, state, {
      players: [...state.players, {
        name: payload,
        life: 20
      }]
    });
  },
  [NEW_ROUND]: (state) => {
    return Object.assign({}, state, {
      round: state.round + 1,
      players: state.players.map((player) => {
        return {
          name: player.name,
          life: 20
        };
      })
    });
  },
  [RESET_GAME]: (state) => {
    return initialState;
  },
  [INCREMENT_LIFE]: (state, { payload }) => {
    return Object.assign({}, state, {
      players: state.players.map((player, index) => {
        if (payload === index) {
          return Object.assign({}, player, {
            life: player.life + 1
          });
        }
        return player;
      })
    });
  },
  [DECREMENT_LIFE]: (state, { payload }) => {
    return Object.assign({}, state, {
      players: state.players.map((player, index) => {
        if (payload === index) {
          return Object.assign({}, player, {
            life: player.life - 1
          });
        }
        return player;
      })
    });
  },
  [TOGGLE_EDIT_NAME_MODE]: (state, { payload }) => {
    return Object.assign({}, state, {
      players: state.players.map((player, index) => {
        if (payload === index) {
          return Object.assign({}, player, {
            editName: !player.editName
          });
        }
        return player;
      })
    });
  }
}, initialState);
