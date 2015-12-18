import React, { PropTypes } from 'react';

export default class OptionsBar extends React.Component {

  static propTypes = {
    handleResetGame: PropTypes.func.isRequired,
    handleAddPlayer: PropTypes.func.isRequired,
    disableNewPlayer: PropTypes.bool
  }

  constructor (props) {
    super(props);
    this.state = {
      showAddPlayerDialog: false
    };
    this.toggleAddPlayerDialog = this.toggleAddPlayerDialog.bind(this);
  }

  toggleAddPlayerDialog (close) {
    if (close) {
      this.setState({ showAddPlayerDialog: false });
      return;
    }
    this.setState({ showAddPlayerDialog: !this.state.showAddPlayerDialog });
  }

  render () {
    const AppBar = require('material-ui/lib/app-bar');
    const Dialog = require('material-ui/lib/dialog');
    const FlatButton = require('material-ui/lib/flat-button');
    const {
      disableNewPlayer,
      handleResetGame,
      handleAddPlayer
    } = this.props;
    const addPlayerActions = [
      { text: 'Cancel' },
      { text: 'Add' }
    ];

    return (
      <AppBar title='MTG Toolbox' showMenuIconButton={false} iconElementRight={
        <div>
          <FlatButton onClick={handleResetGame} label='Reset Matchup' /> &nbsp;
          <FlatButton disabled={disableNewPlayer} onClick={handleAddPlayer} label='Add Player' />&nbsp;
          <FlatButton onClick={() => this.toggleAddPlayerDialog()} label='Add Player Dialog' />
        </div>
      }>

        <Dialog
          actions={addPlayerActions}
          open={this.state.showAddPlayerDialog}
          onRequestClose={() => this.toggleAddPlayerDialog(true)} >
          Player
        </Dialog>
        </AppBar>
    );
  }
}
