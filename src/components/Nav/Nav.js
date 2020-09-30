import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Nav.css'

export default class LoginForm extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLoginLogoutLink() {
    if(TokenService.hasAuthToken()) {
      return (
      <Link
        onClick={this.handleLogoutClick}
        to={'/'}>
        Logout
      </Link>)
    } else {
      return (
      <div className='login-links'>
      <Link to={'/login'}>
        Login
      </Link>
      <Link to={'/register'}>
        Register
      </Link>
      </div>
      )
    }
  }
  render() {
  return (
    <nav className='Nav'>
    <div className='Nav-Style'>
      <Link to={'/'}>
        About
      </Link>
      {' '}
      <Link to={'/gamesetup'}>
        Quick Game
      </Link>
      <Link to={'/leaderboard'}>
        Leaderboard
      </Link>
      {this.renderLoginLogoutLink()}
    </div>
    </nav>
  );
  }
}