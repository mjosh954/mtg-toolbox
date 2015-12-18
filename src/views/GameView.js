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
    newRound: React.PropTypes.func.isRequired
  }

  render () {
    const { game,
      addLife,
      newRound,
      addPlayer
    } = this.props;
    const AppBar = require('material-ui/lib/app-bar');

    return (
      <div>
        <AppBar title={<Link to='/' style={{color: 'white'}}>MTG Toolbox</Link>} showMenuIconButton={false} style={{backgroundColor: '#262626'}} iconElementRight={<Dice />} />
        <Matchup round={game.round}
          players={game.players}
          handleAddLife={addLife}
          handleRemoveLife={addLife}
          handleNextRound={newRound}
          handleAddPlayer={addPlayer} />
      </div>
    );
  }
}

export default connect(mapStateToProps, gameActions)(GameView);
