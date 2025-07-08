import React, { useState } from "react";
import {useNavigate } from 'react-router-dom'

import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  let handleLogin =async () => {
    try {
      const res=await axios.post("http://localhost:3002/login", { username, password });
        localStorage.setItem('token',res.data.token);
      
      alert("Login successfull");
      window.location.href = `http://localhost:3001/?token=${res.data.token}`;
    } catch (e) {
      alert(e?.response?.data?.msg);
    }
  };

  
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <h1>Login</h1>
      </div>
      <br />
      <br />
      <div className="col-6 offset-3">
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="password">Password :</label>
        <input
          type="text"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={handleLogin}>Login</button>
        <br /><br />
      </div>
    </div>
  );
}

export default Login;
