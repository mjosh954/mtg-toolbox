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
    handleEditNameModeToggle: PropTypes.func,
    roundInProgress: PropTypes.bool
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
    if (life > 0) {
      return '#ba0000';
    }
    return 'black';
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

    const FontIcon = require('material-ui/lib/font-icon');
    const playerMenu = (
      <FontIcon disabled={this.props.roundInProgress} style={{cursor: 'pointer'}} hoverColor='grey'>
        <i className='fa fa-sliders' />
      </FontIcon>
    );
    return (
      <Card style={{margin: '25px', textAlign: 'left'}}>
        <CardHeader avatar={<Avatar size={50} backgroundColor={this.getLifeThresholdColor(life)}>{life}</Avatar>}>
          <span style={{fontSize: '1.5em'}}>{name} &nbsp; {playerMenu}</span>
        </CardHeader>
        <div style={{paddingLeft: '10px'}}>
          <i className='fa fa-plus fa-2x'
            style={{color: '#11772d', cursor: 'pointer'}}
            title='increment' onClick={handleAddLife}></i>
            &nbsp;&nbsp;
          <i className='fa fa-minus fa-2x'
            style={{color: '#ba0000', cursor: 'pointer'}}
            title='decrement' onClick={handleRemoveLife}></i>
        </div>
      </Card>
    );
  }
}
