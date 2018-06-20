import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Results.css';

class Leaderboard extends Component {

  render() {
    return (
      <div>
        Leaderboard
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questions
  }
}

export default connect(mapStateToProps)(Leaderboard)