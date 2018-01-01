import React, { Component } from 'react';
import './header.css';
class Header extends Component {
  render() {
    return (
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
              <img src="https://s18.postimg.org/gtu2ychmx/anonymous_security_starter_handbook_by_m4xm0u53-.png" alt="cyber" class="logo"/>
          </a>
          <div class="navbar-start">
              <a class="navbar-item" href="/">Home</a>
          </div>
          <div class="navbar-start">
              <a class="navbar-item" href="/">Projects</a>
          </div>
          <div class="navbar-start">
              <a class="navbar-item" href="/">Site-Map</a>
          </div>
          <div class="navbar-start">
              <a class="navbar-item" href="/">AboutUs</a>
          </div>
        </div>
        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" href="/documentation/overview/start/">
                      More
                    </a>
                    <div class="navbar-dropdown is-boxed">
                      <a class="navbar-item" href="/">
                        Clients
                      </a>
                      <a class="navbar-item" href="/">
                        Services
                      </a>
                      <a class="navbar-item" href="/">
                        OurTeam
                      </a>
                      <hr class="navbar-divider"/>
                      <a class="navbar-item" href="/">
                        Contact
                      </a>
                      <a class="navbar-item" href="/">
                        Components
                      </a>
                    </div>
                 </div>
                  <p class="control">
                    <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" href="/">
                      <span class="icon">
                        <i class="fa fa-twitter"></i>
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
