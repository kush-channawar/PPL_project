import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { toast } from "react-toastify";

//components



import Registers from "./components/Registers";
import Applet from "./components/Applet";
import Logout from './components/Logout';
import SignIn from "./components/SignIn";

toast.configure();


function App() {
 
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
          <Route
              exact
              path="/"
              render={props =>
                !isAuthenticated ? (
                  <SignIn {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/applet" />
                )
              }
            />
            <Route
              exact
              path="/login"
              render={props =>
                !isAuthenticated ? (
                  <SignIn {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/applet" />
                )
              }
            />
            <Route
              exact
              path="/register"
              render={props =>
                !isAuthenticated ? (
                  <Registers {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/applet" />
                )
              }
            />
             <Route
              exact
              path="/applet"
              render={props =>
                isAuthenticated ? (
                  <Applet {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/logout"
              render={props =>
                isAuthenticated ? (
                  <Logout {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
           
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
