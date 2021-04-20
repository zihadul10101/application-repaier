import React from 'react';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import DataCard from '../DataCard/DataCard';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 365 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        icon: faPhone,
        background: 'primary'
    }
]

const PaintingBusinessData = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <DataCard info={info} key={info.title}></DataCard>)
                }
            </div>
        </section>
    );
};

export default PaintingBusinessData;