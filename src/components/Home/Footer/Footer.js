import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faPhone, faPrint} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGooglePlus, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        // <!-- Footer -->
<footer className="page-footer font-small mdb-color pt-4" style={{backgroundColor:'gold'}}>

  {/* <!-- Footer Links --> */}
  <div className="container text-center text-md-left">

    {/* <!-- Footer links --> */}
    <div className="row text-center text-md-left mt-3 pb-3">

      {/* <!-- Grid column --> */}
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>
      </div>
      {/* <!-- Grid column --> */}

      <hr className="w-100 clearfix d-md-none"/>

      {/* <!-- Grid column --> */}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
        <p>
          <a href="/">Home</a>
        </p>
        <p>
          <a href="/about">About</a>
        </p>
        <p>
          <a href="/Contact">Contact</a>
        </p>
        <p>
          <a href="/login">LogIn</a>
        </p>
      </div>
      {/* <!-- Grid column --> */}

      <hr className="w-100 clearfix d-md-none"/>

      {/* <!-- Grid column --> */}
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
        <p>
          <a href="/">Your Account</a>
        </p>
        <p>
          <a href="/blog">Blog</a>
        </p>
        <p>
          <a href="/">Shipping Rates</a>
        </p>
        <p>
          <a href="/Contact">Help</a>
        </p>
      </div>

      {/* <!-- Grid column --> */}
      <hr className="w-100 clearfix d-md-none"/>

      {/* <!-- Grid column --> */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p>
          <i className=" mr-3"> <FontAwesomeIcon icon={faHome} /></i> New York, NY 10012, US</p>
        <p>
          <i><FontAwesomeIcon icon={faEnvelope} /></i> info@gmail.com</p>
        <p>
          <i className=" mr-3"><FontAwesomeIcon icon={faPhone} /></i> + 01 234 567 88</p>
        <p>
          <i className=" mr-3"><FontAwesomeIcon icon={faPrint} /></i> + 01 234 567 89</p>
      </div>

    </div>
    {/* <!-- Footer links --> */}

    <hr />

    {/* <!-- Grid row --> */}
    <div className="row d-flex align-items-center">
{/* 
      <!-- Grid column --> */}
      <div className="col-md-7 col-lg-8">

        {/* <!--Copyright--> */}
        <p className="text-center text-md-left">© 2020 Copyright:
          <a href="https://zihadul-islam.web.app.com/">
            <strong>https://zihadul-islam.web.app.com</strong>
          </a>
        </p>

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div className="col-md-5 col-lg-4 ml-lg-0">

        {/* <!-- Social buttons --> */}
        <div className="text-center text-md-right">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i><FontAwesomeIcon icon={faFacebook} /></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i><FontAwesomeIcon icon={faTwitter} /></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i><FontAwesomeIcon icon={faGooglePlus} /></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i><FontAwesomeIcon icon={faLinkedin} /></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row --> */}

  </div>
  {/* <!-- Footer Links --> */}

</footer>
// {/* <!-- Footer --> */}
    );
};

export default Footer;