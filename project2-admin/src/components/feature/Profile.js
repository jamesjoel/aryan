import React, { useEffect, useState, useRef } from 'react';
import { useFormik } from 'formik'
import axios from 'axios'
import { API_URL } from '../../util/API_URL'

const Profile = () => {

    let closeBtn1 = useRef();
    let closeBtn2 = useRef();

    let [profile, setProfile] = useState({});

    useEffect(()=>{
        axios.get(`${API_URL}/admin/profile/username`).then(response=>{
            setProfile(response.data.result);
        })
    },[])



    let usernameForm = useFormik({
        initialValues : {
            username : ""
        },
        onSubmit : (formdata)=>{
            axios.post(`${API_URL}/admin/profile/username`, formdata).then(response=>{
                console.log(response.data);
                closeBtn1.current.click();
            })
        }
    })

    let passwordForm = useFormik({
        initialValues : {
            password : ""
        },
        onSubmit : (formdata)=>{
            axios.post(`${API_URL}/admin/profile/password`, formdata).then(response=>{
                console.log(response.data);
                closeBtn2.current.click();
            })
        }
    })


    return (
        <>
        <div className="d-xl-flex justify-content-between align-items-start">
            <div className='container'>
                
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className="text-dark font-weight-bold mb-2"> Administrator Profile </h2>

                        <div className='row'>
                            <div className='col-md-7 mt-5'>
                                <table className="table table-dark table-bordered table-hover">
                                    <tbody>
                                        <tr>
                                            <td>Username</td>
                                            <td>{profile.username}</td>
                                            <td><button data-toggle="modal" data-target="#usernameModal" className='btn btn-sm btn-light'>Change</button></td>

                                        </tr>
                                        <tr>
                                            <td>Password</td>
                                            <td>&#8226;&#8226;&#8226;&#8226;&#8226;</td>
                                            <td><button data-toggle="modal" data-target="#passwordModal" className='btn btn-sm btn-light'>Change</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>

        <div id='usernameModal' className='modal fade'>
            <form onSubmit={usernameForm.handleSubmit}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6>Change Your Username</h6>
                    </div>
                    <div className="modal-body">
                        <label>New Username</label>
                        <input name='username' onChange={usernameForm.handleChange} type='text' className='form-control' />
                    </div>
                    <div className="modal-footer">
                        <button  type='submit' className='btn btn-success'>Update</button>
                        <button ref={closeBtn1} data-dismiss="modal" className='btn btn-danger'>Close</button>
                    </div>
                </div>
            </div>
            </form>
        </div>

        <div id='passwordModal' className='modal fade'>
            <form onSubmit={passwordForm.handleSubmit}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6>Change Your Password</h6>
                    </div>
                    <div className="modal-body">
                        <label>New Password</label>
                        <input name='password' onChange={passwordForm.handleChange} type='password' className='form-control' />
                    </div>
                    <div className="modal-footer">
                        <button  type='submit' className='btn btn-success'>Update</button>
                        <button ref={closeBtn2} data-dismiss="modal" className='btn btn-danger'>Close</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}

export default Profile