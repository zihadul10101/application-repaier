import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <h3>About Us</h3>
                        <p>Praesent tincidunt vulputate, Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermentum lorem cursus, at vestibulum mentmt.</p>
                    </div>

                    <div className="col-md-4">
                        <h3>CONTACT</h3>
                        <ul>
                            <li>Phone: 01850649283</li>
                            <li>Fax: +(048) 880 440 110</li>
                            <li>Email: zihadul10101@gmail.com</li>
                            <li>Address: 124BP, cox's bazer</li>
                        </ul>
                    </div>
                    <div className="col-md-4 mt-5">
                        {/* <h3>LINKS</h3> */}

                        <ul className="mt-5" style={{textAlign: 'center'}}>
                            <div className="icon-bar ">
                                <a href="https://www.facebook.com/zihadul.islam.7140" className="facebook"><i className="fa fa-facebook"></i></a>
                                <a href="https://www.facebook.com/groups/188369399244817" className="twitter"><i className="fa fa-twitter"></i></a>
                                <a href="https://www.facebook.com/Donate-Help-To-All-Human-102198358052952" className="google"><i className="fa fa-google"></i></a>
                                <a href="https://www.youtube.com/watch?v=AKmoccuRiN4&t=25s" className="linkedin"><i className="fa fa-linkedin"></i></a>
                                <a href="https://www.youtube.com/watch?v=AKmoccuRiN4&t=25s" className="youtube"><i className="fa fa-youtube"></i></a>
                            </div>

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