import React, { Component } from 'react';
import './header.css';
import{  Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
              <img src="https://s18.postimg.org/gtu2ychmx/anonymous_security_starter_handbook_by_m4xm0u53-.png" alt="cyber" className="logo"/>
          </a>
          <div className="navbar-start">
              <Link to ="/" className="navbar-item"><span className="icon"><i className="fa fa-home" aria-hidden="true"></i></span> Home </Link>
          </div>
          <div className="navbar-start">
              <Link to="/Projects" className="navbar-item"> <span className="icon"><i className="fa fa-pencil-square-o " aria-hidden="true"></i></span>Projects</Link>
          </div>
          <div className="navbar-start">
              <Link to="/Sitemap" className="navbar-item"><span className="icon"><i className="fa fa-sitemap" aria-hidden="true"></i></span>Site-Map</Link>
          </div>
          <div className="navbar-start">
              <Link to="/about" className="navbar-item">About</Link>
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                  <div className="navbar-item has-dropdown is-hoverable">
                    <Link to="/" className="navbar-link">
                      More
                    </Link>
                    <div className="navbar-dropdown is-boxed">
                      <Link to="/Clients" className="navbar-item">
                        Clients
                      </Link>
                      <Link to="/Services" className="navbar-item">
                        Services
                      </Link>
                      <Link to="/Team" className="navbar-item">
                        OurTeam
                      </Link>
                      <hr className="navbar-divider"/>
                      <Link to="/Contact" className="navbar-item">
                        Contact
                      </Link>
                      <Link to="/" className="navbar-item">
                        Components
                      </Link>
                    </div>
                 </div>
                 <p className="control">
                    <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" href="/">
                      <span className="icon">
                        <i className="fa fa-twitter"></i>
                      </span>
                      <span>
                      Twitter
                      </span>
                    </a>
                  </p>
                  <p className="control">
                    <Link to="/Login" className="button is-primary" data-social-network="Twitter" data-social-action="tweet">
                      <span className="icon">
                        <i className="fa fa-lock"></i>
                      </span>
                      <span>
                          Login
                      </span>
                    </Link>
                  </p>
              </div>
            </div>
          </div>
        </div>
     </nav>
    );
  }
}

export default Header;
