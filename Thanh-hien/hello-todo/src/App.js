import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="app">
        <span className="todo">todos</span>
        <div>
          <input className="newtodo" placeholder="What needs to be done?" />
        </div>
      </div>
      <div className="footer">
        <p className="write">Doulbe-click to edit a todo </p>
        <p className="write2">Created by petehunt </p>
        <p className="write3">Part of TodoMVC </p>
      </div>
      </div>
    );
  }
}

export default App;
