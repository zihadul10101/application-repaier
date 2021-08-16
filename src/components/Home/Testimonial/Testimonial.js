import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testmonial.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,EffectCube } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';





SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,EffectCube]);


const Testimonial = () => {
    const [reviewDetails, setReviewDetails] = useState([]);
    // console.log(reviewDetails);
    useEffect(() => {
        fetch('https://guarded-shelf-32601.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviewDetails(data))
    }, [])
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase" style={{ color: '#1CC7C1' }}>Testimonial</h5>
                    <h2 >What Our Clients Says</h2>
                </div>
                 
                <div className="root">
                <Swiper 
                 spaceBetween={20}
                 slidesPerView={3}
                 navigation
                 pagination={{ clickable: true }}
                 scrollbar={{ draggable: true }}
                 onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}
                >
                {
                            reviewDetails.map(testimonial =>  <SwiperSlide className="slide">
                            <div className="slide-content">
                                <div className="swiper-container">
                                    <div >
                                        <img src={testimonial.imgUrl} alt="" className="user-photo" />
                                        <br />
                                        <h5> {testimonial.name}</h5>
                                        <h4>  {testimonial.email}</h4>
                                        <p className="user-testimonial"><i>{testimonial.description}</i></p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                        }
                </Swiper>
                   
              
                </div>        
                  

           
            </div>
        </section>
    );
};

export default Testimonial;