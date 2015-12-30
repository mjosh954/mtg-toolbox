import React, { PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';

export default class DiceResultsList extends React.Component {
  static propTypes = {
    results: PropTypes.arrayOf(PropTypes.object),
    handleClearResults: PropTypes.func
  }

  render () {
    const diceResults = this.props.results.map((result, i) => {
      return (<ListItem primaryText={result.value} secondaryText={`${result.diceSides} Sided`} leftAvatar={<Avatar>{i + 1}</Avatar>} />);
    });
    const {
      handleClearResults
    } = this.props;

    const listStyles = {
      border: '1px solid #d4d4d4',
      marginTop: '5px',
      textAlign: 'left' };

    return (
      <List style={listStyles}
        subheader={
          <div>Results &nbsp;
            <span onClick={handleClearResults}
              style={{color: '#43adba', cursor: 'pointer'}}>clear</span>
          </div>}>
        {diceResults}
      </List>
    );
  }
}
