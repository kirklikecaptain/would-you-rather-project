import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import PollPage from './PollPage'
import NewPoll from './NewPoll'
import ListNewPolls from './ListNewPolls'
import { handleInitialData } from '../actions/shared'
import '../css/_base.css';
import '../css/App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
          <Route path='/' exact component={ListNewPolls} />
          <Route path='/poll/:id' component={PollPage} />
          <Route path='/new' component={NewPoll} />
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App)
