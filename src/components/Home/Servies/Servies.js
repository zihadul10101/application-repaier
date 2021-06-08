import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/ContextProvider';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Servies = () => {
// const [serviceDetails,setServiceDetails] = useContext(UserContext);
const [serviceDetails,setServiceDetails] = useState([]);

console.log(serviceDetails);
    useEffect(()=>{
        fetch('http://localhost:7000/service')
        .then(res=>res.json())
        .then(data=>setServiceDetails(data))
    },[])




    return (
      <section className="services-container mt-5">
      <div className="text-center">
          <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
          <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
      <div className="w-75 row mt-5 pt-5">
          {
              serviceDetails.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
          }


      </div>
  </div>
  </section>
    );
};

export default Servies;