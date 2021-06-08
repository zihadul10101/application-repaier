import React from 'react';
import wilson from '../../../images/z/Ellipse 2.png';
import ema from '../../../images/z/Ellipse 3.png';
import aliza from '../../../images/z/Ellipse 1.png';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]
const Review = () => {
    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header text-center">
                <h5 className="text-primary text-uppercase" style={{color: '#1CC7C1'}}>Testimonial</h5>
                <h2 >What Our Clients Says</h2>
            </div>
            <div className="row mt-5">
                 {
                     testimonialData.map(testimonial => <ReviewDetail testimonial={testimonial} key={testimonial.name} />)
                 }
             </div>
        </div>
    </section>
    );
};

export default Review;