import React, { PropTypes } from 'react';

export default class MatchupMenu extends React.Component {
  static propTypes = {
    roundInProgress: PropTypes.bool,
    handleNextRoundEvent: PropTypes.func
  }

  render () {
    const MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');
    const IconButton = require('material-ui/lib/icon-button');
    const IconMenu = require('material-ui/lib/menus/icon-menu');
    const MenuItem = require('material-ui/lib/menus/menu-item');
    const { roundInProgress } = this.props;
    // TODO: replace IconMenu with just icons
    return (
      <IconMenu style={{textAlign: 'left'}}
        targetOrigin={{vertical: 'bottom', horizontal: 'right'}}
        iconButtonElement={<IconButton><MoreVertIcon style={{color: 'white'}}/></IconButton>}>
        <MenuItem primaryText='Next Round' disabled={roundInProgress} onClick={() => this.props.handleNextRoundEvent()} />
        <MenuItem primaryText='Reset Matchup' />
      </IconMenu>
    );
  }
}
