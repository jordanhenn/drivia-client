import React, { Component } from 'react';

const usersAndScores = [
    {
        user: 'bobby',
        score: 2000
    },
    {
        user: 'bobby1',
        score: 1999
    },
    {
        user: 'bobby2',
        score: 1998
    },
    {
        user: 'bobby3',
        score: 1997
    },
    {
        user: 'bobby4',
        score: 1996
    },
    {
        user: 'bobby5',
        score: 1995
    },
    {
        user: 'bobby6',
        score: 1994
    },
    {
        user: 'bobby7',
        score: 1993
    },
    {
        user: 'bobby8',
        score: 1992
    },
    {
        user: 'bobby9',
        score: 1991
    },
]

export default class Leaderboard extends Component { 
  render() {
    //const { error } = this.state
    const leaderTableItems = usersAndScores.map(user => {
        return <tr>
            <td>{user.user}</td>
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