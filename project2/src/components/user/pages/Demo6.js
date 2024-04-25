import React from 'react'

const Demo6 = () => {

    let hello = (x)=>{
        console.log(x)
    }
    // hello(5, 7);

    let hello2 = (x)=>{
        // preventDefault()
        // console.log(x)
        x.preventDefault();
    }
  return (
    <div className='container' style={{ minHeight : "700px"}}>
        <h1>Demo6 Page</h1>
        {/* <button onClick={hello}>OK</button> */}
        <button onClick={(e)=>hello(e)}>OK</button>
        {/* <button onClick={hello(5,7)}>OK</button> */}
        <div onContextMenu={(e)=>hello2(e)} style={{height : "300px", width : "300px", backgroundColor : "#740125"}}></div>
        
    </div>
  )
}

export default Demo6
/*
    onClick = {hello}

    event = {fn}
    event = {()=>fn()}

    there are 3 types of fn, para fn, retrun fn


*/