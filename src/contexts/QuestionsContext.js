import React, { Component } from 'react'

export const nullQuestion = {
    id: '',
    question: '',
    answer: '',
    category: '',
    points: '',
  }

const QuestionsContext = React.createContext({
  categoryOneQuestions: [],
  categoryTwoQuestions: [],
  categoryThreeQuestions: [],
  categories: [],
  currentQuestion: {},
  score: null,
  error: null,
  setError: () => {},
  clearError: () => {},
  setCategories: () => {},
  setQuestions: () => {},
  setCurrentQuestion: () => {},
  clearCurrentQuestion: () => {},
  deleteQuestion: () => {},
  setScore: () => {},
  clearScore: () => {}
})
export default QuestionsContext

export class QuestionsProvider extends Component {
  state = {
    categoryOneQuestions: [],
    categoryTwoQuestions: [],
    categoryThreeQuestions: [],
    categories: [],
    currentQuestion: nullQuestion,
    score: null,
    error: null,
  };

  setCategoryOneQuestions = categoryOneQuestions => {
    this.setState({ categoryOneQuestions })
  }

  setCategoryTwoQuestions = categoryTwoQuestions => {
    this.setState({ categoryTwoQuestions })
  }

  setCategoryThreeQuestions = categoryThreeQuestions => {
    this.setState({ categoryThreeQuestions })
  }

  setCategories = categories => {
      this.setState({ categories })
  }

  setCurrentQuestion = currentQuestion => {
    this.setState({ currentQuestion })
}

  setScore = points => {
      if(this.state.score === null){
        this.setState({score: 0 + points})
      }
      const newScore = this.state.score + points
      this.setState({ score: newScore })
  }

  clearScore = () => {
    this.setState({ score: null })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearCurrentQuestion = () => {
    this.setState({ currentQuestion: nullQuestion })
  }

  deleteQuestion = (id) => {
    const newCategoryOne = this.state.categoryOneQuestions.filter(question => question.id !== id)
    const newCategoryTwo = this.state.categoryTwoQuestions.filter(question => question.id !== id)
    const newCategoryThree = this.state.categoryThreeQuestions.filter(question => question.id !== id)
    this.setState({ 
        categoryOneQuestions: newCategoryOne,
        categoryTwoQuestions: newCategoryTwo,
        categoryThreeQuestions: newCategoryThree 
    })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      categoryOneQuestions: this.state.categoryOneQuestions,
      categoryTwoQuestions: this.state.categoryTwoQuestions,
      categoryThreeQuestions: this.state.categoryThreeQuestions,
      currentQuestion: this.state.currentQuestion,
      categories: this.state.categories,
      score: this.state.score,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCategories: this.setCategories,
      setCategoryOneQuestions: this.setCategoryOneQuestions,
      setCategoryTwoQuestions: this.setCategoryTwoQuestions,
      setCategoryThreeQuestions: this.setCategoryThreeQuestions,
      setScore: this.setScore,
      clearScore: this.clearScore,
      setCurrentQuestion: this.setCurrentQuestion,
      deleteQuestion: this.deleteQuestion,
      clearCurrentQuestion: this.clearCurrentQuestion
    }
    return (
      <QuestionsContext.Provider value={value}>
        {this.props.children}
      </QuestionsContext.Provider>
    )
  }
}
