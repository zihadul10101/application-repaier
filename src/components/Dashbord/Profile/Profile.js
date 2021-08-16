import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './Profile.css';

const Profile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    //    console.log(loggedInUser);
    return (
        <section className="container-fluid row" style={{ textAlign: "center" }} >
            <Sidebar></Sidebar>
            <div className="col-md-8 p-4 pr-5 rounded-circle " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <div className="card d-flex profile" >
                        <div className="card-body">
                        <img className="card-img-top " src={loggedInUser.photoURL} className="userphoto" width="40" alt="Card image cap" />

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
        </section>
    );
};

export default Profile;