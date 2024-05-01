import React, {useState} from 'react'
import {useFormik} from 'formik'
import * as YUP from 'yup'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'

let signupSchema = YUP.object({
    name : YUP.string().required("Insert Your Full Name"),
    email : YUP.string().required("Insert Your Email Id"),
    password : YUP.string().required("Insert Your Password"),
    repass : YUP.string().required("Insert Your Re-Password"),
    address : YUP.string().required("Insert Your Address"),
    city : YUP.string().required("Select Your City"),
    contact : YUP.string().required("Insert Your Contact Number"),
})

const Signup = () => {
    let [signupSuccess, setSignupSuccess] = useState(false);
    let [showSpinner, setShowSpinner] = useState(false);
    let userForm = useFormik({
        validationSchema : signupSchema,
        initialValues : {
            name : "",
            email : "",
            password : "",
            repass : "",
            address : "",
            city : "",
            contact : ""
        },
        onSubmit : (formdata)=>{
            setShowSpinner(true);
            axios.post(`${API_URL}/signup`, formdata).then(response=>{
                // console.log(response.data);
                if(response.data.success==true){
                    setSignupSuccess(true);
                }
            })
        }
    })



  return (
    <div className="container" style={{minHeight : "700px", marginTop : "200px"}}>
        <form onSubmit={userForm.handleSubmit}>
        <div className="row">            
            <div className="col-md-6 offset-md-3 mt-5">
                {
                    signupSuccess==true
                    ?
                    <div className='alert alert-info'>
                    You are successfuly Signup with our Websitte.... If You want to Login Click Here !
                    </div>
                    :
                    <div className="card">
                    <div className="card-header bg-dark">
                        <h4 className='text-light'>User Registration</h4>
                    </div>
                    <div className="card-body">
                        <div className="my-3">
                            <label>Full Name</label>
                            <input name='name' onChange={userForm.handleChange} type='text' className={'form-control ' + (userForm.errors.name && userForm.touched.name ? 'is-invalid' : '')} />
                            {
                                userForm.errors.name && userForm.touched.name ? <small className='text-danger'>{userForm.errors.name}</small> : ''
                            }
                        </div>
                        <div className="my-3">
                            <label>Username/Email</label>
                            <input name='email' onChange={userForm.handleChange}  type='text' className={'form-control ' + (userForm.errors.email && userForm.touched.email ? 'is-invalid' : '')} />
                            {
                                userForm.errors.email && userForm.touched.email ? <small className='text-danger'>{userForm.errors.email}</small> : ''
                            }
                        </div>
                        <div className="my-3">
                            <label>Password</label>
                            <input name='password' onChange={userForm.handleChange} type='password' className={'form-control ' + (userForm.errors.password && userForm.touched.password ? 'is-invalid' : '')} />
                            {
                                userForm.errors.password && userForm.touched.password ? <small className='text-danger'>{userForm.errors.password}</small> : ''
                            }
                        </div>
                        <div className="my-3">
                            <label>Re-Password</label>
                            <input name='repass' onChange={userForm.handleChange} type='password' className={'form-control ' + (userForm.errors.repass && userForm.touched.repass ? 'is-invalid' : '')} />
                            {
                                userForm.errors.repass && userForm.touched.repass ? <small className='text-danger'>{userForm.errors.repass}</small> : ''
                            }

                        </div>
                        <div className="my-3">
                            <label>Contact</label>
                            <input type='text' name='contact' onChange={userForm.handleChange} className={'form-control ' + (userForm.errors.contact && userForm.touched.contact ? 'is-invalid' : '')} />
                            {
                                userForm.errors.contact && userForm.touched.contact ? <small className='text-danger'>{userForm.errors.contact}</small> : ''
                            }
                        </div>
                        <div className="my-3">
                            <label>Address</label>
                            <textarea name='address' onChange={userForm.handleChange} className={'form-control ' + (userForm.errors.address && userForm.touched.address ? 'is-invalid' : '')} ></textarea>
                            {
                                userForm.errors.address && userForm.touched.address ? <small className='text-danger'>{userForm.errors.address}</small> : ''
                            }
                        </div>
                        <div className="my-3">
                            <label>City</label>
                            <select name='city' onChange={userForm.handleChange}  className={'form-control ' + (userForm.errors.city && userForm.touched.city ? 'is-invalid' : '')} >
                                <option>Select</option>
                                <option>Indore</option>
                                <option>Mumbai</option>
                                <option>Delhi</option>
                                <option>Bhopal</option>
                            </select>
                            {
                                userForm.errors.city && userForm.touched.city ? <small className='text-danger'>{userForm.errors.city}</small> : ''
                            }
                        </div>

                    </div>
                    <div className="card-footer">
                        <button type='submit' className='btn btn-success'>Signup { showSpinner ? <span className='spinner-border spinner-border-sm'></span> : ''}</button>
                    </div>
                </div>
                }
                
                
            </div>
        </div>
        </form>
    </div>
  )
}

export default Signup