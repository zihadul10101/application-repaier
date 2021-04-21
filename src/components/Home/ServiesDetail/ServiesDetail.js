import React from 'react';

const ServiesDetail = (props) => {
    const {img,name}=props.service;
    return (
        <div className="col-md-4 text-center">
        <img style={{height: '50px'}} src={img} alt="" />
        <h5 className="mt-3 mb-3">{name}</h5>
        <button className="btn btn-primary">explore</button>
        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
    </div>
    );
};

export default ServiesDetail;