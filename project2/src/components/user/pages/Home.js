import React, { useState, useEffect } from 'react' // Hooks
import Populer from '../shared/Populer'
import TopFooter from '../shared/TopFooter'
import Slider from '../shared/Slider'
import axios from 'axios'
import ProductBox from '../shared/ProductBox'

const Home = (props) => {

    let [pro, setPro] = useState([]);

    useEffect(()=>{
        getData();
    },[]);


    let getData = ()=>{
        axios.get("http://localhost:8080/api/product").then(response=>{
            console.log(response.data);
            setPro(response.data);
        })
    }

  return (
    <>
    <Slider />
    
    <Populer />
    
    <div className="container-fluid fruite py-5">
            <div className="container py-5">
                <div className="tab-className text-center">
                    <div className="row g-4">
                        <div className="col-lg-12 text-start">
                            <h1>Feature Products</h1>
                        </div>
                        
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                <div className="row g-4">
                                    
                                      {
                                        pro.map((item, index)=><ProductBox info={item} />  )
                                      }       
                                                    
                                           
                                    </div>
                                    </div>
                            </div>
                        </div>
                        
                    </div>
                </div>      
            </div>
        </div>
        <TopFooter />
    </>
  )
}

export default Home


/*
    props in React

   
    let Demo = ()=>{
   
    let name = "rohit";    
    
    return(
        <div>
            <Box info={name} age={25} />
            <Box2 info={name}>The Stepping Stone</Box2>
        </div>
    )
}
let Box = (props)=>{
    return(
        <h1>{ props.info }<h1>
        <h1>{ props.age }<h1>
    )
}
let Box2 = (props)=>{
    return(
        <h1>Aryan</h1>
        <h1>{props.info}</h1>
        <h2>{props.children}</h2>
    )
}





*/