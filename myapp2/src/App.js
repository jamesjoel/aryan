// import './App.css';

import Footer from "./components/Footer";
import Header from "./components/Header";

import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Help from './components/Help'


let App = ()=>{

    return(
        <>
            <Header />
            
            <div className="container my-3" style={{minHeight : "750px"}}>
                
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />}/>
                    <Route path="contact" element={<Contact />}/>
                    <Route path="help" element={<Help />}/>
                </Routes>

            </div>
            
            <Footer />
        </>
    )

}

export default App;
/*
    how to apply css in React-Project

    1. Global Apply  in the file
    2. use "import" statement for getting file
    3. internal css
    4. inline css

*/