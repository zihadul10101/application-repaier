import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = (props) => {
    const { imageUrl, name, price } = props.service;
    // console.log(props.service)

    return (
      
        <div className="col-md-4 pb-5">
            <div className=" justify-content-center ">
                <div className="card d-flex pt-5 ">
                    <img style={{ height: '80px' }} src={imageUrl} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h4>{price}</h4>
                        <button className="btn-danger">Book Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;