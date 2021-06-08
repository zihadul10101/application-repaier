import React from 'react';
import './Home.css';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Servies from '../Servies/Servies';

const Home = () => {
    return (
        <div className="info">
            <Header></Header>
            <About></About>
            <Servies></Servies>
            <Review></Review>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;