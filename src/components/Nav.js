import React, { Component } from 'react';
import '../css/_base.css';
import '../css/Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className='nav'>
        <div className='container nav-container'>
          <ul className='nav-bar'>
            <li>
              <a className='nav-link' href="https://google.com">
                link
              </a>
            </li>
          </ul>
          <a className='nav-link' href="https://google.com">
            Sign in
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
