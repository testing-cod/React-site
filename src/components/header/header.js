import React, { Component } from 'react';
//components


// template
class Header extends Component {
  render() {
    return (
      <header>
          <div className="logo">
             logo
          </div>
          <nav>
              <ul>
                  <li>
                      <a href="#">Home </a>
                  </li>
                  <li>
                      <a href="#">About </a>
                  </li>
                  <li>
                      <a href="#">Projects </a>
                  </li>
                  <li>
                      <a href="#">ContactUs</a>
                  </li>
              </ul>
          </nav>
      </header>
    );
  }
}

export default Header;