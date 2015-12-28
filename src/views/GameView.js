import React from 'react';
import { connect } from 'react-redux';
import { actions as gameActions } from '../redux/modules/game';
import { Link } from 'react-router';
import Matchup from '../components/Matchup';
import Dice from '../components/Dice';

const mapStateToProps = (state) => ({
  game: state.game
});

export class GameView extends React.Component {
  static propTypes = {
    game: React.PropTypes.object.isRequired,
    addPlayer: React.PropTypes.func.isRequired,
    resetGame: React.PropTypes.func.isRequired,
    addLife: React.PropTypes.func.isRequired,
    toggleEditNameMode: React.PropTypes.func.isRequired,
    newRound: React.PropTypes.func.isRequired,
    startMatch: React.PropTypes.func.isRequired,
    stopMatch: React.PropTypes.func.isRequired
  }

  render () {
    const { game,
      addLife,
      newRound,
      addPlayer,
      startMatch,
      stopMatch
    } = this.props;
    const AppBar = require('material-ui/lib/app-bar');

    return (
      <div>
        <AppBar title={<Link to='/' style={{color: 'white', 'text-decoration': 'none'}}>MTG Toolbox</Link>} showMenuIconButton={false} style={{backgroundColor: '#262626'}} iconElementRight={<Dice />} />
        <div style={{margin: 'auto', width: '600px', display: 'block'}}>
          <Matchup round={game.round}
            roundInProgress={game.roundInProgress}
            players={game.players}
            handleAddLife={addLife}
            handleRemoveLife={addLife}
            handleNextRound={newRound}
            handleAddPlayer={addPlayer}
            handleMatchStart={startMatch}
            handleMatchStop={stopMatch} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, gameActions)(GameView);
