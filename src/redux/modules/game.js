import { createAction, handleActions } from 'redux-actions';

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_PLAYER = 'ADD_PLAYER';
export const NEW_ROUND = 'NEW_ROUND';
export const RESET_GAME = 'RESET_GAME';
export const ADD_LIFE = 'ADD_LIFE';
export const ADD_POISON = 'ADD_POISON';
export const TOGGLE_EDIT_NAME_MODE = 'TOGGLE_EDIT_NAME_MODE';
export const ROUND_START = 'ROUND_START';
export const ROUND_IN_PROGRESS = 'ROUND_IN_PROGRESS';
export const ROUND_END = 'ROUND_END';
export const START_MATCH = 'START_MATCH';
export const STOP_MATCH = 'STOP_MATCH';
// ------------------------------------
// Actions
// ------------------------------------
export const addPlayer = createAction(ADD_PLAYER, (value = 'player_name') => value);
export const resetGame = createAction(RESET_GAME);
export const addLife = createAction(ADD_LIFE);
export const addPoison = createAction(ADD_POISON);
export const toggleEditNameMode = createAction(TOGGLE_EDIT_NAME_MODE);
export const newRound = createAction(NEW_ROUND);
export const startMatch = createAction(START_MATCH);
export const stopMatch = createAction(STOP_MATCH);

export const actions = {
  addPlayer,
  resetGame,
  addLife,
  addPoison,
  toggleEditNameMode,
  newRound,
  startMatch,
  stopMatch
};

const initialState = {
  round: 1,
  roundInProgress: false,
  players: [{
    name: 'Player 1',
    life: 20,
    poisonCounter: 0,
    editName: false
  }, {
    name: 'Player 2',
    life: 20,
    poisonCounter: 0,
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
        life: 20,
        poisonCounter: 0
      }]
    });
  },
  [NEW_ROUND]: (state) => {
    return Object.assign({}, state, {
      round: state.round + 1,
      roundState: ROUND_START,
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
  [START_MATCH]: (state) => {
    return { ...state, roundInProgress: true };
    // return Object.assign({}, state, {
    //   roundState: ROUND_IN_PROGRESS
    // });
  },
  [STOP_MATCH]: (state) => {
    return { ...state, roundInProgress: false };
    // return Object.assign({}, state, {
    //   roundState: ROUND_END
    // });
  },
  [ADD_LIFE]: (state, { payload }) => {
    return Object.assign({}, state, {
      players: state.players.map((player, index) => {
        if (payload.index === index) {
          return Object.assign({}, player, {
            life: player.life + payload.value
          });
        }
        return player;
      })
    });
  },
  [ADD_POISON]: (state, { payload }) => {
    return Object.assign({}, state, {
      players: state.players.map((player, index) => {
        if (payload.index === index) {
          return Object.assign({}, player, {
            poisonCounter: player.poisonCounter + payload.value
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
