import React from 'react';


const BookingLists = (props) => {
    const { name, email, serviceName, servicePrice } = props.list;
    return (
        <div className="row">
              
                  
                        {servicePrice} 
                         {name}
                        {email}
                        {serviceName}
                
        </div>
    );
};

export default BookingLists;