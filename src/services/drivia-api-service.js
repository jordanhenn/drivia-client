import TokenService from '../services/token-service'
import config from '../config'


const DriviaApiService = {
  getQuestions(category) {
    return fetch(`${config.API_ENDPOINT}/questions?category=${category}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getQuestionById(questionId) {
    return fetch(`${config.API_ENDPOINT}/questions/${questionId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getScores() {
    return fetch(`${config.API_ENDPOINT}/leaderboard`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postScore( score ) {
    return fetch(`${config.API_ENDPOINT}/leaderboard`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        score
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postImage(imgUrl) {
    return fetch(`${config.API_ENDPOINT}/questions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        imgUrl
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default DriviaApiService