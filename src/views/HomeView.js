import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import Paper from 'material-ui/lib/paper';
import FlatButton from 'material-ui/lib/flat-button';
import CardTitle from 'material-ui/lib/card/card-title';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import Dice from '../components/Dice';

export class HomeView extends React.Component {
  static propTypes = {
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
  }

  render () {
    return (
        <div style={{width: '100%', padding: '50px'}}>
          <GitHubForkRibbon href='https://github.com/mjosh954/mtg-toolbox' target='_blank' position='right' color='black'>Fork me on Github</GitHubForkRibbon>
          <div style={{textAlign: 'center', margin: '20px'}}>
            <img src={require('../assets/magic_elements.png')} />
            <CardTitle title='MTG Toolbox' subtitle='A kit for all your MTG game needs.' />
            <Link to='/game'><FlatButton style={{width: '150px'}} linkButton label='Game Counter' /></Link>
            <div style={{marginTop: '10px'}}>
              <Dice buttonWidth='150' style={{marginTop: '5px'}} />
            </div>
            <div style={{marginTop: '10px'}}>
              <FlatButton linkButton label='tournament (Coming Soon)' disabled />
            </div>
          </div>
        </div>
    );
  }
}

export default connect()(HomeView);
