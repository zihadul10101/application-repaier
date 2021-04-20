import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import FeaturedService from '../FeaturedService/FeaturedService';

import Header from '../Header/Header';

import Servies from '../Servies/Servies';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
         <Header></Header>
         <Servies></Servies>
         <FeaturedService></FeaturedService>
         <Testimonials></Testimonials>
         <Blogs></Blogs>
         <Contact></Contact>
         <Footer></Footer>
        </div>
    );
};

export default Home;