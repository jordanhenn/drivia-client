import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import QuestionItem from '../../components/QuestionItem/QuestionItem'
import QuestionsContext from '../../contexts/QuestionsContext'
import DriviaApiService from '../../services/drivia-api-service'
import Score from '../../components/Score/Score'
import TokenService from '../../services/token-service'
import './GamePage.css'


class GamePage extends Component { 
  static contextType = QuestionsContext

  newGame = () => {
    this.props.history.push('/gamesetup') 
  }

  submitScore = () => {
    const score = this.context.score
    DriviaApiService.postScore(score)
    .then(result => console.log(result))
    this.props.history.push('/leaderboard')
  }

  componentDidMount() {
    this.context.clearError()
  }

  renderCategoryOne() {
    const { categoryOneQuestions = [] } = this.context
    return categoryOneQuestions.map(question =>
      <QuestionItem
        key={question.id}
        id={question.id}
        question={question.question}
        answer={question.answer}
        points={500}
      />
    )
  }

  renderCategoryTwo() {
    const { categoryTwoQuestions = [] } = this.context
    return categoryTwoQuestions.map(question =>
      <QuestionItem
        key={question.id}
        id={question.id}
        question={question.question}
        answer={question.answer}
        points={500}
      />
    )
  }

  renderCategoryThree() {
    const { categoryThreeQuestions = [] } = this.context
    return categoryThreeQuestions.map(question =>
      <QuestionItem
        key={question.id}
        id={question.id}
        question={question.question}
        answer={question.answer}
        points={500}
      />
    )
  }

  renderFinalScore() {
      const { categoryOneQuestions, categoryTwoQuestions, categoryThreeQuestions, score } = this.context
      const authVersion = (<div>
          <p className="final-score"><span className="final-score-title">FINAL SCORE: </span><span className="final-score-num">{score}</span></p>
          <button onClick={this.newGame} className="new-game">New Game</button>
          <button onClick={this.submitScore} className="submit-score">Submit Score</button>
      </div>)
      const noAuthVersion = (<div>
        <p className="final-score"><span className="final-score-title">FINAL SCORE: </span><span className="final-score-num">{score}</span></p>
        <Link to={'/'}>Click here to go home</Link>
        <button onClick={this.newGame} className="new-game">New Game</button>
    </div>)
      if(categoryOneQuestions.length === 0 
        && categoryTwoQuestions.length === 0
        && categoryThreeQuestions.length === 0
        && TokenService.hasAuthToken()
        && this.context.score !== null) {
            return authVersion
        } 
        else if (categoryOneQuestions.length === 0 
            && categoryTwoQuestions.length === 0
            && categoryThreeQuestions.length === 0
            && this.context.score !== null) {
                return noAuthVersion
            }
  }

  render() {
    const { categories } = this.context
    if (categories.length !== 0) {
    return (
      <div>
          <div className="score-location">
              <Score/>
          </div>
          {this.renderFinalScore()}
          <div className='categories'>
              <div className='category-one'>
                <h3 className='category-header'>{categories[0].toUpperCase()}</h3>
                <div className='question-column-item'>
                {this.renderCategoryOne()}
                </div>
              </div>
              <div className='category-two'>
              <h3 className='category-header'>{categories[1].toUpperCase()}</h3>
              <div className='question-column-item'>
                {this.renderCategoryTwo()}
                </div>
              </div>
              <div className='category-three'>
              <h3 className='category-header'>{categories[2].toUpperCase()}</h3>
              <div className='question-column-item'>
                {this.renderCategoryThree()}
                </div>
              </div>
          </div>
      </div>
    )
    } else {
      return (
        <div>
          <p>There's been an error.</p>
          <Link to={'/'}>Click here to go back to the homepage.</Link>
          </div>
      )
    }
  }
}

export default withRouter(GamePage)