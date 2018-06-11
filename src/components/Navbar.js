import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (


  <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </figure>
          </Link>
          <span className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-end">
              <Link className="navbar-item" to="/about">
              Work
              </Link>
              <Link className="navbar-item" to="/products">
                Profile
              </Link>
          </div>
        </div>
      </div>
    </nav>


  


)

export default Navbar
