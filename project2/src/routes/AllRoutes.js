import React, {useEffect} from 'react'
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import Home from '../components/user/pages/Home'
import Shop from '../components/user/pages/Shop'
import Login from '../components/user/pages/Login'
import Signup from '../components/user/pages/Signup'
import MyProfile from '../components/user/pages/MyProfile'
import Logout from '../components/user/pages/Logout'
import About1 from '../components/user/pages/About1'
import About2 from '../components/user/pages/About2'
import { About3 } from '../components/user/pages/About3'
import AboutInfo from '../components/user/shared/AboutInfo'

const AllRoutes = () => {
  return (
    <Routes>
            <Route path='' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />

            <Route path='' element={<AboutLayout />}>
              <Route path='/about/about1' element={<About1 />} />
              <Route path='/about/about2' element={<About2 />} />
              <Route path='/about/about3' element={<About3 />} />
            </Route>
            
            <Route path='' element={<ProtactedRoute />}>
              <Route path='myprofile' element={<MyProfile />} />
              <Route path='logout' element={<Logout />} />
            </Route>
            
            
        </Routes>
  )
}

export default AllRoutes

let AboutLayout = ()=>{
  return(
    <>
      <AboutInfo />
      <Outlet />
    </>
  )
}

let ProtactedRoute = ()=>{

  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("access-token"))
    {
      navigate("/login");
    }
  },[])

  return(
    <Outlet />
  )
}

/*

let App = ()=>{

  <Header />

    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/about/abc" element={<AboutAbc />} />
      <Route path="/about/xyz" element={<AboutXyz />} />
      <Route path="/about/demo" element={<AboutDemo />} />
    </Routes>

  <Footer />


}




*/