import React from 'react';
import serviesa from '../../../images/servies-1.png';
import serviesb from '../../../images/servies-2.png';
import serviesc from '../../../images/servies-3.png';
import ServiesDetail from '../ServiesDetail/ServiesDetail';


const serviceData = [
    {
        name: 'serviesa',
        img: serviesa
    },
    {
        name: 'serviesb',
        img: serviesb
    },
    {
        name: 'serviesc',
        img: serviesc
    }
]
const Servies = () => {
    return (
        <section className="services-container mt-5">
        <div className="text-center">
            <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
            {
                serviceData.map(service => <ServiesDetail service={service} key={service.name}></ServiesDetail>)
            }
        </div>
    </div>
    </section>
    );
};

export default Servies;