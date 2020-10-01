import React, { Component } from 'react';
import QuestionsContext from '../../contexts/QuestionsContext'
import { withRouter, Link } from 'react-router-dom';
import DriviaApiService from '../../services/drivia-api-service'
import './GameSetupPage.css'

class GameSetupPage extends Component { 
  static contextType = QuestionsContext

  state = {
    categoryOne: "movies",
    categoryTwo: "movies",
    categoryThree: "movies",
    categoriesSet: "false",
    error: null
  }

  handleCategorySubmit = (e) => {
    e.preventDefault()
    const categories = [
      this.state.categoryOne,
      this.state.categoryTwo,
      this.state.categoryThree
    ]

    if(this.state.categoryOne === this.state.categoryTwo ||
      this.state.categoryOne === this.state.categoryThree ||
      this.state.categoryTwo === this.state.categoryThree) {
        this.setState({error: 'You must pick three different categories.'})
      } else {
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

    this.context.clearScore()
    
    this.setState({
      categoriesSet: true,
      error: null
    })
  }
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
  
  renderStartGame() {
    if (this.state.categoriesSet === true) {
      return (<Link to={'/game'}>
        Click here to start the game
      </Link>)
    }
  }

  componentDidMount() {
    this.context.clearScore()
  }

  render() {
    const { error } = this.state
    return (
      <div>
      <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
      <form className='categories' onSubmit={(e) => this.handleCategorySubmit(e)}>
          <fieldset>
            <legend>Pick Three Categories</legend>
            <div className="category-styling">
            <label htmlFor="categorytwo">First Category:</label>
            <select defaultValue="movies" name="categoryone" id="categoryone" onChange={(e) => this.handleCategoryOneChange(e)} required>
              <option value="movies">Movies</option>
              <option value="history">History</option>
              <option value="science">Science</option>
              <option value="state-capitals">State Capitals</option>
              <option value="sailing">Sailing</option>
              <option value="art">Art</option>
              <option value="sports">Sports</option>
            </select>
            </div>
            <div className="category-styling">
            <label htmlFor="categorytwo">Second Category:</label>
            <select defaultValue="movies" name="categorytwo" id="categorytwo" onChange={(e) => this.handleCategoryTwoChange(e)} required>
              <option value="movies">Movies</option>
              <option value="history">History</option>
              <option value="science">Science</option>
              <option value="state-capitals">State Capitals</option>
              <option value="sailing">Sailing</option>
              <option value="art">Art</option>
              <option value="sports">Sports</option>
            </select>
            </div>
            <div className="category-styling">
            <label htmlFor="categorythree">Third Category:</label>
            <select defaultValue="movies" name="categorythree" id="categorythree" onChange={(e) => this.handleCategoryThreeChange(e)} required>
              <option value="movies">Movies</option>
              <option value="history">History</option>
              <option value="science">Science</option>
              <option value="state-capitals">State Capitals</option>
              <option value="sailing">Sailing</option>
              <option value="art">Art</option>
              <option value="sports">Sports</option>
            </select>
            </div>
          </fieldset>
          <button type="submit">Set Categories</button>
        </form>
        {this.renderStartGame()}
      </div>
    )
  }
}

export default withRouter(GameSetupPage);