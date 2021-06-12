import React, { useEffect, useState } from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';

const Testimonial = () => {
    const [reviewDetails,setReviewDetails] = useState([]);
    // console.log(reviewDetails);
    useEffect(()=>{
        fetch('https://afternoon-forest-88463.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviewDetails(data))
    },[])
    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header text-center">
                <h5 className="text-primary text-uppercase" style={{color: '#1CC7C1'}}>Testimonial</h5>
                <h2 >What Our Clients Says</h2>
            </div>
            <div className="row mt-5">
                 {
                     reviewDetails.map(testimonial => <TestimonialDetail testimonial={testimonial} key={testimonial.name} />)
                 }
             </div>
        </div>
    </section>
    );
};

export default Testimonial;