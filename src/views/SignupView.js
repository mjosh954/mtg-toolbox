import React from 'react';
import { connect } from 'react-redux';
import AddDraftPlayerModal from '../components/AddDraftPlayerModal';
import PlayerSignupList from '../components/PlayerSignupList';
import { actions as signupActions } from '../redux/modules/signup';

const mapStateToProps = (state) => ({
  signup: state.signup,
  draftPlayers: state.draft.players
});
export class SignupView extends React.Component {

  static propTypes = {
    editNewName: React.PropTypes.func,
    addNewSignupPlayer: React.PropTypes.func,
    signup: React.PropTypes.object,
    draftPlayers: React.PropTypes.array,
    toggleShowAddPlayerModal: React.PropTypes.func
  }

  render () {
    const {
      editNewName,
      addNewSignupPlayer,
      signup,
      draftPlayers,
      toggleShowAddPlayerModal
    } = this.props;
    const Paper = require('material-ui/lib/paper');
    const FlatButton = require('material-ui/lib/flat-button');
    return (
      <div>
      <Paper style={{margin: '20px'}}>
        <div style={{textAlign: 'center', padding: '15px'}}>
          <h2>Draft Signups</h2>
          <FlatButton label='Add Player' style={{backgroundColor: '#1f4883', color: 'white'}} onClick={toggleShowAddPlayerModal} />
        </div>
        <div style={{textAlign: 'center'}}>
        <AddDraftPlayerModal
          signupModel={signup}
          handleNewPlayerNameChange={editNewName}
          handleToggle={toggleShowAddPlayerModal}
          handleAddNewSignupPlayer={addNewSignupPlayer} />
        </div>
      </Paper>
      <div style={{padding: '15px'}}>
        {draftPlayers.length > 0 ? <PlayerSignupList players={draftPlayers} /> : null}
      </div>
    </div>
  );
  }
}

export default connect(mapStateToProps, signupActions)(SignupView);
