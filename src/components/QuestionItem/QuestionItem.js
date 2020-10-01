import React from 'react';
import { Link } from 'react-router-dom';
import './QuestionItem.css'

export default function QuestionItem(props) { 
      return (
          <div className='question-item-style'>
            <Link style={{ textDecoration: 'none' }}to={`/question/${props.id}`}>
            <div className='question-item'>
                <span className='points'>{props.points}</span>
            </div>
            </Link>
        </div>
      )   
  }