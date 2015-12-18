import React, { PropTypes } from 'react';

export default class Dice extends React.Component {

  static propTypes = {
    buttonWidth: PropTypes.number
  }

  constructor (props) {
    super(props);
    this.state = {
      diceDialogOpen: false,
      enable20SidedDie: false,
      diceResult: 0,
      isRolling: false
    };

    this.rollDie = this.rollDie.bind(this);
    this.toggleDiceDialog = this.toggleDiceDialog.bind(this);
  }

  rollDie () {
    this.setState({isRolling: true});
    setTimeout(() => {
      if (this.state.enable20SidedDie) {
        this.setState({diceResult: Math.floor(Math.random() * 20) + 1, isRolling: false});
        return;
      }
      this.setState({diceResult: Math.floor(Math.random() * 6) + 1, isRolling: false});
    }, 500);
  }

  toggleDiceDialog (close) {
    if (close) {
      this.setState({
        diceDialogOpen: false,
        diceResult: '',
        enable20SidedDie: false
      });
      return;
    }
    this.setState({
      diceDialogOpen: !this.state.diceDialogOpen,
      diceResult: '',
      enable20SidedDie: false
    });
  }

  render () {
    const RaisedButton = require('material-ui/lib/raised-button');
    const FlatButton = require('material-ui/lib/flat-button');
    const Dialog = require('material-ui/lib/dialog');
    const Toggle = require('material-ui/lib/toggle');
    const List = require('material-ui/lib/lists/list');
    const ListItem = require('material-ui/lib/lists/list-item');
    return (
      <div>
        <FlatButton style={{width: `${this.props.buttonWidth}px`}} label='Dice' onTouchTap={() => this.toggleDiceDialog() }/>
        <Dialog modal open={this.state.diceDialogOpen} onRequestClose={() => this.setState({diceDialogOpen: false})} actions={[<RaisedButton
          label='Close' onTouchTap={() => this.toggleDiceDialog(true)} />]}>
          <h2>Dice Result: {this.state.diceResult}</h2>
          <List style={{border: '1px solid #d4d4d4'}} subheader='Dice Settings'>
            <ListItem style={{textAlign: 'left'}}>
              <Toggle label='20 Sided'
                onToggle={() => this.setState({enable20SidedDie: !this.state.enable20SidedDie})}
                value={this.state.enable20SidedDie}
                />
            </ListItem>
          </List>
          <div style={{textAlign: 'center', paddingTop: '5px'}}>
            <RaisedButton secondary
              label={this.state.isRolling ? <i className='fa fa-spinner fa-pulse'></i> : 'Roll'}
              disabled={this.state.isRolling}
              onClick={() => this.rollDie()} />
          </div>
        </Dialog>
      </div>
    );
  }
}
