import React, { Component } from 'react';
import DriviaApiService from '../../services/drivia-api-service'


export default class Leaderboard extends Component { 

  state = {
    leaders: []
  }

  componentDidMount() {
    DriviaApiService.getScores()
      .then(result => {
        console.log(result)
        this.setState({ leaders: result })
      })
  }

  render() {
    const { leaders } = this.state
    const leaderTableItems = leaders.map(user => {
        return <tr>
            <td>{user['user:user_name']}</td>
            <td>{user.score}</td>
        </tr>
    })
    return (
      <div>
          <h3>Top 10 Scorers:</h3>
          <table>
            <tr>
              <th>Username</th>
              <th>Score</th>
            </tr>
            {leaderTableItems}
          </table>
      </div>
    )
  }
}