import React from 'react';
import BlogNews from '../BlogNews/BlogNews';
import wilson from '../../../images/z/home_service_photo1.jpg';
import Eilson from '../../../images/z/home_service_photo2.jpg';
import Silson from '../../../images/z/home_service_photo3.jpg';

const blogData = [
    {
        title : 'Hello world!',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
      
        Img : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Vestibulum risus nulla',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        Img : Eilson,
    
        date : '23 April 2019'
    },
    {
        title : 'Praesent tincidunt vulputate',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        Img : Silson,
     
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
        <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>Our Recent News</h1>
               </div>
               <div className="row mt-5">
                    {
                        blogData.map(blog => <BlogNews blog={blog} key={blog.title}></BlogNews>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;