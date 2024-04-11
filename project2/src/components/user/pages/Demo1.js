import React, { useState } from 'react'

const Demo1 = () => {
    let show = true;
    // let name = "Aryan";
    // useState (100)   ---- >  Array  [100, value2]

    let [name, setName] = useState("The Stepping Stone"); // ["Aryan", fn]
                                                    // [value, fn]

    // let [num, setNum] = useState(100);

    let arr = useState(100);
    let num = arr[0]
    let setNum = arr[1]

    let hello = ()=>{
        setName("Aryan");
        setNum(500);
    }


    /*
        1. Tag/Element ----     button
        2. Event    ----        click              around 15-18 DOM events
        3. fn call  -----       hello
    */
  return (
    <div className="container my-5" style={{minHeight : "800px"}}>
        
        <h2>{name}</h2>
        <h1>{num}</h1>
        <button onClick={hello}>Ok</button>
        
        
    </div>
  )
}

export default Demo1
/*
     let [a, b]  = [10, 50, 12];



     useState(5)    -------- [5, ]
*/