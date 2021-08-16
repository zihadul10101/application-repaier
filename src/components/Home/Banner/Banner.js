import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import BannerImg from '../../../images/z/repaireman0.jpg';
const Banner = () => {
    return (
        <section className="banner">
            <main style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1" data-aos="fade-left" >
                    <h1 className="text-black" style={{ color: '#212529' }}>WE OFFER SAME <br /> DAY SERVICE</h1>
                    <p className="text-primary">We make it a priority to offer flexible services to accommoddate your needs.</p>
                    <Link class="btn btn-danger" to="/servies"  data-aos="zoom-in-down">GET A QUOTE NOW</Link >
                </div>
                <div className="col-md-6 pt-5" data-aos="fade-up-left" data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    <img src={BannerImg} alt="" className="img-fluid" />
                </div>
            </main>
        </section>
    );
};

export default Banner;