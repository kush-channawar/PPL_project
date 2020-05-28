import React, { useEffect, useState, Fragment } from "react";


const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData.user_name);
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
      
    
        
          <h3 style = {{color : '#5dbcd2' , textAlign :'center'}}> LOGGED IN AS  </h3>
          
          <br></br>
            <h6 className="h6" style = {{color : 'white' , textAlign :'center'}}>{name}</h6>
            <br></br>
            <h6 className="h6" style = {{color : 'white' , textAlign :'center'}}>{email}</h6>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            
      
      </div>
    </Fragment>
  );
};

export default Dashboard;
