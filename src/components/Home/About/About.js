import React from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import aboutImg from '../../../images/z/about1.jpg';
import { useEffect } from 'react';

const About = () => {
    useEffect(() =>{
        AOS.init();
    })
    return (
       <section className="about pt-5">
            <div className="row mt-2 slider ">
            <div className="col-md-5 text-center" data-aos="fade-up">
                <img style={{height: '500px', width:'400px' }} src={aboutImg} alt="" />
            </div>
            <div className="col-md-7 mt-5 " data-aos="fade-right" >
                <p>About Our Company</p>
                <h3>How We Can Help you</h3>
                <p className="text-muted my-4 pr-md-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>
                <button className="btn-danger" data-aos="flip-left">Learn more</button>
            </div>
           
        </div>
       </section>

    );
};

export default About;