import React, { useState } from 'react'

// in react we have 2 types of variables
// 1. variables
// 2. state
const Demo3 = () => {

    // let arr = useState(100); // the useState() function will return an array
    // let x = arr[0]; // 100
    // let y = arr[1]; // fn

    let a = false;

    let [x, setX] = useState(400);

    let hello = ()=>{
        // x = 1000;
        // setX(1000);
        setX(()=>{
            if(a==true){
                return 5000;
            }else{
                return 6000;
            }
           
        })
    }

  return (
    <>
        <div className='container' style={{minHeight : "600px"}}>
            <button onClick={hello}>ok</button>
            <h1>{x}</h1>
        </div>
    </>
  )
}

export default Demo3