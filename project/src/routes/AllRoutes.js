import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from '../components/user/pages/Home'
import Contact from '../components/user/pages/Contact'
import About from '../components/user/pages/About'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
        </Routes>
    </>
  )
}

export default AllRoutes