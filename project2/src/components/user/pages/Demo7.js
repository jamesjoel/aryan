import React, {useState} from 'react'

const Demo7 = () => {
    let [x, setX] = useState(0)
    let [y, setY] = useState(0)

    let [top, setTop] = useState(0);
    let [left, setLeft] = useState(0);
    let [disp, setDisp] = useState("none");
    let mouseMoveHandler = (e)=>{
        setX(e.pageX);
        setY(e.pageY);
    }
    let contextHandler = (e)=>{
        e.preventDefault();
        setTop(e.pageY-800);
        setLeft(e.pageX-60);
        setDisp("block");

    }

  return (
    <>
    <div className='container'>
        <h3>Position of X axis : {x}</h3>
        <h3>Position of Y axis : {y}</h3>
        
    </div>
    <div onClick={()=>setDisp("none")} onContextMenu={(e)=>contextHandler(e)} onMouseMove={(e)=>mouseMoveHandler(e)} className='container bg-info' style={{minHeight : "700px"}}>
        <div style={
                    {
                        position : "relative", 
                        top : top+"px", 
                        left : left+"px", 
                        height : "200px", 
                        width : "200px", 
                        backgroundColor : "#ccc", 
                        boxShadow : "5px 5px 5px #000", 
                        borderRadius : "10px", 
                        display : disp
                    }}>
                    
        </div>
    </div>
    </>
  )
}

export default Demo7