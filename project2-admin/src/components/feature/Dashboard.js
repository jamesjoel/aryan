import React from 'react'

const Dashboard = () => {
  return (
    <>
    <div className="d-xl-flex justify-content-between align-items-start">
              <h2 className="text-dark font-weight-bold mb-2"> Overview dashboard </h2>
              <div className="d-sm-flex justify-content-xl-between align-items-center mb-2">
                <div className="btn-group bg-white p-3" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-link text-light py-0 border-right">7 Days</button>
                  <button type="button" className="btn btn-link text-dark py-0 border-right">1 Month</button>
                  <button type="button" className="btn btn-link text-light py-0">3 Month</button>
                </div>
                <div className="dropdown ml-0 ml-md-4 mt-2 mt-lg-0">
                  <button className="btn bg-white dropdown-toggle p-3 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-calendar mr-1"></i>24 Mar 2019 - 24 Mar 2019 </button>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton1">
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="d-sm-flex justify-content-between align-items-center transaparent-tab-border {">
                  <ul className="nav nav-tabs tab-transparent" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link" id="home-tab" data-toggle="tab" href="#" role="tab" aria-selected="true">Users</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" id="business-tab" data-toggle="tab" href="#business-1" role="tab" aria-selected="false">Business</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="performance-tab" data-toggle="tab" href="#" role="tab" aria-selected="false">Performance</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="conversion-tab" data-toggle="tab" href="#" role="tab" aria-selected="false">Conversion</a>
                    </li>
                  </ul>
                  <div className="d-md-block d-none">
                    <a href="#" className="text-light p-1"><i className="mdi mdi-view-dashboard"></i></a>
                    <a href="#" className="text-light p-1"><i className="mdi mdi-dots-vertical"></i></a>
                  </div>
                </div>
                <div className="tab-content tab-transparent-content">
                  <div className="tab-pane fade show active" id="business-1" role="tabpanel" aria-labelledby="business-tab">
                    <div className="row">
                      <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body text-center">
                            <h5 className="mb-2 text-dark font-weight-normal">Orders</h5>
                            <h2 className="mb-4 text-dark font-weight-bold">932.00</h2>
                            <div className="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent"><i className="mdi mdi-lightbulb icon-md absolute-center text-dark"></i></div>
                            <p className="mt-4 mb-0">Completed</p>
                            <h3 className="mb-0 font-weight-bold mt-2 text-dark">5443</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body text-center">
                            <h5 className="mb-2 text-dark font-weight-normal">Unique Visitors</h5>
                            <h2 className="mb-4 text-dark font-weight-bold">756,00</h2>
                            <div className="dashboard-progress dashboard-progress-2 d-flex align-items-center justify-content-center item-parent"><i className="mdi mdi-account-circle icon-md absolute-center text-dark"></i></div>
                            <p className="mt-4 mb-0">Increased since yesterday</p>
                            <h3 className="mb-0 font-weight-bold mt-2 text-dark">50%</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3  col-lg-6 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body text-center">
                            <h5 className="mb-2 text-dark font-weight-normal">Impressions</h5>
                            <h2 className="mb-4 text-dark font-weight-bold">100,38</h2>
                            <div className="dashboard-progress dashboard-progress-3 d-flex align-items-center justify-content-center item-parent"><i className="mdi mdi-eye icon-md absolute-center text-dark"></i></div>
                            <p className="mt-4 mb-0">Increased since yesterday</p>
                            <h3 className="mb-0 font-weight-bold mt-2 text-dark">35%</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body text-center">
                            <h5 className="mb-2 text-dark font-weight-normal">Followers</h5>
                            <h2 className="mb-4 text-dark font-weight-bold">4250k</h2>
                            <div className="dashboard-progress dashboard-progress-4 d-flex align-items-center justify-content-center item-parent"><i className="mdi mdi-cube icon-md absolute-center text-dark"></i></div>
                            <p className="mt-4 mb-0">Decreased since yesterday</p>
                            <h3 className="mb-0 font-weight-bold mt-2 text-dark">25%</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 grid-margin">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                  <h4 className="card-title mb-0">Recent Activity</h4>
                                 
                                </div>
                              </div>
                              
                            </div>
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