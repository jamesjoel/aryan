import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-category">Main</li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                <span className="icon-bg"><i className="mdi mdi-cube menu-icon"></i></span>
                <span className="menu-title">Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <span className="icon-bg"><i className="mdi mdi-crosshairs-gps menu-icon"></i></span>
                <span className="menu-title">Category</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <NavLink className="nav-link" to="/admin/category/add">Add</NavLink></li>
                  <li className="nav-item"> <NavLink className="nav-link" to="/admin/category/list">List</NavLink></li>
                  
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <span className="icon-bg"><i className="mdi mdi-crosshairs-gps menu-icon"></i></span>
                <span className="menu-title">Product</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <NavLink className="nav-link" to="/admin/product/add">Add</NavLink></li>
                  <li className="nav-item"> <NavLink className="nav-link" to="/admin/product/list">List</NavLink></li>
                  
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/users">
                <span className="icon-bg"><i className="mdi mdi-cube menu-icon"></i></span>
                <span className="menu-title">Users</span>
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <span className="icon-bg"><i className="mdi mdi-crosshairs-gps menu-icon"></i></span>
                <span className="menu-title">UI Elements</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                </ul>
              </div>
            </li> */}
            
          </ul>
        </nav>
    </>
  )
}

export default Sidebar