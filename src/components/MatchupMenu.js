import React, { PropTypes } from 'react';

export default class MatchupMenu extends React.Component {
  static propTypes = {
    handleNextRoundEvent: PropTypes.func,
    handleAddPlayerEvent: PropTypes.func,
    disableAddPlayer: PropTypes.bool
  }

  render () {
    const MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');
    const IconButton = require('material-ui/lib/icon-button');
    const IconMenu = require('material-ui/lib/menus/icon-menu');
    const MenuItem = require('material-ui/lib/menus/menu-item');
    return (
      <IconMenu style={{textAlign: 'left'}}
        iconButtonElement={<IconButton><MoreVertIcon style={{color: 'white'}}/></IconButton>}>
        <MenuItem primaryText='Next Round' onClick={() => this.props.handleNextRoundEvent()} />
        <MenuItem primaryText='Add Player' disabled={this.props.disableAddPlayer} onClick={this.props.handleAddPlayerEvent} />
        <MenuItem primaryText='Reset Matchup' />
      </IconMenu>
    );
  }
}
