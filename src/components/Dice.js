import React, { PropTypes } from 'react';
import DiceResultsList from './DiceResultsList';
import DiceSettings from './DiceSettings';
import Dialog from 'material-ui/lib/dialog';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';

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
    this.setState({
      diceResult: '',
      enable20SidedDie: false,
      resultHistory: [],
      diceDialogOpen: close ? false : !this.state.diceDialogOpen
    });
  }

  render () {
    const resetHistory = () => this.setState({resultHistory: []});
    const toggleSides = () => this.setState({enable20SidedDie: !this.state.enable20SidedDie});
    return (
      <div>
        <FlatButton style={{width: `${this.props.buttonWidth}px`}} label='Dice' onTouchTap={() => this.toggleDiceDialog() }/>
        <Dialog autoScrollBodyContent open={this.state.diceDialogOpen}
          onRequestClose={() => this.setState({diceDialogOpen: false})}
          actions={[<RaisedButton label='Close' onTouchTap={() => this.toggleDiceDialog(true)} />
          ]}>
          <div style={{textAlign: 'center'}}>
            <h2 style={{marginBottom: '5px', marginTop: 0}}>Dice Result: <span style={{fontSize: '2em', marginLeft: '10px'}}>{this.state.diceResult}</span></h2>
            <RaisedButton secondary
              style={{marginBottom: '5px'}}
              label={this.state.isRolling ? <i className='fa fa-spinner fa-pulse'></i> : 'Roll'}
              disabled={this.state.isRolling}
              onClick={this.rollDie} />
          </div>
          <DiceSettings
            twentySidedEnabled={this.state.enable20SidedDie}
            handleSidedToggle={toggleSides} />
          <DiceResultsList handleClearResults={resetHistory} results={this.state.resultHistory} />
        </Dialog>
      </div>
    );
  }
}
