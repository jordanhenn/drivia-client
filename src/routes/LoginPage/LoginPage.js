import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import Nav from '../../components/Nav/Nav'
import { withRouter } from 'react-router-dom'

class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <div className='LoginPage'>
        <Nav/>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </div>
    )
  }
}

export default withRouter(LoginPage)