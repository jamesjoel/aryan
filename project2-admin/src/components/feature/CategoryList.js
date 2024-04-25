import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { API_URL } from '../../util/API_URL'


const CategoryList = () => {

    let [allCategory, setAllCategory] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/category`).then(response=>{
            setAllCategory(response.data);
        })
    })

  return (
    <div className="d-xl-flex justify-content-between align-items-start">
              
              <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                    <h2 className="text-dark font-weight-bold mb-2">Category List</h2>
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Category Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allCategory.map((item, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{item.name}</td>
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

export default CategoryList