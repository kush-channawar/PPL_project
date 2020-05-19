import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FormControl } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    address:"",
    age:""
  });

  const { email, password, name, address, age } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password, name ,address, age};
      const response = await fetch(
        "http://localhost:5000/auth/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Register Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="mt-5 text-center ">Register</h1>
      <form  className="container">
        <input
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={e => onChange(e)}
          className="form-control my-3 "
        />
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={e => onChange(e)}
          className="form-control  my-3"
        />
       
          <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" 

          name="address"
          value={address}
          placeholder="address"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="number"
          name="age"
          value={age}
          placeholder="age"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />

        <button className="btn btn-success mx-5 " onClick={onSubmitForm} >Register</button>
        <button class="btn btn-warning " ><Link to="/login"> Login</Link></button>
      
      </form>
      
     
    </Fragment>
  );
};

export default Register;
