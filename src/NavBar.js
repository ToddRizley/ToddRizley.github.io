import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className='navbar row'>
        <img src={require('./favicon.ico')} alt='TQR Logo' />
        <div className='links-row'>
          <a className='nav-link' href='#portfolio'>Portfolio</a>
          <a className='nav-link' href='#about'>About</a>
          <a className='nav-link' href='#resume'>Resume</a>
          <a className='nav-link' href='#contact'>Contact</a>
        </div>
      </div>
    );
  }
}

export default NavBar;
