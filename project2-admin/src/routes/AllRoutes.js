import React, {useEffect} from 'react'
import {Routes, Route, Outlet, useNavigate} from 'react-router-dom'
import Dashboard from '../components/feature/Dashboard'
import Category from '../components/feature/Category'
import Product from '../components/feature/Product'
import CategoryList from '../components/feature/CategoryList'
import ProductList from '../components/feature/ProductList'
import Login from '../components/feature/Login'
import Sidebar from '../components/shared/Sidebar'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Logout from '../components/feature/Logout'
import Profile from '../components/feature/Profile'
import Users from '../components/feature/Users'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Login />} />

        <Route path='admin' element={<ProtactedRoutes />}>
          <Route path='' element={<Dashboard />} />
          <Route path='users' element={<Users />} />
          <Route path='profile' element={<Profile />} />
          <Route path='logout' element={<Logout />} />
          
          <Route path='category/add' element={<Category />} />
          <Route path='category/list' element={<CategoryList />} />
          <Route path='product/add' element={<Product />} />
          <Route path='product/list' element={<ProductList />} />
        </Route>
    </Routes>
    </>
  )
}

let ProtactedRoutes = ()=>{
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("admin-token"))
    {
        navigate("/");
    }
  },[])


  return(
    <>
      <div className="container-scroller">
      <Header />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
    </>
  )
}


export default AllRoutes