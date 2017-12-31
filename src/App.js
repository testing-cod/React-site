import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default">Left</button>
              <button type="button" className="btn btn-default">Middle</button>
              <button type="button" className="btn btn-default">Right</button>
          </div>
           <p className="hak">Krishna</p>
      </div>
    );
  }
}

export default App;
