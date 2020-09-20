import React, { Component } from 'react'
//import DriviaContext from '../../contexts/DriviaContext'
//import DriviaApiService from '../../services/thing-api-service'
import SignatureCanvas from 'react-signature-canvas'
import { withRouter } from 'react-router-dom'
import './QuestionPage.css'

const questionsArray = [
  {
    id: 7,
    Question: "Who starred in 'Freddy Got Fingered'?",
    Answer: 'tomgreen',
    Points: 200,
    Category: 'Movies'
},
{
    id: 8,
    Question: "Who starred in 'Forrest Gump'?",
    Answer: 'tomhanks',
    Points: 400,
    Category: 'Movies'
},
{
    id: 9,
    Question: "Who starred in 'Bill and Ted's Excellent Adventure?",
    Answer: 'keanureeves',
    Points: 800,
    Category: 'Movies'
},
{
  id: 1,
  Question: "Who starred in 'Freddy Got Lingered'?",
  Answer: 'tomgreen',
  Points: 200,
  Category: 'Lovies'
},
{
  id: 2,
  Question: "Who starred in 'Forrest Lump'?",
  Answer: 'tomhanks',
  Points: 400,
  Category: 'Lovies'
},
{
  id: 3,
  Question: "Who starred in 'Bill and Led's Excellent Adventure?",
  Answer: 'keanureeves',
  Points: 800,
  Category: 'Lovies'
},
{
  id: 4,
  Question: "Who starred in 'Freddy Got Bingered'?",
  Answer: 'tomgreen',
  Points: 200,
  Category: 'Bovies'
},
{
  id: 5,
  Question: "Who starred in 'Forrest Bump'?",
  Answer: 'tomhanks',
  Points: 400,
  Category: 'Bovies'
},
{
  id: 6,
  Question: "Who starred in 'Bill and Bed's Excellent Adventure?",
  Answer: 'keanureeves',
  Points: 800,
  Category: 'Bovies'
}
]

class QuestionPage extends Component {
    static defaultProps = {
        match: { params: {} },
      }
    
    state = {
    error: null,
    question: {}
  };
    
    //static contextType = DriviaContext

    sigPad = {}
    clear = () => {
      this.sigPad.clear()
    }

    submitAnswer = () => {
      const imgUrl = this.sigPad.getTrimmedCanvas().toDataURL('image/png')
      console.log(imgUrl)
      this.setState({ error: null })
      this.props.history.push('/game')
      //fetch(`https://api.ocr.space/parse/image&apikey=b5c7e01cb588957&url=${imgUrl}`, {
      //method: 'POST',
     // headers: {
       // 'content-type': 'application/json',
       // 'Access-Control-Allow-Origin': '*'
     // }
   // })
     // .then(res => {
       // if (!res.ok) {
          // get the error message from the response,
         // return res.json().then(error => {
            // then throw it
         //   throw error
         // })
       // }
      //  return res.json()
      // })
      // .then(data => {
       // console.log(data)
       // let answer = ""
       // data[0].TextOverlay.Lines.forEach(line => {
         // line.Words.forEach(word => {
         // const wordToAdd = word.WordText.toLowerCase()
         // answer += wordToAdd
        //  })
        // })
        // if(answer !== this.state.question.answer) {
          // const points = this.state.question.points * -1
          // this.context.updateScore(points)
       // }
       // this.context.updateScore(this.state.question.points)
        //this.sigPad.clear()
      //})
      //.catch(error => {
        //this.setState({ error })
      //})
  }

  componentDidMount() {
    //const { questionId } = this.props.match.params
    //this.context.clearError()
    //DriviaApiService.getQuestion(questionId)
      //.then(this.context.setQuestion)
      //.catch(this.context.setError)
    //const question = questionsArray.find(question => question.id = questionId)
   // console.log(question)
    //this.setState({
      //question: question
    //})
  }

  componentWillUnmount() {
    //this.context.clearQuestion()
  }

  render() {
    const { questionId } = this.props.match.params
    console.log(questionId)
    const question = questionsArray.find(question => question.id == questionId)
    console.log(question)
    return (
      <div className='question-answer-area'>
          <div className="points-style">
              <p className="points">Points: {question.Points}</p>
          </div>
          <div className="question-area">
              {question.Question}
          </div>
          <div className="answer-area">
            <div className="canvas-styling">
            <SignatureCanvas
                canvasProps={{className: 'sigCanvas'}}
                clearOnResize={false}
                ref={(ref) => { this.sigPad = ref }} />
            </div>
            <div className="submit-answer-area">
                <button onClick={this.submitAnswer} className="submit-answer-button">
                    Submit Answer
                </button>
                <button onClick={this.clear} className="clear-answer-button">
                    Erase
                </button>
            </div>
          </div>
      </div>
    )
  }
}

export default withRouter(QuestionPage)


