import React, { Component } from 'react'
import QuestionsContext from '../../contexts/QuestionsContext'
import DriviaApiService from '../../services/drivia-api-service'
import SignatureCanvas from 'react-signature-canvas'
import { withRouter } from 'react-router-dom'
import './QuestionPage.css'

class QuestionPage extends Component {
    static defaultProps = {
        match: { params: {} },
      }
    
    state = {
    error: null,
    answered: false,
    returnedAnswer: null,
    wasAnswerRight: '',
  };
    
    static contextType = QuestionsContext

    sigPad = {}
    clear = () => {
      this.sigPad.clear()
    }

    goBack = () => {
      this.context.deleteQuestion(this.context.currentQuestion.id)
      this.context.clearCurrentQuestion()
      this.props.history.push('/game') 
    }

    submitAnswer = () => {
      const imgUrl = this.sigPad.getTrimmedCanvas().toDataURL('image/png')
      console.log(this.context.currentQuestion.answer)
      console.log(imgUrl)
      this.setState({ error: null })
      DriviaApiService.postImage(imgUrl)
        .then(res => {
          const trimmedResult = res.data.text.toLowerCase().replace(/\s+/g, '')
          console.log(trimmedResult)
          if (trimmedResult === this.context.currentQuestion.answer) {
              this.setState({ 
                answered: true,
                wasAnswerRight: 'correct',
                returnedAnswer: trimmedResult
              })
              this.context.setScore(500)
          } else {
          this.setState({
            answered: true,
            wasAnswerRight: 'incorrect',
            returnedAnswer: trimmedResult
          })
          this.context.setScore(-500)
        }
    })
}

  componentDidMount() {
    const { questionId } = this.props.match.params
    this.context.clearError()
    DriviaApiService.getQuestionById(questionId)
      .then(this.context.setCurrentQuestion)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearCurrentQuestion()
  }

  renderButtons() {
    const submitButtons = (<div>
      <button onClick={this.submitAnswer} className="submit-answer-button">
                  Submit Answer
              </button>
              <button onClick={this.clear} className="clear-answer-button">
                  Erase
              </button>
      </div>)

    const goBackButton = (<div>
      <p>You answered '{this.state.returnedAnswer}'. That was {this.state.wasAnswerRight}, bud.</p>
      <button onClick={this.goBack} className="clear-answer-button">
      Back to Questions
      </button>
      </div>)

    if(this.state.answered === false ) {
      return submitButtons
    } else {
      return goBackButton
    }
}

  render() {
    const { currentQuestion } = this.context
    return (
      <div className='question-answer-area'>
          <div className="points-style">
              <p className="points">Points: 500</p>
          </div>
          <div className="question-area">
              {currentQuestion.question}
          </div>
          <div className="answer-area">
            <div className="canvas-styling">
            <SignatureCanvas
                canvasProps={{className: 'sigCanvas'}}
                clearOnResize={false}
                ref={(ref) => { this.sigPad = ref }} />
            </div>
            <div className="submit-answer-area">
                {this.renderButtons()}
            </div>
          </div>
      </div>
    )
  }
}

export default withRouter(QuestionPage)


