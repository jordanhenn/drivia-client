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
    waitingForAnswer: false
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
      this.setState({ 
        error: null,
        waitingForAnswer: true
      })
      DriviaApiService.postImage(imgUrl)
        .then(res => {
          const trimmedResult = res.data.text.toLowerCase().replace(/\s+/g, '')
          if (trimmedResult === this.context.currentQuestion.answer) {
              this.setState({ 
                answered: true,
                wasAnswerRight: 'correct',
                returnedAnswer: trimmedResult,
                waitingForAnswer: false
              })
              this.context.setScore(500)
          } else {
          this.setState({
            answered: true,
            wasAnswerRight: 'incorrect',
            returnedAnswer: trimmedResult,
            waitingForAnswer: false
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
    const submitButtons = (<div className='submit-buttons'>
      <button onClick={this.submitAnswer} className="submit-answer-button">
                  Submit Answer
              </button>
              <button onClick={this.clear} className="clear-answer-button">
                  Erase
              </button>
      </div>)

    const goBackButton = (<div className="submit-buttons">
      <p>You answered '{this.state.returnedAnswer}'. That was {this.state.wasAnswerRight}, bud.</p>
      <button onClick={this.goBack} className="clear-answer-button">
      Back to Questions
      </button>
      </div>)

      const waiting = (<div className="submit-buttons">
      <p>Detecting handwriting...</p>
      </div>)

    if(this.state.answered === false && this.state.waitingForAnswer === false) {
      return submitButtons
    } 
    else if (this.state.waitingForAnswer === true) {
      return waiting
    }
    else {
      return goBackButton
    }
}

  render() {
    const { currentQuestion } = this.context
    return (
      <div className='question-answer-area'>
          <div className="question-area">
              {currentQuestion.question}
          </div>
          <div className="answer-area">
            <div className="canvas-styling">
            <SignatureCanvas
                canvasProps={{className: 'sigCanvas'}}
                clearOnResize={false}
                minWidth={0.5}
                maxWidth={1.50}
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


