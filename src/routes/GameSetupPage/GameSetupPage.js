import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class GameSetupPage extends Component { 
  state = {
    categoryOne: null,
    categoryTwo: null,
    categoryThree: null
  }

  handleCategorySubmit = (e) => {
    e.preventDefault()
    const categories = {
      categoryone: this.state.categoryOne,
      categorytwo: this.state.categoryTwo,
      categorythree: this.state.categoryThree
    }
    console.log(categories)
    this.props.history.push('/game')   
  }

  handleCategoryOneChange = (e) => {
    this.setState({ categoryOne: e.target.value });
  }

  handleCategoryTwoChange = (e) => {
    this.setState({ categoryTwo: e.target.value });
  }

  handleCategoryThreeChange = (e) => {
    this.setState({ categoryThree: e.target.value });
  }

  render() {
    //const { error } = this.state
    return (
      <form className='categories' onSubmit={(e) => this.handleCategorySubmit(e)}>
          <fieldset>
            <legend>Pick Three Categories</legend>
            <label htmlFor="categorytwo">First Category:</label>
            <select name="categoryone" id="categoryone" onChange={(e) => this.handleCategoryOneChange(e)}>
              <option value="movies">Movies and TV</option>
              <option value="history">History</option>
              <option value="science">Science</option>
              <option value="state-capitols">State Capitals</option>
              <option value="sailing">Sailing</option>
              <option value="art">Art</option>
              <option value="sports">Sports</option>
            </select>
            <label htmlFor="categorytwo">Second Category:</label>
            <select name="categorytwo" id="categorytwo" onChange={(e) => this.handleCategoryTwoChange(e)}>
              <option value="movies">Movies and TV</option>
              <option value="history">History</option>
              <option value="science">Science</option>
              <option value="state-capitols">State Capitals</option>
              <option value="sailing">Sailing</option>
              <option value="art">Art</option>
              <option value="sports">Sports</option>
            </select>
            <label htmlFor="categorythree">Third Category:</label>
            <select name="categorythree" id="categorythree" onChange={(e) => this.handleCategoryThreeChange(e)}>
              <option value="movies">Movies and TV</option>
              <option value="history">History</option>
              <option value="science">Science</option>
              <option value="state-capitols">State Capitals</option>
              <option value="sailing">Sailing</option>
              <option value="art">Art</option>
              <option value="sports">Sports</option>
            </select>
          </fieldset>
          <button type="submit">Start Game</button>
        </form>
    )
  }
}

export default withRouter(GameSetupPage);