import React, { PropTypes } from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import Avatar from 'material-ui/lib/avatar';

export default class Player extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    life: PropTypes.number,
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
    if (life > 13) {
      return '#11772d';
    }
    if (life > 5) {
      return '#f4aa00';
    }
    return '#ba0000';
  }

  render () {
    const { name, life, handleAddLife, handleRemoveLife } = this.props;
    const IconButton = require('material-ui/lib/icon-button');
    return (
      <Card style={{margin: '25px', textAlign: 'left'}}>
        <CardHeader avatar={<Avatar size={50} backgroundColor={this.getLifeThresholdColor(life)}>{life}</Avatar>}>
          {name}
        </CardHeader>
        <div style={{textAlign: 'center'}}>
          <IconButton iconClassName='material-icons' iconStyle={{color: 'green'}} onClick={handleAddLife}>
            <i className='fa fa-plus'></i>
          </IconButton> &nbsp;
          <IconButton iconClassName='material-icons' iconStyle={{color: 'red'}}onClick={handleRemoveLife}>
            <i className='fa fa-minus'></i>
          </IconButton>
        </div>
      </Card>
    );
  }
}
