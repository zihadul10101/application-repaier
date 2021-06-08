import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">

                    <div className="col">
                        <h3>About Us</h3>
                        <p>Praesent tincidunt vulputate, Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermentum lorem cursus, at vestibulum mentmt.</p>
                    </div>

                    <div className="col">
                        <h3>CONTACT</h3>
                        <ul>
                            <li>Phone: 01850649283</li>
                            <li>Fax: +(048) 880 440 110</li>
                            <li>Email: zihadul10101@gmail.com</li>
                            <li>Address: 124BP, Lacasa Ave New York</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>LINKS</h3>

                        <ul>
                            <a href="">servies</a>
                            <br />
                            <a href="">reviews</a>
                            <br />
                            <a href="">about</a>
                            <br />
                            <a href="">blog</a>

                        </ul>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} THICC MEMES INS |All right reserved | Terms of Serivce | Privacy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;