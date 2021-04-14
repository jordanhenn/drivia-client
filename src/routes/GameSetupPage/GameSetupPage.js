import React, { Component } from 'react';
import QuestionsContext from '../../contexts/QuestionsContext'
import { withRouter, Link } from 'react-router-dom';
import DriviaApiService from '../../services/drivia-api-service'
import './GameSetupPage.css'

class GameSetupPage extends Component { 
  static contextType = QuestionsContext

  state = {
    categoryOne: "movies",
    categoryTwo: "sailing",
    categoryThree: "state-capitals",
    categoriesSet: false,
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

  componentDidMount() {
    this.context.clearScore()
  }

  render() {
    const { error } = this.state
    console.log(this.state.categoriesSet)
    return (
      <div>
      <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
      {!(this.state.categoriesSet) ?
      <form className='categories' onSubmit={(e) => this.handleCategorySubmit(e)}>
          <fieldset>
            <legend>Pick Three Categories</legend>
            <div className="category-styling">
            <label htmlFor="categorytwo">First Category:</label>
            <select defaultValue={this.state.categoryOne} name="categoryone" id="categoryone" onChange={(e) => this.handleCategoryOneChange(e)} required>
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
            <select defaultValue={this.state.categoryTwo} name="categorytwo" id="categorytwo" onChange={(e) => this.handleCategoryTwoChange(e)} required>
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
            <select defaultValue={this.state.categoryThree} name="categorythree" id="categorythree" onChange={(e) => this.handleCategoryThreeChange(e)} required>
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
        </form> :
        <div>
          <p className='categories-set'>The categories have been set. Click the button below to start the game.</p>
          <Link style={{textDecoration: 'none', padding: '10px', border: '1px solid white', borderRadius: '5px'}} to={'/game'}>
        Start
      </Link>
        </div>}
      </div>
    )
  }
}

export default withRouter(GameSetupPage);