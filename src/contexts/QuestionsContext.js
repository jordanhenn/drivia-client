import React, { Component } from 'react'

const QuestionsContext = React.createContext({
  categoryOneQuestions: [],
  categoryTwoQuestions: [],
  categoryThreeQuestions: [],
  categories: [],
  score: null,
  error: null,
  setError: () => {},
  clearError: () => {},
  setCategories: () => {},
  setQuestions: () => {},
  setScore: () => {}
})
export default QuestionsContext

export class QuestionsProvider extends Component {
  state = {
    categoryOneQuestions: [],
    categoryTwoQuestions: [],
    categoryThreeQuestions: [],
    categories: [],
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

  setScore = score => {
      this.setScore({ score })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      categoryOneQuestions: this.state.categoryOneQuestions,
      categoryTwoQuestions: this.state.categoryTwoQuestions,
      categoryThreeQuestions: this.state.categoryThreeQuestions,
      categories: this.state.categories,
      score: this.state.score,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCategories: this.setCategories,
      setCategoryOneQuestions: this.setCategoryOneQuestions,
      setCategoryTwoQuestions: this.setCategoryTwoQuestions,
      setCategoryThreeQuestions: this.setCategoryThreeQuestions,
    }
    return (
      <QuestionsContext.Provider value={value}>
        {this.props.children}
      </QuestionsContext.Provider>
    )
  }
}
