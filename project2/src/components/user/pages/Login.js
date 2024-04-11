import React from 'react'

const Login = () => {
  return (
    <div className="container my-4" style={{minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-5">
                <div className="card">
                    <div className="card-header bg-dark">
                        <h4 className='text-light'>User Login Page</h4>
                    </div>
                    <div className="card-body">
                        <div className="my-3">
                            <label>Username/Email</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className="my-3">
                            <label>Password</label>
                            <input type='password' className='form-control' />
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type='submit' className='btn btn-success'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login