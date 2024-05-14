import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../util/API_URL'

const Users = () => {
    let [allUsers, setAllUsers] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/admin/users`).then(response=>{
            setAllUsers(response.data);
        })
    },[])


    let change = (obj)=>{
        let newobj={};
        let status;
        if(obj.status==1)
        {
            status = 0;
            newobj = { status : status, _id : obj._id }
        }
        else
        {
            status = 1;
            newobj = { status : status, _id : obj._id }
        }
        axios.post(`${API_URL}/admin/users/changestatus`, newobj).then(response=>{
            setAllUsers(()=>{
                return allUsers.map(item=>{
                    if(item._id == obj._id)
                        {
                            item.status = status;
                        }
                    return item;
                });
            });
        })
    }

    return (
        <div className="d-xl-flex justify-content-between align-items-start">

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className="text-dark font-weight-bold mb-2">List of All Registered User</h2>
                        <table className="table table-dark table-bordered">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Status</th>
                                    <th>Change</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUsers.map((item, index)=><tr>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.status==1 ? 'Enable' : 'Disable'}</td>
                                        <td><button onClick={()=>change(item)} className='btn btn-info btn-sm'>Change</button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users