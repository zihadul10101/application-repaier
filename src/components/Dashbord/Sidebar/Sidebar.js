import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faListUl, faUserCircle, faFileMedical } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    const [user,setUser] =useState(null);
    const [admin,setAdmin]=useState(null);
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 pt-10 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
            <li>
                    <Link to="/profile" className="text-white">
                        <FontAwesomeIcon icon={faUserCircle} /> <span>Profile</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/orderList" className="text-white">
                        <FontAwesomeIcon icon={faListUl} /> <span>Order List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/addServies"  className="text-white">
                        <FontAwesomeIcon icon={faFileMedical} /> <span>Add Servies</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/makeAdmin" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageServices" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Manage Service</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Back To Home</span></Link>
            </div>


{/* {user &&
      <li>
      <Link to="/profile" className="text-white">
          <FontAwesomeIcon icon={faUserCircle} /> <span>Profile</span> 
      </Link>
  </li>
  <li>
      <Link to="/dashboard/orderList" className="text-white">
          <FontAwesomeIcon icon={faListUl} /> <span>Order List</span> 
      </Link>
  </li>
  <li>
      <Link to="/addServies"  className="text-white">
          <FontAwesomeIcon icon={faFileMedical} /> <span>Add Servies</span>
      </Link>
  </li>
} */}

            
        </div>
    );
};

export default Sidebar;