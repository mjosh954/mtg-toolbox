import React, { PropTypes } from 'react';

export default class Player extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    life: PropTypes.number,
    handleIncrementLife: PropTypes.func,
    handleDecrementLife: PropTypes.func,
    editNameMode: PropTypes.bool,
    handleEditNameModeToggle: PropTypes.func
  }

  render () {
    const { name, life, handleIncrementLife, handleDecrementLife, editNameMode, handleEditNameModeToggle } = this.props;
    let playerName;
    if (editNameMode) {
      playerName = (
        <div>
          <form className='form-inline'>
            <input type='text' className='form-control' value={name} />&nbsp;<a href='#'><i className='fa fa-times fa-2x' onClick={handleEditNameModeToggle}></i></a>
          </form>
        </div>);
    } else {
      playerName = <h4> {name} <a href='#' onClick={handleEditNameModeToggle}>&nbsp;<i className='fa fa-pencil'></i></a></h4>;
    }

    return (
      <div className='player-container'>
        <div className='col-md-6'>
          { playerName }
          <div className='row'>
            <div className='col-xs-6'>
              <h2>{life}</h2>
            </div>
            <div className='col-xs-6'>
              <div className='row'>
                <a href='#' className='life-link'><i className='fa fa-caret-square-o-up fa-2x' onClick={handleIncrementLife}></i></a>
              </div>
              <div className='row'>
                <a href='#' className='life-link'><i className='fa fa-caret-square-o-down fa-2x' onClick={handleDecrementLife}></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
