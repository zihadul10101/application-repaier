import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Profile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    //    console.log(loggedInUser);
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5 rounded-circle" style={{position: "absolute",  right: 0, backgroundColor: "#F4FDFB" }}>
                {
                    loggedInUser && 
                    <div className="col-md-4">

                    <div className=" justify-content-center ">
                        <div className="card d-flex">
                            {/* <img className="card-img-top mx-3" src={loggedInUser.photoURL} width="60" alt="Card image cap" /> */}
                            <div className="card-body">
                                <h5 className="card-title">{loggedInUser.name}</h5>

                            </div>
                            <br />
                            < div className="card-footer">
                                <small className="text-muted">{loggedInUser.email} </small>
                            </div>
                            <br />
                            <br />
                            <button className="btn-danger">LogOut</button>
                        </div>
                    </div>
                </div>   
                }
                

</div>
        </section>
    );
};

export default Profile;