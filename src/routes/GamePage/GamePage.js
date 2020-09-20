import React, { Component } from 'react';
import QuestionItem from '../../components/QuestionItem/QuestionItem'

const categoryOne = [
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
    }
]

const categoryTwo = [
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
    }
]

const categoryThree = [
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

export default class GamePage extends Component { 
  render() {
    //const { error } = this.state
    const categoryOneLayout = categoryOne.map(question => {
        return <div className='question-column-item'>
            <QuestionItem 
                key={question.id}
                id={question.id}
                question={question.Question}
                points={question.Points}
                answer={question.Answer}
            />
        </div>
    })
    const categoryTwoLayout = categoryTwo.map(question => {
        return <div className='question-column-item'>
            <QuestionItem 
                key={question.id}
                id={question.id}
                question={question.Question}
                points={question.Points}
                answer={question.Answer}
            />
        </div>
    })
    const categoryThreeLayout = categoryThree.map(question => {
        return <div className='question-column-item'>
            <QuestionItem 
                key={question.id}
                id={question.id}
                question={question.Question}
                points={question.Points}
                answer={question.Answer}
            />
        </div>
    })
    return (
      <div>
          <div className='categories'>
              <div className='category-one'>
                <h3 className='category-header'>{categoryOne[0].Category}</h3>
                {categoryOneLayout}
              </div>
              <div className='category-two'>
              <h3 className='category-header'>{categoryTwo[0].Category}</h3>
                {categoryTwoLayout}
              </div>
              <div className='category-three'>
              <h3 className='category-header'>{categoryThree[0].Category}</h3>
                {categoryThreeLayout}
              </div>
          </div>
      </div>
    )
  }
}