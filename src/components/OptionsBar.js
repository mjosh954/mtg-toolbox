import React, { PropTypes } from 'react';

export default class OptionsBar extends React.Component {
  static propTypes = {
    handleResetGame: PropTypes.func.isRequired,
    handleAddPlayer: PropTypes.func.isRequired,
    disableNewPlayer: PropTypes.bool
  }

  render () {
    const {
      disableNewPlayer,
      handleResetGame,
      handleAddPlayer
    } = this.props;

    return (
      <nav className='navbar navbar-default'>
        <div className='container' style={{paddingTop: '5px'}}>
          <div className='row'>
            <div className='col-md-12'>
              <button className='btn btn-primary' onClick={handleResetGame}>Reset Game</button> &nbsp;
              <button disabled={disableNewPlayer} className='btn btn-default' onClick={handleAddPlayer}>Add Player</button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
