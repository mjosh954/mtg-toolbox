import React, { PropTypes } from 'react';
import MatchupMenu from './MatchupMenu';
import Player from './Player';
export default class Matchup extends React.Component {
  static propTypes = {
    players: PropTypes.array,
    round: PropTypes.number,
    handleAddLife: PropTypes.func,
    handleNextRound: PropTypes.func,
    handleAddPlayer: PropTypes.func
  }
  render () {
    const Card = require('material-ui/lib/card/card');
    const AppBar = require('material-ui/lib/app-bar');
    const {
      players,
      round,
      handleAddLife,
      handleNextRound,
      handleAddPlayer
    } = this.props;
    const playerList = players.map((player, index) => {
      return (
          <Player key={index} name={player.name} life={player.life}
            editNameMode={player.editName}
            handleAddLife={() => handleAddLife({index, value: 1})}
            handleRemoveLife={() => handleAddLife({index, value: -1})} />
      );
    });
    return (
      <Card style={{width: '500px', margin: '20px', paddingBottom: '20px'}}>
        <AppBar style={{backgroundColor: '#4e4e4e', textAlign: 'center'}} title={`Round ${round}`} showMenuIconButton={false}
          iconElementRight={
            <MatchupMenu
              handleNextRoundEvent={handleNextRound}
              handleAddPlayerEvent={handleAddPlayer}
              disableAddPlayer={players.length >= 8}
              />
          }/>
        <div style={{textAlign: 'center'}}>
          {playerList}
        </div>
      </Card>
    );
  }
}
