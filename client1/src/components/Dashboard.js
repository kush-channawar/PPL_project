import React, { useEffect, useState, Fragment } from "react";
import { toast } from "react-toastify";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age,setAge] = useState("");
  const [email, setEmail] = useState("");
  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData.user_name);
      setAddress(parseData.user_address);
      setAge(parseData.user_age);
      setEmail(parseData.user_email);
    } catch (err) {
      console.error(err.message);
    }
  };


  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Fragment>
    <div>
      <h1 className="mt-5"></h1>
      <table className="table mt-5 text-left">
        <thead className="h3">
          <tr>
          <th>NAME: </th>
          <th>ADDRESS: </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{name}</th>
            <th>{address}</th>
          </tr>
          </tbody>
          <thead className="h3" >
          <tr>
          <th>EMAIL: </th>
          <th>AGE: </th>
          </tr>
          </thead>
        
        <tbody>
          <tr>
            <th>{email}</th>
            <th>{age}</th>
          </tr>
        </tbody>
      </table>
      </div>
    </Fragment>
  );
};

export default Dashboard;
