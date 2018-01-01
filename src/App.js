import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import About from './components/About/about';
class App extends Component {
  
  render() {
    return (
      <div className="App"> 
          <Header /> 
          <About />
      </div>
    );
  }
}

export default App;


