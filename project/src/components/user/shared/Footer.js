import React from 'react'

const Footer = () => {
  return (
    <>
    <section id="shipping-information">
      
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center justify-content-between">
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-truck"></i>
              <h4 className="block-title">
                <strong>Free shipping</strong> Over $200
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-return"></i>
              <h4 className="block-title">
                <strong>Money back</strong> Return within 7 days
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-tags1"></i>
              <h4 className="block-title">
                <strong>Buy 4 get 5th</strong> 50% off
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-help_outline"></i>
              <h4 className="block-title">
                <strong>Any questions?</strong> experts are ready
              </h4>
            </div>
          </div>
        </div>
      </div>
      
    </section>

    <footer id="footer">
      <div className="container">
        <div className="footer-menu-list">
          <div className="row d-flex flex-wrap justify-content-between">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Ultras</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item">
                    <a href="about.html">About us</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Conditions </a>
                  </li>
                  <li className="menu-item">
                    <a href="blog.html">Our Journals</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Careers</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Affiliate Programme</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Ultras Press</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Customer Service</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item">
                    <a href="faqs.html">FAQ</a>
                  </li>
                  <li className="menu-item">
                    <a href="contact.html">Contact</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Returns & Refunds</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Cookie Guidelines</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Delivery Information</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Contact Us</h5>
                <p>Do you have any questions or suggestions? <a href="#" className="email">ourservices@ultras.com</a>
                </p>
                <p>Do you need assistance? Give us a call. <br/>
                  <strong>+57 444 11 00 35</strong>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Forever 2018</h5>
                <p>Cras mattis sit ornare in metus eu amet adipiscing enim. Ullamcorper in orci, ultrices integer eget arcu. Consectetur leo dignissim lacus, lacus sagittis dictumst.</p>
                <div className="social-links">
                  <ul className="d-flex list-unstyled">
                    <li>
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-youtube-play"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-behance-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </footer>

    <div id="footer-bottom">
      <div className="container">
        <div className="d-flex align-items-center flex-wrap justify-content-between">
          <div className="copyright">
            <p>Freebies by <a href="https://templatesjungle.com/">Templates Jungle</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
            </p>
          </div>
          <div className="payment-method">
            <p>Payment options :</p>
            <div className="card-wrap">
              <img src="/assets/images/visa-icon.jpg" alt="visa" />
              <img src="/assets/images/mastercard.png" alt="mastercard" />
              <img src="/assets/images/american-express.jpg" alt="american-express" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer