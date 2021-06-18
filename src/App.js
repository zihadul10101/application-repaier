import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddService from "./components/Dashbord/AddService/AddService";
import Dashbord from "./components/Dashbord/Dashbord/Dashbord";
import ManageService from "./components/Dashbord/ManageService/ManageService";
import Profile from "./components/Dashbord/Profile/Profile";
import Contact from "./components/Home/Contact/Contact";
import Home from "./components/Home/Home/Home";
import NavBar from "./components/Home/NavBar/NavBar";
import Servies from "./components/Home/Servies/Servies";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Book from './components/Dashbord/Book/Book';
import Testimonial from './components/Home/Testimonial/Testimonial';
import Reviews from './components/Dashbord/Reviews/Reviews';
import BookingList from "./components/Dashbord/BookingList/BookingList";
import MakeAdmin from "./components/Dashbord/MakeAdmin/MakeAdmin";

export const UserContext = createContext();
export const ServiceContext = createContext();

function App() {
  const [serviceDetails, setServiceDetails] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
// console.log(serviceDetails);
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ServiceContext.Provider value={[serviceDetails, setServiceDetails]}>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route path="/servies">
              <Servies></Servies>
            </Route>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <Route path="/reviews">
              <Reviews></Reviews>
            </Route>
            <PrivateRoute path="/orderList">
              <BookingList></BookingList>
            </PrivateRoute>
            <Route path="/testimonial">
              <Testimonial></Testimonial>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashbord></Dashbord>
            </PrivateRoute>
            <PrivateRoute path="/booking/:_id">
              <Book></Book>
            </PrivateRoute>
            <PrivateRoute path="/addServies">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Profile></Profile>
            </PrivateRoute>
            <PrivateRoute path="/manageServices">
              <ManageService></ManageService>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </ServiceContext.Provider>
    </UserContext.Provider>

  );
}

export default App;
