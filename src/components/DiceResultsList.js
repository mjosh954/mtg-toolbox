import React from 'react';

export default class DiceResultsList extends React.Component {
  static propTypes = {
    results: React.PropTypes.array
  }

  render () {
    const List = require('material-ui/lib/lists/list');
    const ListItem = require('material-ui/lib/lists/list-item');
    const Avatar = require('material-ui/lib/avatar');
    const diceResults = this.props.results.map((result, i) => {
      return (<ListItem primaryText={result.value} secondaryText={`${result.diceSides} Sided`} leftAvatar={<Avatar>{i + 1}</Avatar>} />);
    });
    const listStyles = {
      border: '1px solid #d4d4d4',
      marginTop: '5px',
      textAlign: 'left' };
    return (
      <List style={listStyles} subheader='Results'>
        {diceResults}
      </List>
    );
  }
}
