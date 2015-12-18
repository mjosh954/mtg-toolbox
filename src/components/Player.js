import React, { PropTypes } from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import Avatar from 'material-ui/lib/avatar';

export default class Player extends React.Component {
  static propTypes = {
    player: PropTypes.object,
    handleAddLife: PropTypes.func,
    handleRemoveLife: PropTypes.func,
    editNameMode: PropTypes.bool,
    handleEditNameModeToggle: PropTypes.func
  }

  constructor (props) {
    super(props);
    this.getLifeThresholdColor = this.getLifeThresholdColor.bind(this);
  }

  getLifeThresholdColor (life) {
    if (life > 10) {
      return '#11772d';
    }
    if (life > 5) {
      return '#f4aa00';
    }
    return '#ba0000';
  }

  render () {
    const {
      player: {
        life,
        name
      },
      handleAddLife,
      handleRemoveLife
    } = this.props;

    const IconMenu = require('material-ui/lib/menus/icon-menu');
    const MenuItem = require('material-ui/lib/menus/menu-item');
    const playerMenu = (
      <IconMenu openDirection='bottom-right' desktop iconButtonElement={<i className='fa fa-sliders' style={{cursor: 'pointer'}} />}>
        <MenuItem primaryText='Drop Player' />
      </IconMenu>
    );
    return (
      <Card style={{margin: '25px', textAlign: 'left'}}>
        <CardHeader avatar={<Avatar size={50} backgroundColor={this.getLifeThresholdColor(life)}>{life}</Avatar>}>
          {name} &nbsp; {playerMenu}
        </CardHeader>
        <div style={{paddingLeft: '10px'}}>
          <i className='fa fa-plus fa-2x' style={{color: '#11772d', cursor: 'pointer'}} onClick={handleAddLife}></i>&nbsp;&nbsp;
          <i className='fa fa-minus fa-2x' style={{color: '#ba0000', cursor: 'pointer'}} onClick={handleRemoveLife}></i>
        </div>
      </Card>
    );
  }
}
