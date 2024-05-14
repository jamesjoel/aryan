import React from 'react'

const ProductBox = (props) => {
    return (
        <div className="col-md-6 col-lg-3 col-xl-3" >
            <div className="rounded position-relative fruite-item" >
                <div className="fruite-img">
                    <img src={'http://localhost:8080/products/'+props.info.image} style={{ height: "180px" }} className="img-fluid w-100 rounded-top" alt="" />
                </div>
                <div className="text-white bg-dark px-3 py-1 rounded position-absolute" style={{ top: "10px", left: "10px", backgroundColor : "#000" }}>{props.info.category}</div>
                <div className="p-4 border border-secondary border-top-0 rounded-bottom" >
                    <p>{props.info.title}</p>

                    <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$ {props.info.price} / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBox