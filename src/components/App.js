import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../css/_base.css';
import '../css/App.css';
import Nav from './Nav'
import ListNewPolls from './ListNewPolls'
import { handleInitialData } from '../actions/shared'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <Nav />
        <ListNewPolls />
      </div>
    );
  }
}

export default connect()(App)
