import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import QuestionItem from '../../components/QuestionItem/QuestionItem'
import QuestionsContext from '../../contexts/QuestionsContext'
import DriviaApiService from '../../services/drivia-api-service'
import Score from '../../components/Score/Score'
import TokenService from '../../services/token-service'


class GamePage extends Component { 
  static contextType = QuestionsContext

  state = {
      categories: [],
      categoryOneQuestions: [],
      categoryTwoQuestions: [],
      categoryThreeQuestions: []
  }

  newGame = () => {
    this.context.setScore(0)
    this.props.history.push('/gamesetup') 
  }

  submitScore = () => {
    const { score } = this.context
    DriviaApiService.postScore(score)
    this.context.setScore(0)
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
        <button onClick={this.newGame} className="new-game">New Game</button>
    </div>)
      if(categoryOneQuestions.length === 0 
        && categoryTwoQuestions.length === 0
        && categoryThreeQuestions.length === 0
        && TokenService.hasAuthToken()) {
            return authVersion
        } 
        else if (categoryOneQuestions.length === 0 
            && categoryTwoQuestions.length === 0
            && categoryThreeQuestions.length === 0) {
                return noAuthVersion
            }
  }

  render() {
    const { categories } = this.context
    return (
      <div>
          <div className="score-location">
              <Score/>
          </div>
          {this.renderFinalScore()}
          <div className='categories'>
              <div className='category-one'>
                <h3 className='category-header'>{categories[0]}</h3>
                <div className='question-column-item'>
                {this.renderCategoryOne()}
                </div>
              </div>
              <div className='category-two'>
              <h3 className='category-header'>{categories[1]}</h3>
              <div className='question-column-item'>
                {this.renderCategoryTwo()}
                </div>
              </div>
              <div className='category-three'>
              <h3 className='category-header'>{categories[2]}</h3>
              <div className='question-column-item'>
                {this.renderCategoryThree()}
                </div>
              </div>
          </div>
      </div>
    )
  }
}

export default withRouter(GamePage)