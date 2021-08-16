import React from 'react';
import './Home.css';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Servies from '../Servies/Servies';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className="home">
           
           <Header className="header"></Header>
            <About className="abourth"></About>
            <Servies></Servies>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
           </div>
        
    );
};

export default Home;