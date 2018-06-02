import React, { Component } from 'react';
import { connect } from 'react-redux'
import Poll from './Poll'
import Hero from './Hero'

class ListNewPolls extends Component {
  render() {
    return (
      <div>
        <Hero />
        <div className='container'>
          <ul>
            {this.props.questionIds.map((id) => (
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

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  };
}

export default connect(mapStateToProps)(ListNewPolls)