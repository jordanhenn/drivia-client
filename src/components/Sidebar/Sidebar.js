import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import TokenService from "../../services/token-service";
import './Sidebar.css'

class Sidebar extends Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        .then(this.history.push('/'))
      }
    
      renderLinks() {
        if(TokenService.hasAuthToken()) {
          return (<ul className='Main-Nav-Mobile'>
          <li className='nav-link-mobile'>
          <Link style={{ textDecoration: 'none' }} to={'/'}>
            About
          </Link>
          </li>
          <li className='nav-link-mobile'>
          <Link style={{ textDecoration: 'none' }} to={'/gamesetup'}>
            Quick Game
          </Link>
          </li>
          <li className='nav-link-mobile'>
          <Link style={{ textDecoration: 'none' }} to={'/leaderboard'}>
            Leaderboard
          </Link>
          </li>
          <li className='nav-link-mobile'>
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
            <ul className='Main-Nav-Mobile'>
            <li className='nav-link-mobile'>
          <Link style={{ textDecoration: 'none' }} to={'/'}>
            About
          </Link>
          </li>
          <li className='nav-link-mobile'>
          <Link style={{ textDecoration: 'none' }} to={'/gamesetup'}>
            Quick Game
          </Link>
          </li>
          <li className='nav-link-mobile'>
          <Link style={{ textDecoration: 'none' }} to={'/leaderboard'}>
            Leaderboard
          </Link>
          </li>
            <li className='nav-link-mobile'>
          <Link style={{ textDecoration: 'none' }} to={'/login'}>
            Login
          </Link>
            </li>
            <li className='nav-link-mobile'>
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
            <Menu>
                <div className='Nav-Style-Mobile'>
                {this.renderLinks()}
                </div>
            </Menu>
        )
    }
}

export default withRouter(Sidebar)