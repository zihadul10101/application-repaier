import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,  faMapMarkerAlt, faPencilAlt, faPhone,  faTag, faUser} from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    return (
        // <!-- Section: Contact v.1 -->
<section className="my-5">

  {/* <!-- Section heading --> */}
  <h2 className="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
  {/* <!-- Section description --> */}
  <p className="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
    eum porro a pariatur veniam.</p>

  {/* <!-- Grid row --> */}
  <div className="row">

    {/* <!-- Grid column --> */}
    <div className="col-lg-5 mb-lg-0 mb-4">

      {/* <!-- Form with header --> */}
      <div className="card">
        <div className="card-body">
          {/* <!-- Header --> */}
          <div className="form-header blue accent-1">
            <h3 className="mt-2"><i> <FontAwesomeIcon icon={faEnvelope}/></i> Write to us:</h3>
          </div>
          <p className="dark-grey-text">We'll write rarely, but only the best content.</p>
          {/* <!-- Body --> */}
          <div className="md-form">
            <i className=" prefix grey-text"> <FontAwesomeIcon icon={faUser}/></i>
            <input type="text" id="form-name" className="form-control"/>
            <label for="form-name">Your name</label>
          </div>
          <div className="md-form">
            <i className=" prefix grey-text"><FontAwesomeIcon icon={faEnvelope}/></i>
            <input type="text" id="form-email" className="form-control"/>
            <label for="form-email">Your email</label>
          </div>
          <div className="md-form">
            <i className="prefix grey-text"><FontAwesomeIcon icon={faTag}/></i>
            <input type="text" id="form-Subject" className="form-control"/>
            <label for="form-Subject">Subject</label>
          </div>
          <div className="md-form">
            <i className=" prefix grey-text"><FontAwesomeIcon icon={faPencilAlt}/></i>
            <textarea id="form-text" className="form-control md-textarea" rows="3"></textarea>
            <label for="form-text">Send message</label>
          </div>
          <div className="text-center">
            <button className="btn btn-light-blue">Submit</button>
          </div>
        </div>
      </div>
      {/* <!-- Form with header --> */}

    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div className="col-lg-7">

      {/* <!--Google map--> */}
      <div id="map-container-section" className="z-depth-1-half map-container-section mb-4" style={{height: `400px`}}>
        <iframe className="w-100 h-100" src="https://maps.google.com/maps?q=Manhatan&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0"
          style={{border:`0`}} allowfullscreen></iframe>
      </div>
      {/* <!-- Buttons--> */}
      <div className="row text-center">
        <div className="col-md-4">
          <a className="btn-floating blue accent-1">
            <i className="fas fa-map-marker-alt"><FontAwesomeIcon icon={faMapMarkerAlt}/></i>
          </a>
          <p>New York, 94126</p>
          <p className="mb-md-0">United States</p>
        </div>
        <div className="col-md-4">
          <a className="btn-floating blue accent-1">
            <i><FontAwesomeIcon icon={faPhone}/></i>
          </a>
          <p>+ 01 234 567 89</p>
          <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
        </div>
        <div className="col-md-4">
          <a className="btn-floating blue accent-1">
            <i><FontAwesomeIcon icon={faEnvelope}/></i>
          </a>
          <p>info@gmail.com</p>
          <p className="mb-0">sale@gmail.com</p>
        </div>
      </div>

    </div>
    {/* <!-- Grid column --> */}

  </div>
  {/* <!-- Grid row --> */}

</section>
// {/* <!-- Section: Contact v.1 --> */}
    );
};

export default Contact;