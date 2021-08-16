import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';

const BlogNews = (props) => {
    const { title, description, Img, Date } = props.blog;
    return (

        // <div className="col-md-4">
        //     <div className=" justify-content-center ">
        //         <div className="card d-flex">
        //             <img className="card-img-top mx-3" src={Img} width="60" alt="Card image cap" />
        //             <p>{Date}</p>
        //             <div className="card-body">
        //                 <h5 className="card-title">{title}</h5>

        //             </div>
        //             <div className="card-footer">
        //                 <small className="text-muted">{description} </small> <span><a href="">Read More</a></span>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <!-- Card -->
        
       <div className="row  h-50">
            <div className="card " >
          {/* <!-- Card image --> */}
          <div className="view overlay">
            <img className="card-img-top w-50"  src={Img} alt="Card image cap"/>
            <a>
              <div className="mask rgba-white-slight"></div>
            </a>
          </div>
       
        
          {/* <!-- Card content --> */}
          <div className="card-body h-50 w-25">
        
            {/* <!-- Title --> */}
            <h4 className="card-title">{title}</h4>
            <hr/>
            {/* <!-- Text --> */}
            <p className="card-text">{description}</p>
            <button className="btn btn-indigo btn-rounded btn-md">Read more</button>
        
          </div>
        </div>
  
       </div>
        
    );
};

export default BlogNews;