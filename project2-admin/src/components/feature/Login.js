import React, {useState} from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import { API_URL } from '../../util/API_URL'
import { useNavigate } from 'react-router-dom'
import * as YUP from 'yup'

let AdminLoginSchema = YUP.object({
    username : YUP.string().required("Insert Your Admin Username"),
    password : YUP.string().required("Insert Your Admin Password")
})


const Login = () => {
    let [errMsg, setErrMsg] = useState("");
    let [showSpinner, setShowSpinner] = useState(false);
    let navigate = useNavigate();
    let loginFrm = useFormik({
        initialValues : {
            username : "",
            password : ""
        },
        validationSchema : AdminLoginSchema,
        onSubmit : (formdata)=>{
            setShowSpinner(true)
            axios.post(`${API_URL}/admin/auth`, formdata).then(response=>{
                if(response.data.success==true)
                {
                    localStorage.setItem("admin-token", response.data.token);
                    navigate("/admin");

                }
                else{
                    setShowSpinner(false)
                    setErrMsg("This User and Password not correct !");
                }
            })
        }
    })

  return (
    <>
        <div className='container mt-5'>
            <div className="row mt-4">
                <div className="col-md-6 offset-md-3 mt-5">
                    <form onSubmit={loginFrm.handleSubmit}>
                    <div className="card border">
                        <div className="card-header bg-dark text-light">
                            <h4>Administrator Login</h4>
                        </div>
                        <div className="card-body">
                            <div className="my-3">
                            <label>Username</label>
                            <input name='username' onChange={loginFrm.handleChange} type='text' className={'form-control '+ (loginFrm.errors.username && loginFrm.touched.username ? 'is-invalid' : '')} placeholder='Username' />
                            </div>
                            <div className="my-3">
                            <label>Password</label>
                            <input name='password' onChange={loginFrm.handleChange} type='password' className={'form-control '+ (loginFrm.errors.password && loginFrm.touched.password ? 'is-invalid' : '')} placeholder='Password' />
                            </div>
                            <p className='text-danger text-center'>{errMsg}</p>
                        </div>
                        <div className="card-footer bg-dark">
                            <button type='submit' className='btn btn-light'>Login {showSpinner ? <span className='spinner-border spinner-border-sm'></span> : ''} </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login