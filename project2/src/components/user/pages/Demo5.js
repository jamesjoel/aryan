import React, {useState} from 'react'

export const Demo5 = () => {
    let [bgColor, setBgColor] = useState("#4AA245")
    let clickHandler = ()=>{
        setBgColor("red");
    }
    let dbclickHandler = ()=>{
        setBgColor("blue");
    }
    let contextHandler = ()=>{
        setBgColor("yellow");
    }
    let mouseoverHandler = ()=>{
        console.log("******")
    }
    let mousemoveHandler = ()=>{
        console.log("#####")
    }
    let mouseoutHandler = ()=>{
        console.log("@@@@@@@")
    }
  return (
    <div className='container' style={{ minHeight : "700px"}}>
        <h1>React DOM (Browser) Events</h1>
        <div onContextMenu={contextHandler} onDoubleClick={dbclickHandler} onClick={clickHandler} style={{height : "100px", width : "100px", backgroundColor : bgColor}}>
        </div>
        <div onMouseOut={mouseoutHandler} onMouseMove={mousemoveHandler} onMouseOver={mouseoverHandler} style={{height : "100px", width : "100px", backgroundColor : "#000"}}>

        </div>
    </div>
  )
}
