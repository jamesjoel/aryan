import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/user/pages/Home'
import Shop from '../components/user/pages/Shop'
import Login from '../components/user/pages/Login'
import Signup from '../components/user/pages/Signup'
import Demo from '../components/user/pages/Demo'
import Demo1 from '../components/user/pages/Demo1'

const AllRoutes = () => {
  return (
    <Routes>
            <Route path='' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='demo' element={<Demo />} />
            <Route path='demo1' element={<Demo1 />} />
        </Routes>
  )
}

export default AllRoutes