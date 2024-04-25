import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../util/API_URL'

const ProductList = () => {
  let [allPro, setAllPro] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}/product`).then(response => {
      setAllPro(response.data);
    })
  }, [])
  return (
    <div className="d-xl-flex justify-content-between align-items-start">
      
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className="text-dark font-weight-bold mb-2">Product List</h2>
            <table className='table table-dark'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {
                  allPro.map((item, index)=>{
                    return(
                      <tr key={index}>
                          <td>{index+1}</td>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                          <td>{item.category}</td>
                      </tr>

                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList