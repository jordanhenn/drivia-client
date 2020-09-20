import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

export default function Nav(props) {
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
      <Link to={'/login'}>
        Login
      </Link>
      <Link to={'/register'}>
        Register
      </Link>
    </div>
    </nav>
  );
}