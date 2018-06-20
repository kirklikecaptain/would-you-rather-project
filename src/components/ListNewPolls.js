import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Poll from './Poll'

class ListNewPolls extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          {this.props.unansweredQuestions.length === 0 && <div className='center-text'>No more polls to answer.<br/><Link to='/new'>Try creating a new one!</Link></div>}
          <ul>
            {this.props.unansweredQuestions.map((id) => (
              <li key={id}>
                <Poll id={id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const user = users[authedUser]
  //TODO

  const sortedQuestions = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  const unansweredQuestions = sortedQuestions.filter(id => !user.answers.hasOwnProperty(id))

  return {
    unansweredQuestions
  }
}

export default connect(mapStateToProps)(ListNewPolls)