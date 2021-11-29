import React, { useState, useEffect } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Ortho from "./components/ortho"
import Pedia from "./components/pedia"
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Appoint from "./components/Appoint";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";
import Welcome from "./components/Welcome";
import Info from "./components/Info";
import Doctor1 from "./components/doctor.component";
import AddDoctor from "./components/add-doctor.component"
import DoctorsList from "./components/doctors-list.component";
import Doctor2 from "./components/deldoc";
import User1 from "./components/delusers";
import EditUser from "./components/edituser";
import CreateDoctor from "./components/adddoc";


const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showUserBoard,setShowUserBoard]=useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setShowUserBoard(user.roles.includes("ROLE_USER"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div class="home">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/home"} className="navbar-brand">
          Hospital Management
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin
              </Link>
            </li>
          )}

            {showUserBoard && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                Services
              </Link>
            </li>
            )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
      
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path={["/profile", ]} component={Profile} />
          <Route exact path={["/appoint"]} component={Appoint}/>
          <Route exact path={["/info"]}component={Info}/>
          <Route exact path={["/add"]}component={CreateDoctor}/>
          <Route exact path={["/show"]}component={DoctorsList}/>
          <Route exact path={["/add1"]}component={AddDoctor}/>
          <Route exact path={["/modify"]}component={Doctor1}/>
          <Route exact path={["/pedia"]}component={Pedia}/>
          <Route exact path={['/admin/modusers']} component={User1}/>
          <Route exact path={["/ortho"]}component={Ortho}/>
          <Route exact path={['/admin/modusers']} component={User1}/>
        <Route exact path={["/admin/modify1"]} component={Doctor2}/>
          <Route exact path={["/edit/:id"]} component={EditUser}/> 
          <Route path="/user" component={BoardUser} />
          <Route path="/admin" component={BoardAdmin} />
          <Route path="/confirm/:confirmationCode" component={Welcome} />
        </Switch>

        
      </div>
    </div>
  );
};

export default App;
