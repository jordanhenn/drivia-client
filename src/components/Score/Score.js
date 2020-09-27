import React, { Component } from 'react';
import QuestionsContext from '../../contexts/QuestionsContext'

export default class Score extends Component { 
    static contextType = QuestionsContext

    renderScore() {
      const { score } = this.context
      if (score === null) {
        return 0
      }
        return score
    }
    render() {
      return (
        <div>
            <p><span className='score'>Score: </span><span className="points">{this.renderScore()}</span></p>
        </div>
      )
    }
  }