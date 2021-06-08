import React from 'react';

const BlogNews = (props) => {
    const { title, description, Img, Date } = props.blog;
    return (

        <div className="col-md-4">
            <div className=" justify-content-center ">
                <div className="card d-flex">
                    <img className="card-img-top mx-3" src={Img} width="60" alt="Card image cap" />
                    <p>{Date}</p>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>

                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{description} </small> <span><a href="">Read More</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogNews;