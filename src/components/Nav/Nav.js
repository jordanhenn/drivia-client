import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Nav.css'

class Nav extends Component {
  
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    .then(this.history.push('/'))
  }

  renderLinks() {
    if(TokenService.hasAuthToken()) {
      return (<ul className='Main-Nav'>
      <li className='nav-link'>
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        About
      </Link>
      </li>
      <li className='nav-link'>
      <Link style={{ textDecoration: 'none' }} to={'/gamesetup'}>
        Quick Game
      </Link>
      </li>
      <li className='nav-link'>
      <Link style={{ textDecoration: 'none' }} to={'/leaderboard'}>
        Leaderboard
      </Link>
      </li>
      <li className='nav-link'>
      <Link
        onClick={this.handleLogoutClick}
        style={{ textDecoration: 'none' }}
        to={'/'}>
        Logout
      </Link>
      </li>
      </ul>)
    } else {
      return (
        <ul className='Main-Nav'>
        <li className='nav-link'>
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        About
      </Link>
      </li>
      <li className='nav-link'>
      <Link style={{ textDecoration: 'none' }} to={'/gamesetup'}>
        Quick Game
      </Link>
      </li>
      <li className='nav-link'>
      <Link style={{ textDecoration: 'none' }} to={'/leaderboard'}>
        Leaderboard
      </Link>
      </li>
        <li className='nav-link'>
      <Link style={{ textDecoration: 'none' }} to={'/login'}>
        Login
      </Link>
        </li>
        <li className='nav-link'>
      <Link style={{ textDecoration: 'none' }} to={'/register'}>
        Register
      </Link>
        </li>
      </ul>
      )
    }
  }
  render() {
  return (
    <nav className='Nav'>
    <div className='Nav-Style'>
    {this.renderLinks()}
    </div>
    </nav>
  );
  }
}

export default withRouter(Nav)