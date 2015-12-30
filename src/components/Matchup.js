import React, { PropTypes } from 'react';
import MatchupMenu from './MatchupMenu';
import MatchupPlayerList from './MatchupPlayerList';

export default class Matchup extends React.Component {
  static propTypes = {
    players: PropTypes.array,
    round: PropTypes.number,
    roundInProgress: PropTypes.bool,
    mid: PropTypes.number,
    handleAddLife: PropTypes.func,
    handleNextRound: PropTypes.func,
    handleMatchStart: PropTypes.func,
    handleMatchStop: PropTypes.func,
    handleModifyPlayerClick: PropTypes.func
  }
  getRoundControlIcon (roundInProgress) {
    if (!roundInProgress) {
      return <i className='fa fa-play' onClick={() => this.props.handleMatchStart()} style={{ color: 'lime', cursor: 'pointer' }} />;
    }
    return <i className='fa fa-stop' onClick={() => this.props.handleMatchStop()} style={{ color: 'red', cursor: 'pointer' }} />;
  }

  constructor (props) {
    super(props);
    this.getRoundControlIcon = this.getRoundControlIcon.bind(this);
  }

  render () {
    const Card = require('material-ui/lib/card/card');
    const CardHeader = require('material-ui/lib/card/card-header');
    const {
      players,
      round,
      handleAddLife,
      handleNextRound,
      roundInProgress,
      handleModifyPlayerClick,
      mid
    } = this.props;
    return (
      <Card style={{margin: '20px', paddingBottom: '20px'}}>
        <CardHeader
          style={{backgroundColor: '#4e4e4e', textAlign: 'center'}}
          avatar={<div style={{display: 'none'}}></div>}
          title={
            <div>
              <h2 style={{margin: 0, color: 'white'}}>
                <span style={{marginRight: '5px'}}>{this.getRoundControlIcon(this.props.roundInProgress)}</span>Round {round}
                <MatchupMenu roundInProgress={roundInProgress}
                  handleNextRoundEvent={handleNextRound} />
              </h2>
            </div>
          }/>
        <MatchupPlayerList players={players} mid={mid} handleAddLife={handleAddLife} handleModifyPlayerClick={handleModifyPlayerClick}/>
      </Card>
    );
  }
}
