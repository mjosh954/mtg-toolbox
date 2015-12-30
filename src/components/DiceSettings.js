import React, { PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Toggle from 'material-ui/lib/toggle';

export default class DiceSettings extends React.Component {
  static propTypes = {
    twentySidedEnabled: PropTypes.bool,
    handleSidedToggle: PropTypes.func
  }

  render () {
    const {
      twentySidedEnabled,
      handleSidedToggle
    } = this.props;
    return (
      <List style={{border: '1px solid #d4d4d4', textAlign: 'left'}}
        subheader='Dice Settings'>
        <ListItem>
          <Toggle label='20 Sided' labelPosition={'left'}
            onToggle={handleSidedToggle}
            value={twentySidedEnabled} />
        </ListItem>
      </List>
    );
  }
}
