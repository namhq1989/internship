import React, { Component } from 'react';
import './App.css';

function Button(props) {
  return (
    <button className="btn" value={props.value}>
      {props.value}
    </button>
  );
}

function Screen(props) {
  return (
      <input id="screen" disabled value={props.value}/>
  );
}

class Board extends React.Component {
  renderButton(i){
    return (
      <Button value={i}/>
    );
  }

  render() {
    let row1 = ['AC','<=','/','*']
    return(
      <div className="calculator">
        <table>
          <tbody>
            <tr>
              <td colSpan="4">
                <Screen />
              </td>
            </tr>
            <tr>
              <td>{this.renderButton('AC')}</td>
              <td>{this.renderButton('<=')}</td>
              <td>{this.renderButton('/')}</td>
              <td>{this.renderButton('*')}</td>
            </tr>
            <tr>
              <td>{this.renderButton(7)}</td>
              <td>{this.renderButton(8)}</td>
              <td>{this.renderButton(9)}</td>
              <td>{this.renderButton('-')}</td>
            </tr>
            <tr>
              <td>{this.renderButton(4)}</td>
              <td>{this.renderButton(5)}</td>
              <td>{this.renderButton(6)}</td>
              <td>{this.renderButton('+')}</td>
            </tr>
            <tr>
              <td>{this.renderButton(1)}</td>
              <td>{this.renderButton(2)}</td>
              <td>{this.renderButton(3)}</td>
              <td rowSpan="2">
                <button className='btn btn-result' value="=">=</button>
              </td>
            </tr>
            <tr>
              <td>{this.renderButton('%')}</td>
              <td>{this.renderButton(0)}</td>
              <td>{this.renderButton('.')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class App extends React.Component {
  
  render() {
     return (
        <Board/>
     );
  }
}


export default App;
