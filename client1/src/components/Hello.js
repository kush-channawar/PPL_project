import React, { useEffect, useState, Fragment } from "react";
import { toast } from "react-toastify";
import { Link, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
const Hello = ({ setAuth }) => {
  const [name, setName] = useState("");


  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };



  return (
    <Fragment>
    <div>
      <h1 className="mt-5">Hello
    </h1>
      <h2>Welcome {name}</h2>

      <h1>HELLO this is a test page</h1>
      <button onClick={e => logout(e)} className="btn btn-primary">
        Logout
      </button><br></br>
      <button class="btn btn-warning btn-block" ><Link to="/dashboard"> Dashboard</Link></button>
    </div>
    </Fragment>
  );
};

export default Hello;