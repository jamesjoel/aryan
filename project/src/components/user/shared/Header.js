import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        
    <header id="header">
      <div id="header-wrap">
        <nav className="secondary-nav border-bottom">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-4 header-contact">
                <p>Let's talk! <strong>+57 444 11 00 35</strong>
                </p>
              </div>
              <div className="col-md-4 shipping-purchase text-center">
                <p>Free shipping on a purchase value of $200</p>
              </div>
              <div className="col-md-4 col-sm-12 user-items">
                <ul className="d-flex justify-content-end list-unstyled">
                  <li>
                    <a href="login.html">
                      <i className="icon icon-user"></i>
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">
                      <i className="icon icon-shopping-cart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="wishlist.html">
                      <i className="icon icon-heart"></i>
                    </a>
                  </li>
                  <li className="user-items search-item pe-3">
                    <a href="#" className="search-button">
                      <i className="icon icon-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <nav className="primary-nav padding-small">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-2 col-md-2">
                <div className="main-logo">
                  <a href="index.html">
                    <h3>Fee-Tutorial</h3>
                  </a>
                </div>
              </div>
              <div className="col-lg-10 col-md-10">
                <div className="navbar">

                  <div id="main-nav" className="stellarnav d-flex justify-content-end right">
                    <ul className="nav navbar-nav">

                     

                      <li className='nav-item'><NavLink to="/" className="nav-link" >Home</NavLink></li>
                      <li className='nav-item'><NavLink to="/contact" className="nav-link" >Contact</NavLink></li>
                      <li className='nav-item'><NavLink to="/about" className="nav-link" >About</NavLink></li>
                      <li className='dropdown nav-item'>
                        <NavLink to="/" className="nav-link dropdown-toggle" >Tutorials</NavLink>
                      </li>

                      

                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header