import ContextProvider from './components/Context/ContextProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Context from "./components/Context/ContextProvider";
import AddService from "./components/Dashbord/AddService/AddService";
import Dashbord from "./components/Dashbord/Dashbord/Dashbord";
import ManageService from "./components/Dashbord/ManageService/ManageService";
import Profile from "./components/Dashbord/Profile/Profile";
import Contact from "./components/Home/Contact/Contact";
import Home from "./components/Home/Home/Home";
import NavBar from "./components/Home/NavBar/NavBar";
import Review from "./components/Home/Review/Review";
import Servies from "./components/Home/Servies/Servies";
import Login from "./components/Login/Login";

import { createContext, useState } from "react";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [serviceDetails,setServiceDetails] =useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser,serviceDetails,setServiceDetails]}>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/servies">
            <Servies></Servies>
          </Route>
          <Route path="/reviews">
            <Review></Review>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashbord></Dashbord>
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
          <PrivateRoute path="/login">
            <Login></Login>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>


  );
}

export default App;
