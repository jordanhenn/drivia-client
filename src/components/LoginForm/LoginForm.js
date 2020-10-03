import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import './LoginForm.css'

export default class LoginForm extends Component { 
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  submitDemo = () => {
    AuthApiService.postLogin({
      user_name: 'demo-user',
      password: 'Password!1'
    })
    .then(res => {
      TokenService.saveAuthToken(res.authToken)
      this.props.onLoginSuccess()
    })
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
    .then(res => {
      user_name.value = ''
      password.value = ''
      TokenService.saveAuthToken(res.authToken)
      this.props.onLoginSuccess()
    })
    .catch(res => { 
      this.setState({ error: res.error })
    })
  }

  render() {
    const { error } = this.state
    return (
      <div>
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <input
            name='user_name'
            id='LoginForm__user_name'/>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            name='password'
            type='password'
            id='LoginForm__password'/>
        </div>
        <button className="login" type='submit'>
          Login
        </button>
      </form>
      <p><span className="bold">Demo Account:</span> demo-user <span className="bold">Password:</span> Password!1</p>
      </div>
    )
  }
}
