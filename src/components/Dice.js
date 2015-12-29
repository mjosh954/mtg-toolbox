import React, { PropTypes } from 'react';
import DiceResultsList from './DiceResultsList';
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
      isRolling: false,
      resultHistory: []
    };

    this.rollDie = this.rollDie.bind(this);
    this.toggleDiceDialog = this.toggleDiceDialog.bind(this);
  }

  rollDie () {
    this.setState({isRolling: true});
    setTimeout(() => {
      const diceSides = this.state.enable20SidedDie ? 20 : 6;
      const result = Math.floor(Math.random() * diceSides) + 1;
      const results = [
        ...this.state.resultHistory,
        {
          value: result,
          diceSides
        }
      ];
      this.setState({
        diceResult: result,
        isRolling: false,
        resultHistory: results
      });
    }, 500);
  }

  toggleDiceDialog (close) {
    if (close) {
      this.setState({
        diceDialogOpen: false,
        diceResult: '',
        enable20SidedDie: false,
        resultHistory: []
      });
      return;
    }
    this.setState({
      diceDialogOpen: !this.state.diceDialogOpen,
      diceResult: '',
      enable20SidedDie: false,
      resultHistory: []
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
        <Dialog autoScrollBodyContent autoDetectWindowHeight={false} open={this.state.diceDialogOpen}
          onRequestClose={() => this.setState({diceDialogOpen: false})}
          actions={[<RaisedButton label='Close' onTouchTap={() => this.toggleDiceDialog(true)} />
          ]}>
          <div style={{textAlign: 'center'}}>
            <h2 style={{marginBottom: '5px', marginTop: 0}}>Dice Result: <span style={{fontSize: '2em', marginLeft: '10px'}}>{this.state.diceResult}</span></h2>
            <RaisedButton secondary
              style={{marginBottom: '5px'}}
              label={this.state.isRolling ? <i className='fa fa-spinner fa-pulse'></i> : 'Roll'}
              disabled={this.state.isRolling}
              onClick={() => this.rollDie()} />
          </div>
          <List style={{border: '1px solid #d4d4d4', textAlign: 'left'}} subheader='Dice Settings'>
            <ListItem>
              <Toggle label='20 Sided' labelPosition={'left'}
                onToggle={() => this.setState({enable20SidedDie: !this.state.enable20SidedDie})}
                value={this.state.enable20SidedDie}
                />
            </ListItem>
          </List>
          {this.state.resultHistory.length > 0 ? <DiceResultsList results={this.state.resultHistory} /> : null}
        </Dialog>
      </div>
    );
  }
}
