import React, {useState} from 'react'
import {useFormik} from 'formik'
import * as YUP from 'yup';
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'
import {useNavigate} from 'react-router-dom'

const LoginSchema = YUP.object({
    username : YUP.string().required("Insert Your Email/Username"),
    password : YUP.string().required("Insert Your Password")

})

const Login = () => {

    let navigate = useNavigate();

    let [errMsg, setErrMsg] = useState("");

    let loginForm = useFormik({
        validationSchema : LoginSchema,
        initialValues : {
            username : "",
            password : ""
        },
        onSubmit : (formdata)=>{
            //console.log(formdata)
            axios.post(`${API_URL}/user/auth`, formdata).then(response=>{

                //console.log(response.data);
                if(response.data.success==true)
                {
                    localStorage.setItem("access-token", response.data.token);
                    navigate("/");
                }   
                if(response.data.success == false && response.data.errType == 1)
                {
                    setErrMsg("Invalid Username and Password");
                }
                if(response.data.success==false && response.data.errType==2)
                {
                    setErrMsg("Invalid Password");
                }
                if(response.data.success==false && response.data.errType==3)
                {
                    setErrMsg("You are disabled now, pls contact your team !");
                }
            })
        }
        // localhost:8080/api/user/auth
    })


  return (
    <div className="container" style={{minHeight : "700px", marginTop : "200px"}}>
        <form onSubmit={loginForm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-5">
                <div className="card">
                    <div className="card-header bg-dark">
                        <h4 className='text-light'>User Login Page</h4>
                    </div>
                    <div className="card-body">
                        <div className="my-3">
                            <label>Username/Email</label>
                            <input name='username' onChange={loginForm.handleChange} type='text' className={'form-control '+( loginForm.errors.username && loginForm.touched.username ? 'is-invalid' : '')} />
                            {
                                loginForm.errors.username && loginForm.touched.username ? <small className='text-danger'>{loginForm.errors.username}</small> : ''
                            }
                        </div>
                        <div className="my-3">
                            <label>Password</label>
                            <input type='password' name='password' onChange={loginForm.handleChange} className={'form-control '+( loginForm.errors.password && loginForm.touched.password ? 'is-invalid' : '')} />
                            {
                                loginForm.errors.password && loginForm.touched.password ? <small className='text-danger'>{loginForm.errors.password}</small> : ''
                            }
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type='submit' className='btn btn-success'>Login</button>
                        <p className='text-danger mt-2 text-center'>{errMsg}</p>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Login

/*
    Web (Browser) --- localStorage 
                        1. it cant share with diff browser
                        2. it cant share with diff domain

*/