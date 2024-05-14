import React from 'react'

const InfoBox = (props) => {
    return (
        <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="counter bg-white rounded p-5">
                <i className="fa fa-users text-secondary"></i>
                <h4>{props.info.title}</h4>
                <h1>{props.info.num}</h1>
            </div>
        </div>
    )
}

export default InfoBox