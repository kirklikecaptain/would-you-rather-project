import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import '../css/Vote.css';

class Vote extends Component {

  handleVote = (e) => {

    e.preventDefault()

    const { id, dispatch } = this.props

    dispatch(handleAnswerQuestion(id, e.target.value))
  }

  render() {

    return (
      <div className='vote-box'>
        <button className='vote-button first-op' value='optionOne' onClick={(e) => this.handleVote(e)}>Cast Vote</button>
        <button className='vote-button second-op' value='optionTwo' onClick={(e) => this.handleVote(e)}>Cast Vote</button>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users
  }
}

export default connect(mapStateToProps)(Vote)