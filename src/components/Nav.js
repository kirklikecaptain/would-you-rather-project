import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/_base.css'
import '../css/Nav.css'

function Nav () {
  return (
    <nav className='nav'>
      <div className='container nav-container'>
        <ul className='nav-bar'>
          <li>
            <NavLink to='/' exact className='nav-link' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' exact className='nav-link' activeClassName='active'>
              New Poll
            </NavLink>
          </li>
        </ul>
        <NavLink to='/signin' exact className='nav-link' activeClassName='active'>
          Sign in
        </NavLink>
      </div>
    </nav>
  )
}


export default Nav
