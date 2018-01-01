import React, { Component } from 'react';
import './App.css';
import{ BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Header from './components/header/header';
// import Footer from './components/footer/footer';
import Home from './components/Home/home';
import About from './components/About/about';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"> 
            <Header />
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/> 
        </div>
      </Router>
    );
  }
}

export default App;


