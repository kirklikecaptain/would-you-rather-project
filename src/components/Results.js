import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Results.css';

class Results extends Component {

  render() {
    const { questions, id } = this.props
    const { optionOne, optionTwo } = questions[id]
    return (
      <div className='scoreboard'>
        <div className='score-col'>
          <p className="center-text">{optionOne.votes.length} Vote{optionOne.votes.length !== 1 && 's'}</p>
          <hr/>
          <ul>
            {optionOne.votes.map((user) => (
                <li key={user}>
                  <p>@{user}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className='score-col'>
          <p className="center-text">{optionTwo.votes.length} Vote{optionTwo.votes.length !== 1 && 's'}</p>
          <hr/>
          <ul>
            {optionTwo.votes.map((user) => (
              <li key={user}>
              <p>@{user}</p>
              </li>
            ))}
          </ul>

        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questions
  }
}

export default connect(mapStateToProps)(Results)