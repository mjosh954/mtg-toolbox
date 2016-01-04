import { createAction, handleActions } from 'redux-actions';

// ------------------------------------
// Constants
// ------------------------------------
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
export const ADD_MATCHUP = 'ADD_MATCHUP';
export const UPDATE_PLAYER_MATCHUP_DETAILS = 'UPDATE_PLAYER_MATCHUP_DETAILS';
// ------------------------------------
// Actions
// ------------------------------------
export const resetGame = createAction(RESET_GAME);
export const addLife = createAction(ADD_LIFE);
export const addPoison = createAction(ADD_POISON);
export const toggleEditNameMode = createAction(TOGGLE_EDIT_NAME_MODE);
export const newRound = createAction(NEW_ROUND);
export const startMatch = createAction(START_MATCH);
export const stopMatch = createAction(STOP_MATCH);
export const addMatchup = createAction(ADD_MATCHUP);
export const updatePlayerMatchupDetails = createAction(UPDATE_PLAYER_MATCHUP_DETAILS);

export const actions = {
  resetGame,
  addLife,
  addPoison,
  toggleEditNameMode,
  newRound,
  startMatch,
  stopMatch,
  addMatchup
};

const initialState = {
  matchups: []
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [ADD_MATCHUP]: (state) => {
    return {
      ...state,
      matchups: [
        ...state.matchups,
        {
          round: 1,
          roundInProgress: false,
          settings: {
            startingHealthIndex: 0,
            startingHealthOptions: [20, 30, 40]
          },
          players: [{
            name: 'Player 1',
            life: 20,
            poisonCounter: 0
          }, {
            name: 'Player 2',
            life: 20,
            poisonCounter: 0
          }]
        }
      ]
    };
  },
  [NEW_ROUND]: (state, {payload}) => {
    return {
      ...state,
      matchups: state.matchups.map((matchup, mid) => {
        if (mid !== payload) {
          return matchup;
        }
        return {
          ...matchup,
          round: matchup.round + 1,
          players: matchup.players.map((player) => {
            return {
              ...player,
              life: matchup.settings.startingHealthOptions[matchup.settings.startingHealthIndex]
            };
          })
        };
      })
    };
  },
  [RESET_GAME]: (state) => {
    return initialState;
  },
  [START_MATCH]: (state, {payload}) => {
    return {
      ...state,
      matchups: state.matchups.map((matchup, mid) => {
        if (mid !== payload) {
          return matchup;
        }
        return {
          ...matchup,
          roundInProgress: true
        };
      })
    };
  },
  [STOP_MATCH]: (state, {payload}) => {
    return {
      ...state,
      matchups: state.matchups.map((matchup, mid) => {
        if (mid !== payload) {
          return matchup;
        }
        return {
          ...matchup,
          roundInProgress: false
        };
      })
    };
  },
  [ADD_LIFE]: (state, { payload }) => {
    return {
      ...state,
      matchups: state.matchups.map((matchup, index) => {
        if (index !== payload.mid) {
          return matchup;
        }
        return {
          ...matchup,
          players: matchup.players.map((player, playerIndex) => {
            if (playerIndex !== payload.playerIndex) {
              return player;
            }
            return {
              ...player,
              life: player.life + payload.value
            };
          })
        };
      })
    };
  },
  [ADD_POISON]: (state, { payload }) => {
    return {
      ...state,
      players: state.players.map((player, index) => {
        if (payload.index === index) {
          return Object.assign({}, player, {
            poisonCounter: player.poisonCounter + payload.value
          });
        }
        return player;
      })
    };
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
  },
  [UPDATE_PLAYER_MATCHUP_DETAILS]: (state, { payload }) => {
    return state;
  }
}, initialState);
