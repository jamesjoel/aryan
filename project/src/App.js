import React, {useState, useEffect} from 'react'


const App = () => {
  let [content, setContent] = useState("post")

  useEffect(()=>{
    console.log("****")
    return ()=>{
      console.log("$$$$$$$$$")
    }
  })
  useEffect(()=>{
    console.log("####")
  },[])

  return (
    <>
      <button onClick={()=>setContent("post")}>POST</button>
      <button onClick={()=>setContent("comment")}>COMMENT</button>
      <button onClick={()=>setContent("user")}>USER</button>
      <h1>{content}</h1>
    </>
  )
}

export default App