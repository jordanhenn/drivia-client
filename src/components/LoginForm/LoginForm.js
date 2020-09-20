import React, { Component } from 'react'

export default class LoginForm extends Component { 

  render() {
    //const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {//error && <p className='red'>{error}</p>
          }
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
        <button type='submit'>
          Login
        </button>
      </form>
    )
  }
}
