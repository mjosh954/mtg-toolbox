import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as gameActions } from '../redux/modules/game';
import { actions as modifyPlayerActions } from '../redux/modules/modifyPlayer';
import { Link } from 'react-router';
import Matchup from '../components/Matchup';
import Dice from '../components/Dice';

const mapStateToProps = (state) => ({
  game: state.game
});

const allActions = {
  ...gameActions,
  ...modifyPlayerActions
};

export class GameView extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    resetGame: PropTypes.func.isRequired,
    addLife: PropTypes.func.isRequired,
    toggleEditNameMode: PropTypes.func.isRequired,
    newRound: PropTypes.func.isRequired,
    startMatch: PropTypes.func.isRequired,
    stopMatch: PropTypes.func.isRequired,
    addMatchup: PropTypes.func.isRequired
  }

  render () {
    const {
      game,
      addLife,
      newRound,
      startMatch,
      stopMatch,
      addMatchup
    } = this.props;
    const AppBar = require('material-ui/lib/app-bar');
    const RaisedButton = require('material-ui/lib/raised-button');
    const GridList = require('material-ui/lib/grid-list/grid-list');
    const GridTile = require('material-ui/lib/grid-list/grid-tile');
    const matchups = game.matchups.map((matchup, index) => {
      return (
        <GridTile key={index} style={{height: '600px'}}>
          <Matchup
            mid={index}
            round={matchup.round}
            roundInProgress={matchup.roundInProgress}
            players={matchup.players}
            handleAddLife={addLife}
            handleRemoveLife={addLife}
            handleNextRound={() => newRound(index)}
            handleMatchStart={() => startMatch(index)}
            handleMatchStop={() => stopMatch(index)} />
          </GridTile>
      );
    });
    return (
      <div>
        <AppBar title={<Link to='/' style={{color: 'white', 'text-decoration': 'none'}}>MTG Toolbox</Link>} showMenuIconButton={false} style={{backgroundColor: '#262626'}} iconElementRight={<Dice />} />
        <div style={{textAlign: 'center', padding: '15px'}}>
          <RaisedButton label='Add a new matchup' onClick={() => addMatchup()} />
        </div>
        <GridList cols={3} cellHeight={400}>
          {matchups}
        </GridList>
      </div>
    );
  }
}

export default connect(mapStateToProps, allActions)(GameView);
