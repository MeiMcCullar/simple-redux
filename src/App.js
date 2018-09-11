import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { simpleAction } from './actions/SimpleAction'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <button onClick={this.simpleAction}>Test redux action</button>
        </p>
        <pre>
 {
  JSON.stringify(this.props)
 }
</pre>
      </div>
    );
  }

  simpleAction = (event) => {
    this.props.simpleAction();
   }
  
}

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);