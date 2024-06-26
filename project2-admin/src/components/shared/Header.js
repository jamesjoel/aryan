import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
     <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <NavLink className="navbar-brand brand-logo text-light" to="/admin">Administrator</NavLink>
          <NavLink className="navbar-brand brand-logo-mini text-light" to="/admin">A</NavLink>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span className="mdi mdi-menu"></span>
          </button>
          <div className="search-field d-none d-xl-block">
            <form className="d-flex align-items-center h-100" action="#">
              <div className="input-group">
                <div className="input-group-prepend bg-transparent">
                  <i className="input-group-text border-0 mdi mdi-magnify"></i>
                </div>
                <input type="text" className="form-control bg-transparent border-0" placeholder="Search products" />
              </div>
            </form>
          </div>
          <ul className="navbar-nav navbar-nav-right">
           
            
            
            <li className="nav-item nav-profile dropdown">
              <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                
                <div className="nav-profile-text">
                  <p className="mb-1 text-black">Admin</p>
                </div>
              </a>
              <div className="dropdown-menu navbar-dropdown dropdown-menu-right p-0 border-0 font-size-sm" aria-labelledby="profileDropdown" data-x-placement="bottom-end">
                
                <div className="p-2">
                  <h5 className="dropdown-header text-uppercase pl-2 text-dark">Admin Options</h5>
                  
                  <NavLink className="dropdown-item py-1 d-flex align-items-center justify-content-between" to="/admin/profile">
                    <span>Profile</span>
                    
                  </NavLink>
                  
                  <div role="separator" className="dropdown-divider"></div>
                  <h5 className="dropdown-header text-uppercase  pl-2 text-dark mt-2">Actions</h5>
                  
                  <NavLink className="dropdown-item py-1 d-flex align-items-center justify-content-between" to="/admin/logout">
                    <span>Log Out</span>
                    <i className="mdi mdi-logout ml-1"></i>
                  </NavLink>
                </div>
              </div>
            </li>
            
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Header