import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../api/api'
import '../css/_base.css';
import '../css/Poll.css';

function mapStateToProps({authedUser, users, questions}, { id }) {
  const question = questions[id]
  const avatar = users[question.author].avatarURL
  return {
    authedUser,
    question,
    avatar
  }
}

class Poll extends Component {

  render() {
    const { question, avatar } = this.props
    const { author, timestamp, optionOne, optionTwo } = question

    console.log('this.props', this.props)

    return (
      <div className='poll-card'>
        <div className='poll-options'>
          <div className='option-one'>{optionOne.text}</div>
          <div className='option-two'>{optionTwo.text}</div>
        </div>
        <div>
          <p className='poll-votes'>{optionOne.votes.length + optionTwo.votes.length} Votes</p>
          <p className='poll-info'><div><img className='card-avatar' src={avatar} alt={author} /><span>{author}</span></div><span>{formatDate(timestamp)}</span></p>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Poll)
