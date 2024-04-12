import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/user/pages/Home'
import Shop from '../components/user/pages/Shop'
import Login from '../components/user/pages/Login'
import Signup from '../components/user/pages/Signup'
import Demo from '../components/user/pages/Demo'
import Demo1 from '../components/user/pages/Demo1'
import Demo3 from '../components/user/pages/Demo3'
import Demo4 from '../components/user/pages/Demo4'
import { Demo5 } from '../components/user/pages/Demo5'

const AllRoutes = () => {
  return (
    <Routes>
            <Route path='' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='demo' element={<Demo />} />
            <Route path='demo1' element={<Demo1 />} />
            <Route path='demo3' element={<Demo3 />} />
            <Route path='demo4' element={<Demo4 />} />
            <Route path='demo5' element={<Demo5 />} />
        </Routes>
  )
}

export default AllRoutes