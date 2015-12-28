import React from 'react';
import moment from 'moment';

export default class PlayerSignupList extends React.Component {
  static propTypes = {
    players: React.PropTypes.array
  }

  render () {
    const Table = require('material-ui/lib/table/table');
    const TableBody = require('material-ui/lib/table/table-body');
    const TableRow = require('material-ui/lib/table/table-row');
    const TableRowColumn = require('material-ui/lib/table/table-row-column');
    const TableHeader = require('material-ui/lib/table/table-header');
    const TableHeaderColumn = require('material-ui/lib/table/table-header-column');

    const { players } = this.props || [];
    const playerRows = players.map((player, i) => {
      return (
        <TableRow key={i + 1}>
          <TableRowColumn>{i + 1}</TableRowColumn>
          <TableRowColumn>{player.name}</TableRowColumn>
          <TableRowColumn>{moment(player.dateAdded).format('MMMM Do YYYY, h:mm:ss a')}</TableRowColumn>
        </TableRow>
      );
    });
    return (
      <div>
        <Table multiSelectable>
          <TableHeader enableSelectAll>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Player Name</TableHeaderColumn>
              <TableHeaderColumn>Time Added</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows>
          {playerRows}
          </TableBody>
        </Table>
      </div>
    );
  }
}
