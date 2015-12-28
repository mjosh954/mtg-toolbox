import React from 'react';

export default class AddPlayerForm extends React.Component {
  static propTypes = {
    handleNewPlayerNameChange: React.PropTypes.func.isRequired,
    handleAddNewSignupPlayer: React.PropTypes.func.isRequired,
    handleToggle: React.PropTypes.func.isRequired,
    signupModel: React.PropTypes.object.isRequired
  }

  render () {
    const TextField = require('material-ui/lib/text-field');
    const RaisedIcon = require('material-ui/lib/raised-button');
    const FlatIcon = require('material-ui/lib/flat-button');
    const Dialog = require('material-ui/lib/dialog');
    const {
      handleNewPlayerNameChange,
      handleAddNewSignupPlayer,
      handleToggle,
      signupModel: {
        newPlayerName,
        showAddPlayerModal,
        errorMessage
      }
    } = this.props;
    const actions = [
      <FlatIcon label='Close' primary onTouchTap={handleToggle} style={{color: 'red'}}/>,
      <RaisedIcon label='Add' disabled={newPlayerName.length === 0} secondary labelPosition='after'
        onTouchTap={(e) => { handleAddNewSignupPlayer(); }} />
    ];
    return (
      <Dialog
        actions={actions}
        title='Add a New Player'
        open={showAddPlayerModal}
        onRequestClose={() => handleToggle()}>
        <div style={{padding: '15px'}}>
          <TextField hintText='John Doe'
            hintStyle={{color: 'grey'}}
            underlineStyle={{borderColor: 'black'}}
            underlineFocusStyle={{borderColor: 'green'}}
            floatingLabelText='Player Name'
            floatingLabelStyle={{color: 'black'}}
            onChange={(e) => handleNewPlayerNameChange(e.target.value)}
            style={{textAlign: 'left'}}
            errorText={errorMessage.length > 0 ? errorMessage : null}
            value={newPlayerName} />
        </div>
      </Dialog>
    );
  }
}
