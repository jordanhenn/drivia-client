import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { QuestionsProvider } from './contexts/QuestionsContext'
import App from './components/App/App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <QuestionsProvider>
            <App />
        </QuestionsProvider>
  </BrowserRouter>, document.getElementById('root'));
