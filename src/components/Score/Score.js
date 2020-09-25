import React, { Component } from 'react';
import QuestionsContext from '../../contexts/QuestionsContext'

export default class Score extends Component { 
    static contextType = QuestionsContext
    render() {
      const { score } = this.context
      return (
        <div>
            <p><span className='score'>Score: </span><span className="points">{score}</span></p>
        </div>
      )
    }
  }