import React from 'react';
import Player from './Player';

export default class MatchupPlayerList extends React.Component {
  static propTypes = {
    players: React.PropTypes.array,
    handleAddLife: React.PropTypes.func,
    mid: React.PropTypes.number,
    roundInProgress: React.PropTypes.bool
  }

  render () {
    const {
      players,
      mid,
      roundInProgress,
      handleAddLife } = this.props;
    const playerList = players.map((player, playerIndex) => {
      return (
          <Player key={playerIndex} player={player}
            roundInProgress={roundInProgress}
            handleAddLife={() => handleAddLife({mid, playerIndex, value: 1})}
            handleRemoveLife={() => handleAddLife({mid, playerIndex, value: -1})} />
      );
    });
    return (
      <div style={{textAlign: 'center'}}>
        {playerList}
      </div>
  );
  }
}
