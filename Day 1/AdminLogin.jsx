// AdminLogin.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import './AminLogin.css'
import user_icon from './Assets/person.png';
import password_icon from './Assets/password.png';
import Footer from "./Footer";
const AdminLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your authentication logic here
    // For example, check the credentials
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="Admincontainer">
      <div className="Adminheader">
        <div className="Admintext">Admin Login</div>
        <div className="Adminunderline"></div>
      </div>
      <div className="Admininputs">
        <div className="Admininput">
        <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Enter Your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="Admininput">
        <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="Adminsubmit-container">
        <div className="Adminsubmit" onClick={handleLogin}>
          <Link to="/admin-portal" className="AdminLogin">Log In</Link>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  );
};

export default AdminLogin;