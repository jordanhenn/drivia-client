import React from 'react';
import { Link } from 'react-router-dom';

export default function QuestionItem(props) { 
      return (
        <div>
            <Link to={`/question/${props.id}`}>
                <span className='points'>{props.points}</span>
            </Link>
        </div>
      )   
  }