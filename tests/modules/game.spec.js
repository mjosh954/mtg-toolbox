import gameReducer, { actions as gameActions } from '../../src/redux/modules/game';

describe('game.spec', () => {
  describe('actions', () => {
    describe('addMatchup', () => {
      it('should return a matchup action', () => {
        const expectedResult = {
          type: 'ADD_MATCHUP',
          payload: undefined
        };
        const result = gameActions.addMatchup();
        expect(result).to.deep.equal(expectedResult);
      });
    });

    describe('newRound', () => {
      it('should return a new round action', () => {
        const expectedResult = {
          type: 'NEW_ROUND',
          payload: 0
        };
        const result = gameActions.newRound(0);
        expect(result).to.deep.equal(expectedResult);
      });
    });
  });

  describe('game.actions.spec', () => {
    it('should return a valid addMatchup action', () => {
      expect(gameActions.addMatchup()).to.deep.equal({
        type: 'ADD_MATCHUP',
        payload: undefined
      });
    });
  });

  describe('game.reducer.spec', () => {
    it('should return initial state when no action is passed to reducer', () => {
      const initialState = {matchups: []};
      const result = gameReducer(initialState, {});
      expect(result).to.deep.equal({
        matchups: []
      });
    });

    it('should add new matchup', () => {
      const initialState = {matchups: []};
      const result = gameReducer(initialState, {type: 'ADD_MATCHUP'});
      expect(result).to.deep.equal({
        matchups: [
          {
            round: 1,
            roundInProgress: false,
            settings: {
              startingHealthIndex: 0,
              startingHealthOptions: [20, 30, 40]
            },
            players: [
              {
                name: 'Player 1',
                life: 20,
                poisonCounter: 0
              }, {
                name: 'Player 2',
                life: 20,
                poisonCounter: 0
              }
            ]
          }
        ]
      });
    });
    it('should increment the round', () => {
      const initialState = {
        matchups: [
          {
            round: 1,
            roundInProgress: false,
            settings: {
              startingHealthIndex: 0,
              startingHealthOptions: [20, 30, 40]
            },
            players: [
              {
                name: 'Player 1',
                life: 20,
                poisonCounter: 0
              }, {
                name: 'Player 2',
                life: 20,
                poisonCounter: 0
              }
            ]
          }
        ]
      };
      const result = gameReducer(initialState, {type: 'NEW_ROUND', payload: 0});
      expect(result).to.deep.equal({
        matchups: [
          {
            round: 2,
            roundInProgress: false,
            settings: {
              startingHealthIndex: 0,
              startingHealthOptions: [20, 30, 40]
            },
            players: [
              {
                name: 'Player 1',
                life: 20,
                poisonCounter: 0
              }, {
                name: 'Player 2',
                life: 20,
                poisonCounter: 0
              }
            ]
          }
        ]
      });
    });

    it('should finish the rest of the reducer spec', () => {
      // TODO
    });
  });
});
