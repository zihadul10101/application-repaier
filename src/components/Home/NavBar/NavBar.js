import React from 'react';
import './NavBar.css';
import Logo from '../../../images/z/logo2.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div >
{/* <!--Navbar --> */}
<nav className="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1">
  <a className="navbar-brand" href="/"><img alt="Logo"
          src={Logo}
          width="40"
          height="40"
          classNameName="d-inline-block align-top"
        /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/home">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/servies">Servies</Link>
      </li>
      <li className="nav-item">
      <Link to="/testimonial">Testimonial</Link>
      </li>
      <li>
      <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
      <Link to="/Contact">Contact Us</Link>
      </li>
      <li>
      <Link to="/login">LogIn</Link>
      </li>
    </ul>
    {/* <ul className="navbar-nav ml-auto nav-flex-icons">
      <li className="nav-item avatar">
        <a className="nav-link p-0" href="#">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" className="rounded-circle z-depth-0"
            alt="avatar image" height="35"/>
        </a>
      </li>
    </ul> */}
  </div>
</nav>

    </div>
  );
};

export default NavBar;