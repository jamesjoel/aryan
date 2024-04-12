import React, {useState} from 'react'

const Demo4 = () => {

    let [num, setNum] = useState(0);

    let inc = ()=>{
        setNum(()=>{
            let x = num+1;
            return x;
        });
    }

    let dec = ()=>{
        setNum(()=>{
            let x = num-1;
            return x;
        });
    }
  return (
    <div className="container" style={{minHeight : "700px"}}>
        <h1>Demo 4</h1>
        <button onClick={inc} className='btn btn-info'>+</button>
        <h3>{num}</h3>
        <button onClick={dec} className='btn btn-info'>-</button>
        
    </div>
  )
}

export default Demo4