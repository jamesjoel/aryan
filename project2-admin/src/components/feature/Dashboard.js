import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../util/API_URL'

const Dashboard = () => {
  let [totalPro, setTotalPro] = useState(0);
  let [totalUser, setTotalUser] = useState(0);

  useEffect(()=>{
    axios.get(`${API_URL}/product/total`).then(response=>{
      setTotalPro(response.data.total);
    })
  },[])
  useEffect(()=>{
    axios.get(`${API_URL}/user/info/total`).then(response=>{
      setTotalUser(response.data.total);
    })
  },[])


  return (
    <>
    <div className="d-xl-flex justify-content-between align-items-start">
              <h2 className="text-dark font-weight-bold mb-2"> Overview dashboard </h2>
              <div className="d-sm-flex justify-content-xl-between align-items-center mb-2">
                
                
                  <button className="btn bg-white p-3 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-calendar mr-1"></i>24 Mar 2019 - 24 Mar 2019 </button>
                  
                
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
               
                <div className="tab-content tab-transparent-content">
                  <div className="tab-pane fade show active" id="business-1" role="tabpanel" aria-labelledby="business-tab">
                    <div className="row">

                      <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body text-center">
                            <h5 className="mb-2 text-dark font-weight-normal">Products</h5>
                            <h2 className="mb-4 text-dark font-weight-bold">{totalPro}</h2>
                            <br />
                            <div className="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent"><i className="mdi mdi-lightbulb icon-md absolute-center text-dark"></i></div>
                            <p className="mt-4 mb-0">Total Products in aur Application</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body text-center">
                            <h5 className="mb-2 text-dark font-weight-normal">Orders</h5>
                            <h2 className="mb-4 text-dark font-weight-bold">932.00</h2>
                            <br />
                            <div className="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent"><i className="mdi mdi-lightbulb icon-md absolute-center text-dark"></i></div>
                            <p className="mt-4 mb-0">Total Products in aur Application</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body text-center">
                            <h5 className="mb-2 text-dark font-weight-normal">Users</h5>
                            <h2 className="mb-4 text-dark font-weight-bold">{totalUser}</h2>
                            <br />
                            <div className="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent"><i className="mdi mdi-lightbulb icon-md absolute-center text-dark"></i></div>
                            <p className="mt-4 mb-0">Total Products in aur Application</p>
                          </div>
                        </div>
                      </div>
                      
                      
                     
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Dashboard