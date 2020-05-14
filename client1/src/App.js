import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import {saveAs} from "file-saver";

import { toast } from "react-toastify";

//components

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Hello from "./components/Hello";
import Applet from "./components/Applet";
import Logout from './components/Logout';

toast.configure();


function App() {
 const  createDownloadPdf = () => {

    axios.post('/create-pdf', this.state)
    .then(() => axios.get('fetch-pdf', {responseType : 'blob'}))
    .then((res) => {
      const pdfBlob = new Blob([res.data], {type : ' application/pdf' });
  
      saveAs(pdfBlob, 'newPdf.pdf');
    } )
  }
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
              path="/login"
              render={props =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
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
                  <Register {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/applet" />
                )
              }
            />
            <Route
              exact
              path="/hello"
              render={props =>
                isAuthenticated ? (
                  <Hello {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/dashboard"
              render={props =>
                isAuthenticated ? (
                  <Dashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
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
