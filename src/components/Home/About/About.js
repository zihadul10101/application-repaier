import React from 'react';
import aboutImg from '../../../images/z/about1.jpg';

const About = () => {
    return (
        <div className="row mt-2 ">
            <div className="col-md-6 text-center">
                <img src={aboutImg} alt="" />
            </div>
            <div className="col-md-4 mt-5 ">
                <p>About Our Company</p>
                <h3>How We Can Help you</h3>
                <p className="text-muted my-4 pr-md-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>
                <button className="btn-danger">Learn more</button>
            </div>
        </div>
    );
};

export default About;