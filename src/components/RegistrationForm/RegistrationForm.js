import React, { Component } from 'react'

export default class RegistrationForm extends Component {

    render() {
        //const { error } = this.state
        return (
         <form
            className='RegistrationForm'
           //onSubmit={this.handleSubmit}
          >
            <div role='alert'>
              {//error && <p className='red'>{error}</p>
              }
            </div>
            <div className='full_name'>
            <label htmlFor='RegistrationForm__full_name'>
                Full name
              </label>
              <input
                name='full_name'
                type='text'
                required
                id='RegistrationForm__full_name'/>
            </div>
            <div className='user_name'>
              <label htmlFor='RegistrationForm__user_name'>
                User name 
              </label>
              <input
                name='user_name'
                type='text'
                required
                id='RegistrationForm__user_name'/>
            </div>
            <div className='password'>
              <label htmlFor='RegistrationForm__password'>
                Password
              </label>
              <input
                name='password'
                type='password'
                required
                id='RegistrationForm__password'/>     
            </div>
            <button type='submit'>
              Register
            </button>
          </form>
        )
      }
}