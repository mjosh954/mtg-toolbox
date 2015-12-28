import React, { PropTypes } from 'react';
import MatchupMenu from './MatchupMenu';
import Player from './Player';
export default class Matchup extends React.Component {
  static propTypes = {
    players: PropTypes.array,
    round: PropTypes.number,
    roundInProgress: PropTypes.bool,
    handleAddLife: PropTypes.func,
    handleNextRound: PropTypes.func,
    handleAddPlayer: PropTypes.func,
    handleMatchStart: PropTypes.func,
    handleMatchStop: PropTypes.func
  }
  canAddNewPlayers (playerCount, roundInProgress) {
    if (playerCount < 8 && !roundInProgress) {
      return true;
    }
    return false;
  }

  getRoundControlIcon (roundInProgress) {
    if (!roundInProgress) {
      return <i className='fa fa-play' onClick={() => this.props.handleMatchStart()} style={{ color: 'lime', cursor: 'pointer' }} />;
    }
    return <i className='fa fa-stop' onClick={() => this.props.handleMatchStop()} style={{ color: 'red', cursor: 'pointer' }} />;
  }

  constructor (props) {
    super(props);
    this.canAddNewPlayers = this.canAddNewPlayers.bind(this);
    this.getRoundControlIcon = this.getRoundControlIcon.bind(this);
  }

  render () {
    const Card = require('material-ui/lib/card/card');
    const AppBar = require('material-ui/lib/app-bar');
    const {
      players,
      round,
      handleAddLife,
      handleNextRound,
      handleAddPlayer,
      roundInProgress
    } = this.props;
    const playerList = players.map((player, index) => {
      return (
          <Player key={index} player={player}
            roundInProgress={roundInProgress}
            handleAddLife={() => handleAddLife({index, value: 1})}
            handleRemoveLife={() => handleAddLife({index, value: -1})} />
      );
    });
    return (
      <Card style={{margin: '20px', paddingBottom: '20px'}}>
        <AppBar style={{backgroundColor: '#4e4e4e', textAlign: 'center'}}
          title={<div>{this.getRoundControlIcon(this.props.roundInProgress)}&nbsp;Round {round}</div>}
          showMenuIconButton={false}
          iconElementRight={
            <MatchupMenu
              roundInProgress={roundInProgress}
              handleNextRoundEvent={handleNextRound}
              handleAddPlayerEvent={() => handleAddPlayer(`Player ${players.length + 1}`)}
              disableAddPlayer={!this.canAddNewPlayers(players.length, roundInProgress)} />
          }/>
        <div style={{textAlign: 'center'}}>
          {playerList}
        </div>
      </Card>
    );
  }
}
