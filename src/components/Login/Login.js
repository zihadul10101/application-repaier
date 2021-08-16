import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import LoginBg from '../../images/z/login.jpg';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL } = result.user;

            const signedInUser = { name: displayName, email, photoURL }
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
        // setTimeout =(function(){
        // sessionStorage.clear()
        // } )
    }

    return (
        // <div className="login-page container">
        //     <div className="row align-items-center" style={{ height: "79vh" }}>
        //         <div className="col-md-6 shadow p-5" data-aos="fade-right"
        //             data-aos-duration="3000">
        //             <div className="form-group">
        //                 <label htmlFor="">User Name</label>
        //                 <input type="text" className="form-control" />
        //             </div>
        //             <div className="form-group">
        //                 <label htmlFor="">Password</label>
        //                 <input type="password" className="form-control" />
        //             </div>
        //             <div className="form-group">
        //                 <label htmlFor="" className="text-danger">Forgot your password?</label>
        //             </div>
        //             <div className="from-group mt-5">
        //                 <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign in</button>
        //             </div>
        //         </div>
        //         <div className="col-md-6 d-none d-md-block align-self-end" data-aos="fade-left"
        //             data-aos-duration="1000">
        //             <img className="img-fluid" src={LoginBg} style={{ height: "75vh" }} alt="" />
        //         </div>
        //     </div>
        // </div>

        // <!-- Default form login -->
        <form class="text-center border border-light p-5" action="#!">

            <p class="h4 mb-4">Sign in</p>

            {/* <!-- Email --> */}
            <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" />

            {/* <!-- Password --> */}
            <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" />

            <div class="d-flex justify-content-around">
                <div>
                    {/* <!-- Remember me --> */}
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember" />
                        <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                    </div>
                </div>
                <div>
                    {/* <!-- Forgot password --> */}
                    <a href="">Forgot password?</a>
                </div>
            </div>

            {/* <!-- Sign in button --> */}
            <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign in</button>

            {/* <!-- Register --> */}
            <p>Not a member?
                <a href="/login">Register</a>
            </p>


        </form>


    );
};

export default Login;