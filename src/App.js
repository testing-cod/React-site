import React, { Component } from 'react';
import './App.css';
import{ BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Header from './components/header/header';
// import Footer from './components/footer/footer';
import Home from './components/Home/home';
import About from './components/About/about';
import Clients from './components/Clients/clients';
import Contact from './components/Contact/contact';
import Projects from './components/Projects/projects';
import Services from './components/Services/services';
import Sitemap from './components/sitemap/sitemap';
import Team from './components/Team/team';
import Login from './components/Login/login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"> 
            <Header />
            {/* Router */}
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/> 
                <Route exact path='/Clients' component={Clients}/>
                <Route exact path='/Contact' component={Contact}/>
                <Route exact path='/Projects' component={Projects}/>
                <Route exact path='/Services' component={Services}/>
                <Route exact path='/Sitemap' component={Sitemap}/>
                <Route exact path='/Team' component={Team}/>
                <Route exact path='/Login' component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;


