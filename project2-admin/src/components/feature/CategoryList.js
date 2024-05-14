import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import { API_URL } from '../../util/API_URL'


const CategoryList = () => {

    let closeBtn = useRef();

    let [allCategory, setAllCategory] = useState([]);
    let [cate, setCate] = useState({});

    useEffect(()=>{
        axios.get(`${API_URL}/category`).then(response=>{
            setAllCategory(response.data);
        })
    },[])


    let askDelete = (obj)=>{
        setCate(obj);
    }

    let confDelete = ()=>{
        // call the delete api
        axios.delete(`${API_URL}/category/${cate._id}`).then(response=>{
            // modal close
            closeBtn.current.click();
            // delete category form allCategory array
            setAllCategory(()=>{
                return allCategory.filter(item=> item._id != cate._id);
            })
        })
    }
  return (
    <>
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
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allCategory.map((item, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{item.name}</td>
                                            <td><button className='btn btn-info btn-sm'>Edit</button></td>
                                            <td><button onClick={()=>askDelete(item)} data-toggle="modal" data-target="#delModal" className='btn btn-danger btn-sm'>Delete</button></td>
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
    
    <div className="modal fade" id="delModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className='text-dark'>Delete Category</h4>
                </div>
                <div className="modal-body">
                    <p className='text-dark'>Are you sure want to delete { cate ? <b>{cate.name}</b> : "" } </p>
                </div>
                <div className="modal-footer">
                    <button className='btn btn-danger' onClick={confDelete}>Confirm Delete</button>
                    <button data-dismiss="modal" ref={closeBtn} className='btn btn-warning'>Close</button>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CategoryList

/*
   1. useEffect(()=>{
        code will run every time when any state change
    })

   2. useEffect(()=>{
        code run only when component-did-mount
    },[])


   3. useEffect(()=>{
        code will run every time when state1 or state2 will change
    },[state1, state2])




    let x = useRef();

    x.cerrent

    <h2 ref={x}>Aryan</h2>





    State 
        let [x, setX] = useState(10)

        1.  setX(20)

        2.  setX(()=>{
                if(check){
                    return 100;
                }
                else{
                    return 200;
                }
            })


    .filter --- Heigher Order Fn, its only worked an Array

    let data = [15, 12, 7, 18, 3, 6, 14, 9, 2];

    let newdata = data.filter(item => item != 14);

    []


*/