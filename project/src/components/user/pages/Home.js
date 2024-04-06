import React from 'react'

const Home = () => {
  return (
    <>
    <section id="selling-products" className="product-store bg-light-grey padding-large">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Best selling products</h2>
        </div>
        <ul className="tabs list-unstyled">
          <li data-tab-target="#all" className="active tab">All</li>
          <li data-tab-target="#shoes" className="tab">Shoes</li>
          <li data-tab-target="#tshirts" className="tab">Tshirts</li>
          <li data-tab-target="#pants" className="tab">Pants</li>
          <li data-tab-target="#hoodie" className="tab">Hoodie</li>
          <li data-tab-target="#outer" className="tab">Outer</li>
          <li data-tab-target="#jackets" className="tab">Jackets</li>
          <li data-tab-target="#accessories" className="tab">Accessories</li>
        </ul>
        <div className="tab-content">
          <div id="all" data-tab-content className="active">
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products1.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Half sleeve T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products2.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Stylish Grey T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products3.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Silk White Shirt</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products4.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Grunge Hoodie</a>
                  </h3>
                  <div className="item-price text-primary">$30.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products5.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Full sleeve Jeans jacket</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products6.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Grey Check Coat</a>
                  </h3>
                  <div className="item-price text-primary">$30.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products7.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Long Sleeve T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products8.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Half Sleeve T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products13.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Orange white Nike</a>
                  </h3>
                  <div className="item-price text-primary">$55.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products14.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Running Shoe</a>
                  </h3>
                  <div className="item-price text-primary">$65.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products15.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Tennis Shoe</a>
                  </h3>
                  <div className="item-price text-primary">$80.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products16.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Nike Brand Shoe</a>
                  </h3>
                  <div className="item-price text-primary">$65.00</div>
                </div>
              </div>
            </div>
          </div>
          <div id="shoes" data-tab-content>
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products13.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Orange white Nike</a>
                  </h3>
                  <div className="item-price text-primary">$55.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products14.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Running Shoe</a>
                  </h3>
                  <div className="item-price text-primary">$65.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products15.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Tennis Shoe</a>
                  </h3>
                  <div className="item-price text-primary">$80.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products16.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Nike Brand Shoe</a>
                  </h3>
                  <div className="item-price text-primary">$65.00</div>
                </div>
              </div>
            </div>
          </div>
          <div id="tshirts" data-tab-content>
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products3.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Silk White Shirt</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products8.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">White Half T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$30.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products5.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Ghee Half T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products7.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Long Sleeve T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
            </div>
          </div>
          <div id="pants" data-tab-content>
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products1.jpg" alt="Books" className="product-image /" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Half sleeve T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products4.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Grunge Hoodie</a>
                  </h3>
                  <div className="item-price text-primary">$30.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products7.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Long Sleeve T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products2.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Stylish Grey Pant</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
            </div>
          </div>
          <div id="hoodie" data-tab-content>
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products17.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">White Hoodie</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products4.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Navy Blue Hoodie</a>
                  </h3>
                  <div className="item-price text-primary">$45.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products18.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Dark Green Hoodie</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
            </div>
          </div>
          <div id="outer" data-tab-content>
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products3.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Silk White Shirt</a>
                  </h3>
                  <div className="item-price text-primary">$ 35.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products4.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Grunge Hoodie</a>
                  </h3>
                  <div className="item-price text-primary">$ 30.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products6.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Grey Check Coat</a>
                  </h3>
                  <div className="item-price text-primary">$ 30.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products7.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Long Sleeve T-shirt</a>
                  </h3>
                  <div className="item-price text-primary">$ 40.00</div>
                </div>
              </div>
            </div>
          </div>
          <div id="jackets" data-tab-content>
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products5.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Full Sleeve Jeans Jacket</a>
                  </h3>
                  <div className="item-price text-primary">$40.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products2.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Stylish Grey Coat</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products6.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Grey Check Coat</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
            </div>
          </div>
          <div id="accessories" data-tab-content>
            <div className="row d-flex flex-wrap">
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products19.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Stylish Women Bag</a>
                  </h3>
                  <div className="item-price text-primary">$35.00</div>
                </div>
              </div>
              <div className="product-item col-lg-3 col-md-6 col-sm-6">
                <div className="image-holder">
                  <img src="/assets/images/selling-products20.jpg" alt="Books" className="product-image" />
                </div>
                <div className="cart-concern">
                  <div className="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" className="view-btn tooltip
                        d-flex">
                      <i className="icon icon-screen-full"></i>
                      <span className="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" className="wishlist-btn">
                      <i className="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="product-title">
                    <a href="single-product.html">Stylish Gadgets</a>
                  </h3>
                  <div className="item-price text-primary">$30.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home