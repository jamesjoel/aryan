import React from 'react'
import Header from './components/shared/Header'
import Sidebar from './components/shared/Sidebar'
import Footer from './components/shared/Footer'
import AllRoutes from './routes/AllRoutes'

const App = () => {
  return (
    <>
    <div className="container-scroller">
      <Header />
     
      
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        
        
        <div className="main-panel">
          <div className="content-wrapper">
            
            <AllRoutes />


          </div>
          
          <Footer />
          
        </div>
        
      </div>
      
    </div>
    </>
  )
}

export default App