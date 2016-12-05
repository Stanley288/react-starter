import React, { Component } from 'react'
import logo from './assets/logo.svg'
import './styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.message = 'Stateless error.....wtf'
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Starter</h2>
        </div>
      </div>
    )
  }
}

export default App
