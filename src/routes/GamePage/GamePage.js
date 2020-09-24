import React, { Component } from 'react';
import QuestionItem from '../../components/QuestionItem/QuestionItem'
import QuestionsContext from '../../contexts/QuestionsContext'
import DriviaApiService from '../../services/drivia-api-service'


export default class GamePage extends Component { 
  static contextType = QuestionsContext

  state = {
      categories: [],
      categoryOneQuestions: [],
      categoryTwoQuestions: [],
      categoryThreeQuestions: []
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

  render() {
    const { categories } = this.context
    return (
      <div>
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