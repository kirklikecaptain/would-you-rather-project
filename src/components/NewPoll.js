import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'
import Hero from './Hero'

import '../css/_base.css';
import '../css/NewPoll.css';


class NewPoll extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  }

  handleOne = (e) => {
    const optionOne = e.target.value
    this.setState(() => ({
      optionOne
    }))
  }
  handleTwo = (e) => {
    const optionTwo = e.target.value
    this.setState(() => ({
      optionTwo
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true,
    }))
  }

  render() {
    const { optionOne, optionTwo, toHome } = this.state
    // const textLeft = (text) => 280 - text.length

    if ( toHome === true ) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <Hero />
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            <h3 className='center-text'>New Poll</h3>
            <hr/>
            <div className="row">
              <textarea
                placeholder='Option One'
                value={optionOne}
                onChange={this.handleOne}
                className='textarea'
                maxLength={280}
                rows='3'>
              </textarea>
              {/* {textLeft(optionOne.length) <= 100 &&
                <div className='poll-length'>
                  {textLeft(optionOne.length)}
                </div>
              } */}
              <div className='or'>or</div>
              <textarea
                placeholder='Option Two'
                value={optionTwo}
                onChange={this.handleTwo}
                className='textarea'
                maxLength={280}
                rows='3'>
              </textarea>
              {/* {textLeft(optionTwo.length) <= 100 &&
                <div className='poll-length'>
                  {textLeft(optionTwo.length)}
                </div>
              } */}
            </div>
            <div className='left-align'>
              <button
                className='submit-button'
                type='submit'
                disabled={optionOne === '' || optionTwo === ''}>
                Submit Poll
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(NewPoll)
