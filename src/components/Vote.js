import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Vote.css';

class Vote extends Component {
  render() {
    return (
      <div className='vote-box'>
        <button className='vote-button first-op'>Cast Vote</button>
        <button className='vote-button second-op'>Cast Vote</button>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
}

export default connect(mapStateToProps)(Vote)