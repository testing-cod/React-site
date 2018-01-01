import React, { Component } from 'react';
import './header.css';
class Header extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
              <img src="https://s18.postimg.org/gtu2ychmx/anonymous_security_starter_handbook_by_m4xm0u53-.png" alt="cyber" className="logo"/>
          </a>
          <div className="navbar-start">
              <a className="navbar-item" href="/"><span className="icon"><i className="fa fa-home" aria-hidden="true"></i></span> Home </a>
          </div>
          <div className="navbar-start">
              <a className="navbar-item" href="/"> <span className="icon"><i className="fa fa-pencil-square-o " aria-hidden="true"></i></span>Projects</a>
          </div>
          <div className="navbar-start">
              <a className="navbar-item" href="/"><span className="icon"><i className="fa fa-sitemap" aria-hidden="true"></i></span>Site-Map</a>
          </div>
          <div className="navbar-start">
              <a className="navbar-item" href="/">AboutUs</a>
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link" href="/documentation/overview/start/">
                      More
                    </a>
                    <div className="navbar-dropdown is-boxed">
                      <a className="navbar-item" href="/">
                        Clients
                      </a>
                      <a className="navbar-item" href="/">
                        Services
                      </a>
                      <a className="navbar-item" href="/">
                        OurTeam
                      </a>
                      <hr className="navbar-divider"/>
                      <a className="navbar-item" href="/">
                        Contact
                      </a>
                      <a className="navbar-item" href="/">
                        Components
                      </a>
                    </div>
                 </div>
                  <p className="control">
                    <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" href="/">
                      <span className="icon">
                        <i className="fa fa-lock"></i>
                      </span>
                      <span>
                      Login
                      </span>
                    </a>
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
