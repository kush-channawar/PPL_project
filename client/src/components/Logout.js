import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import './styling.css';
const Logout = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData.user_name);
     
      
    } catch (err) {
      console.error(err.message);
    }
  };


  useEffect(() => {
    getProfile();
  }, []);

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
    
    <div className = "white">
      <h1 className="mt-5 ">Logout
    </h1>
      <h2>SURE WANT TO LOG OUT?<br></br>{name}</h2>

      
      <button onClick={e => logout(e)} className="btn btn-primary center">
        Logout
      </button><br></br>
      
  
</div>  );
};

export default Logout;