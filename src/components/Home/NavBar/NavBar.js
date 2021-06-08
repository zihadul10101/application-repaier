import React from 'react';

import './NavBar.css';
import Logo from '../../../images/z/logo2.png';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-gray">

      <div class="container-fluid">

        <img alt="Logo"
          src={Logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        /> <strong>Applicance Repair</strong>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link  ms-5" aria-current="page" to="/home">Home</Link>
              </li>
             
              <li class="nav-item">
                <Link class="nav-link  ms-5" to="/servies"> Servies</Link >
              </li>
              <li class="nav-item">
                <Link class="nav-link  ms-5" to="/reviews">Reviews</Link >
              </li>
              <li class="nav-item">
                <Link class="nav-link  ms-5" to="/dashboard">Dashboard</Link >
              </li>
              <li class="nav-item">
                <Link class="nav-link  ms-5" to="/Contact">Contact Us</Link >
              </li>
              <li class="nav-item">
                <Link class="nav-link  ms-5" to="/login">LogIn</Link >
              </li>
               
            </ul>
           
         
        </div>
        </div>
      
    </nav>
  );
};

export default NavBar;