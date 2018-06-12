import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import '../css/_base.css';
import '../css/PollPage.css';

class PollPage extends Component {
  render() {
    console.log(this.props)
    const { id } = this.props
    return (
      <div className='container'>
        <Poll id={id} />
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params

  return {
    id
  }
}

export default connect(mapStateToProps)(PollPage)