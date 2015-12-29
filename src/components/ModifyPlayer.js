import React from 'react';

export default class ModifyPlayer extends React.Component {

  static propTypes = {
    showModifyPlayerModal: React.PropTypes.bool,
    mid: React.PropTypes.number
  }

  render () {
    // const TextField = require('material-ui/lib/text-field');
    // const RaisedIcon = require('material-ui/lib/raised-button');
    // const FlatIcon = require('material-ui/lib/flat-button');
    const Dialog = require('material-ui/lib/dialog');
    const {
      showModifyPlayerModal
      // mid
    } = this.props;
    return (
      <Dialog title='Modify Player' open={showModifyPlayerModal}>
        <div style={{padding: '15px'}} >
        </div>
      </Dialog>
    );
  }
}
