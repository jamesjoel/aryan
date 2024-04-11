import React from 'react'

const Signup = () => {
  return (
    <div className="container my-4" style={{minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-5">
                <div className="card">
                    <div className="card-header bg-dark">
                        <h4 className='text-light'>User Registration</h4>
                    </div>
                    <div className="card-body">
                        <div className="my-3">
                            <label>Full Name</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className="my-3">
                            <label>Username/Email</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className="my-3">
                            <label>Password</label>
                            <input type='password' className='form-control' />
                        </div>
                        <div className="my-3">
                            <label>Re-Password</label>
                            <input type='password' className='form-control' />
                        </div>
                        <div className="my-3">
                            <label>Address</label>
                            <textarea className='form-control' ></textarea>
                        </div>
                        <div className="my-3">
                            <label>City</label>
                            <select className='form-control' >
                                <option>Select</option>
                                <option>Indore</option>
                                <option>Mumbai</option>
                            </select>
                        </div>

                    </div>
                    <div className="card-footer">
                        <button type='submit' className='btn btn-success'>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup