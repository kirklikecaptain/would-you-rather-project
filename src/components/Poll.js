import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate, formatQuestion } from '../api/api'
import '../css/Poll.css';

class Poll extends Component {

  render() {
    const { question, authedUser } = this.props
    const { id, name, avatarURL, timestamp, optionOne, optionTwo } = question

    if (question === null) {
      return <p>This poll does not exist</p>
    }

    return (
      <div className='poll-card'>
        <div className='poll-data'>
          <p className='poll-info'><span><img className='card-avatar' src={avatarURL} alt={name} /><span>{name} wonders...</span></span><span className='submit-date'>{formatDate(timestamp)}</span></p>
        </div>
        <p className='center-text'>Would you rather</p>
        <Link to={`/poll/${id}`} className='poll-link'>
          <div className='poll-options'>
            <div className={`option-one ${optionOne.votes.includes(authedUser) ? 'choice' : 'not-choice'}`}>
              {optionOne.text}
            </div>
            <div className={`option-two ${optionTwo.votes.includes(authedUser) ? 'choice' : 'not-choice'}`}>
              {optionTwo.text}
            </div>
          </div>
        </Link>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, { id }) {
  const question = questions[id]

  return {
    authedUser,
    users,
    question: question
      ? formatQuestion(question, users[question.author])
      : null
  }
}

export default withRouter(connect(mapStateToProps)(Poll))


