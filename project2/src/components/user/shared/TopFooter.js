import React from 'react'
import InfoBox from './InfoBox'

const TopFooter = () => {
    let infoData = [
        {
            title : "satisfied customers",
            num : "1963"
        },
        {
            title : "quality certificates",
            num : "41"
        },
        {
            title : "Available Products",
            num : "1458"
        },
        {
            title : "Available Products",
            num : "1458"
        },
    ]



  return (
    <div className="container-fluid py-5">
            <div className="container">
                <div className="bg-light p-5 rounded">
                    <div className="row g-4 justify-content-center">
                        {
                            infoData.map((item, index)=><InfoBox info={item} />   )
                        }                     
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TopFooter