import React, { Component } from 'react';
import './App.css';
// import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/Home/home';
import About from './components/About/about';
class App extends Component {
  
  render() {
    return (
      // <Router>
      <div className="App"> 
          <Header /> 
             {/* <Route exact path='/' Component={Home}/>
             <Route exact path='/about' Component={About}/> */}

             
           <Home />

          <Footer />
      </div>
     // </Router>
    );
  }
}

export default App;


