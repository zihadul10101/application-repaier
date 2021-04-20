import React from 'react';
import topbanner from '../../../images/top-banner.png';
const HeaderMain = () => {
    return (
        <main  style={{height:'600px'}} className="row align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: 'red' }}>Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary">We have 30+ years of experiences for give you better quality results..</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
            <img src={topbanner} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;