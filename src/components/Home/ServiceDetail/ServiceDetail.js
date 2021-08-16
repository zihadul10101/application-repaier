import React from 'react';
import './ServiceDetail.css';
import { Link } from 'react-router-dom';

const ServiceDetail = (props) => {  
    const { imageUrl, name, price ,_id} = props.service;
    // console.log(props.service)
    return (
       
            <div className="col-md-4 pt-5 pb-5">
            <div className=" justify-content-center ">
                <div className="card d-flex pt-5 pb-20"  data-aos="zoom-in">
                    <img className="card-img-top mx-3" src={imageUrl} style={{ height: '80px' }} alt="Card image cap" />
                    <br />
                    <br />
                    <div className="card-body">
                        <br />
                        <h5 className="card-title">{name}</h5>
                        {<h4>{price}</h4>}
                        <Link className="btn btn-danger" to={`/booking/${_id}`} >BUY NOW</Link>
                        
                    </div>

                </div>
            </div>
        </div>
 

    );
};

export default ServiceDetail;