import { createAction, handleActions } from 'redux-actions';
import { immutableShuffle } from '../utils/moduleUtils';

export const ADD_NEW_DRAFT_PLAYER = 'ADD_NEW_DRAFT_PLAYER';
export const RANDOMIZE_MATCHUPS = 'RANDOMIZE_MATCHUPS';
export const RANDOMIZE_SEAT_ASSIGNMENT = 'RANDOMIZE_SEAT_ASSIGNMENT';

export const addNewDraftPlayer = createAction(ADD_NEW_DRAFT_PLAYER);
export const randomizeSeatAssignment = createAction(RANDOMIZE_SEAT_ASSIGNMENT);

function generateRandomPairs (players, maxPairSize) {
  let shuffledPlayers = immutableShuffle(players);
  const length = shuffledPlayers.length;
  let pairs = [];

  for (let i = 0; i < length; i += 2) {
    if (i + 1 >= length) {
      pairs.push([shuffledPlayers[i]]);
    } else {
      pairs.push([shuffledPlayers[i], shuffledPlayers[i + 1]]);
    }
  }

  return pairs;
}

const initialState = {
  players: [],
  matchups: [],
  seats: []
};

export default handleActions({
  [ADD_NEW_DRAFT_PLAYER]: (state, {payload}) => {
    const players = state.players;
    return {
      ...state,
      players: [
        ...players,
        {
          name: payload,
          dateAdded: new Date()
        }
      ]
    };
  },
  [RANDOMIZE_MATCHUPS]: (state) => {
    const players = [...state.players];
    return {
      ...state,
      matchups: generateRandomPairs(players, 2)
    };
  },
  [RANDOMIZE_SEAT_ASSIGNMENT]: (state) => {
    return immutableShuffle(state.players);
  }
}, initialState);
