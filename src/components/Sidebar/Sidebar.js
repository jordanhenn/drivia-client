import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import TokenService from "../../services/token-service";
import './Sidebar.css'

export default class Sidebar extends Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
      }
    
      renderLoginLogoutLink() {
        if(TokenService.hasAuthToken()) {
          return (
          <Link
            onClick={this.handleLogoutClick}
            style={{ textDecoration: 'none' }}
            to={'/'}>
            Logout
          </Link>)
        } else {
          return (
          <div className='login-links'>
          <Link style={{ textDecoration: 'none' }} to={'/login'}>
            Login
          </Link>
          <br/>
          <Link style={{ textDecoration: 'none' }} to={'/register'}>
            Register
          </Link>
          </div>
          )
        }
      }

    render() {
        return (
            <Menu>
                <Link style={{ textDecoration: 'none' }} to={'/'}>
                    About
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/gamesetup'}>
                    Quick Game
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/leaderboard'}>
                    Leaderboard
                </Link>
                    {this.renderLoginLogoutLink()}
            </Menu>
        )
    }
}