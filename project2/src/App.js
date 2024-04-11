import React from 'react'
import Header from './components/user/shared/Header'
import Slider from './components/user/shared/Slider'

import Footer from './components/user/shared/Footer'
import AllRoutes from './routes/AllRoutes'

const App = () => {
  return (
    <>
    <Header />
    <Slider />    
      
      <AllRoutes />      
    <Footer />    
    </>
  )
}

export default App