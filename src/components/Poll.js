import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate, formatQuestion } from '../api/api'
import '../css/Poll.css';

class Poll extends Component {

  render() {
    const { question } = this.props
    const { id, name, avatarURL, timestamp, optionOne, optionTwo } = question

    if (question === null) {
      return <p>This does not exist</p>
    }

    return (
      <div className='poll-card'>
        <div className='poll-data'>
          <p className='poll-info'><span><img className='card-avatar' src={avatarURL} alt={name} /><span>{name}</span></span><span className='submit-date'>{formatDate(timestamp)}</span></p>
        </div>
        <Link to={`/poll/${id}`} className='poll-link'>
          <div className='poll-options'>
            <div className='option-one'>
              {optionOne.text}
            </div>
            <div className='option-two'>
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
    question: question
      ? formatQuestion(question, users[question.author])
      : null
  }
}

export default withRouter(connect(mapStateToProps)(Poll))


