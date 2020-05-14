import React, { useEffect, useState, Fragment } from "react";
import { toast } from "react-toastify";
import { Link, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
const Logout = ({ setAuth }) => {
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
    
    <div>
      <h1 className="mt-5">Logout
    </h1>
      <h2>SURE WANT TO LOG OUT?{name}</h2>

      
      <button onClick={e => logout(e)} className="btn btn-primary">
        Logout
      </button><br></br>
      
  
,</div>  );
};

export default Logout;