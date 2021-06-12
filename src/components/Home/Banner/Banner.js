import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../../../images/z/repaireman0.jpg';
const Banner = () => {
    return (
          <main style={{height:'600px'}} className="row d-flex align-items-center">
          <div className="col-md-4 offset-md-1">
              <h1 className="text-black" style={{color: '#212529'}}>WE OFFER SAME <br/> DAY SERVICE</h1>
              <p className="text-primary">We make it a priority to offer flexible services to accommoddate your needs.</p>
              <Link class="btn btn-danger" to="/servies">GET A QUOTE NOW</Link >
          </div>
          <div className="col-md-6 pt-5">
              <img src={BannerImg} alt="" className="img-fluid"/>
          </div>
      </main>
    );
};

export default Banner;