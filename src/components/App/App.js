import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import LandingPage from '../../routes/LandingPage/LandingPage'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import GameSetupPage from '../../routes/GameSetupPage/GameSetupPage'
import GamePage from '../../routes/GamePage/GamePage'
import QuestionPage from '../../routes/QuestionPage/QuestionPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import Leaderboard from '../../routes/Leaderboard/Leaderboard'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import './App.css'

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <div className='header-styling'>
          <h1><Link style={{ textDecoration: 'none' }} to={'/'}>Drivia</Link></h1>
          <div className="desktop-nav">
          <Nav/>
          </div>
          <div className="mobile-nav">
          <Sidebar/>
          </div>
          </div>
        </header>
        <main className='App__main'>
          <div id="page-wrap">
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              path={'/gamesetup'}
              component={GameSetupPage}
            />
            <Route
              path={'/game'}
              component={GamePage}
            />
            <Route
              path={'/question/:questionId'}
              component={QuestionPage}
            />
            <Route
              path={'/leaderboard'}
              component={Leaderboard}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </div>
        </main>
      </div>
    )
  }
}

export default App