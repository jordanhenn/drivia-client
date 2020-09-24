import React, { Component } from 'react';
import QuestionsContext from '../../contexts/QuestionsContext'
import { withRouter } from 'react-router-dom';
import DriviaApiService from '../../services/drivia-api-service'

class GameSetupPage extends Component { 
  static contextType = QuestionsContext

  state = {
    categoryOne: "movies",
    categoryTwo: "movies",
    categoryThree: "movies"
  }

  handleCategorySubmit = (e) => {
    e.preventDefault()
    const categories = [
      this.state.categoryOne,
      this.state.categoryTwo,
      this.state.categoryThree
    ]
    this.context.setCategories(categories)

    DriviaApiService.getQuestions(categories[0])
    .then(this.context.setCategoryOneQuestions)
    .catch(this.context.setError)

    DriviaApiService.getQuestions(categories[1])
    .then(this.context.setCategoryTwoQuestions)
    .catch(this.context.setError)

    DriviaApiService.getQuestions(categories[2])
    .then(this.context.setCategoryThreeQuestions)
    .catch(this.context.setError)
   
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
    return (
      <form className='categories' onSubmit={(e) => this.handleCategorySubmit(e)}>
          <fieldset>
            <legend>Pick Three Categories</legend>
            <label htmlFor="categorytwo">First Category:</label>
            <select name="categoryone" id="categoryone" onChange={(e) => this.handleCategoryOneChange(e)} required>
              <option selected="selected" value="movies">Movies</option>
              <option value="history">History</option>
              <option value="science">Science</option>
              <option value="state-capitals">State Capitals</option>
              <option value="sailing">Sailing</option>
              <option value="art">Art</option>
              <option value="sports">Sports</option>
            </select>
            <label htmlFor="categorytwo">Second Category:</label>
            <select name="categorytwo" id="categorytwo" onChange={(e) => this.handleCategoryTwoChange(e)} required>
              <option selected="selected" value="movies">Movies</option>
              <option value="history">History</option>
              <option value="science">Science</option>
              <option value="state-capitals">State Capitals</option>
              <option value="sailing">Sailing</option>
              <option value="art">Art</option>
              <option value="sports">Sports</option>
            </select>
            <label htmlFor="categorythree">Third Category:</label>
            <select name="categorythree" id="categorythree" onChange={(e) => this.handleCategoryThreeChange(e)} required>
              <option selected="selected" value="movies">Movies</option>
              <option value="history">History</option>
              <option value="science">Science</option>
              <option value="state-capitals">State Capitals</option>
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