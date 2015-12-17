import React from 'react';
import Player from '../components/Player';
import OptionsBar from '../components/OptionsBar';
import { connect } from 'react-redux';
import { actions as gameActions } from '../redux/modules/game';

const mapStateToProps = (state) => ({
  game: state.game
});

export class GameView extends React.Component {
  static propTypes = {
    game: React.PropTypes.object.isRequired,
    addPlayer: React.PropTypes.func.isRequired,
    resetGame: React.PropTypes.func.isRequired,
    incrementLife: React.PropTypes.func.isRequired,
    decrementLife: React.PropTypes.func.isRequired,
    toggleEditNameMode: React.PropTypes.func.isRequired,
    newRound: React.PropTypes.func.isRequired
  }

  render () {
    const { game,
      incrementLife,
      decrementLife,
      resetGame,
      addPlayer,
      toggleEditNameMode,
      newRound
    } = this.props;

    const playerList = game.players.map((player, index) => {
      return (
        <div key={index} className='col-md-6' >
          <div>
            <Player name={player.name} life={player.life}
              editNameMode={player.editName}
              handleEditNameModeToggle={() => toggleEditNameMode(index)}
              handleIncrementLife={() => incrementLife(index)}
              handleDecrementLife={() => decrementLife(index)} />
          </div>
        </div>
      );
    });

    return (
      <div className='container-fluid' style={{paddingLeft: 0, paddingRight: 0}}>
        <OptionsBar disableNewPlayer={playerList.length === 8}
          handleResetGame={() => resetGame()}
          handleAddPlayer={() => addPlayer()}
          />
        <div className='container' style={{backgroundColor: '#f8f8f8', borderRadius: '5px'}}>
          <div className='row'>
            <div className='container'>
              <h3>Round {game.round}</h3>
              <button className='btn btn-primary' onClick={() => newRound()}>New Round</button>
            </div>
          </div>
          <div className='row'>
            {playerList}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, gameActions)(GameView);
