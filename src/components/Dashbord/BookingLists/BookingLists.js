import React from 'react';
import './BookingLists.css';

const BookingLists = (props) => {
    const { name, email, serviceName, servicePrice } = props.list;

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
    return (

        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{serviceName}  </td>
            <td>{servicePrice}  </td>
            <td> <div className="dropdown">
                <button onclick="myFunction()" className="dropbtn">Dropdown</button>
                <div id="myDropdown" className="dropdown-content">
                    <a href="#home">On Going</a>
                    <a href="#about">Panding</a>
                    <a href="#contact">Done</a>
                </div>
            </div>
            </td>
        </tr >




    );
};

export default BookingLists;