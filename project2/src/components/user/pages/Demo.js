import React from 'react'

const Demo = () => {
    // logic
    let a = "aryan";

    let check = true;

    let user = {
        name : "rohit",
        age : 25, 
        city : "indore"
    }

    let data = ["red", "green", "blue", "yellow", "pink"]

    let arr = [
        {
            name : "rohit",
            fee : 5000
        },
        {
            name : "gaurav",
            fee : 6000
        },
        {
            name : "amar",
            fee : 6500
        },
        {
            name : "jaya",
            fee : 5000
        },
        {
            name : "nidhi",
            fee : 8000
        },
        {
            name : "vijay",
            fee : 5500
        },
        {
            name : "nilesh",
            fee : 8300
        }
    ]
  
    /*
        JS -- for, while, do...while, for..of, for..in
        HOF --- .forEach, .map, .filter, .reduce (Array)
        conditional statement --- if, if...else, switch...case, ..


        Loop   =====>  but in JSX we have only one loop/HOF --- .map() ---- Listing
        condition ====> ternarry ope 

    */
  
  
    return (
    // we always return JSX code
    <div className="container my-5" style={{minHeight : "800px"}}>

        {
            check==false ? <h1>Aryan</h1> : <h1>Indore</h1>
        }

        <h2>Demo</h2>
        <h1>{ a }</h1>
        <h3>{ user.name + user.age }</h3>
        {
            data.map((item, index)=>{
                return(
                    <h3 key={index}>{item}</h3>
                )
            })           
        }
        

        <table className='table table-dark table-bordered table-hover table-striped'>
            <thead>

                <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Fee</th>
                </tr>
            </thead>
            <tbody>
                {
                    arr.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.fee}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
        
    </div>
  )
}

export default Demo