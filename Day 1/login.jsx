import React, { useState } from "react";
import './login.css';
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import user_icon from './Assets/person.png';
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';
import Footer from "./Footer";

const Login = () => {
  const [action, setAction] = useState("Login");

  return (
    <div>
    <Navbar/>
    <div className="Logincontainer">
      <div className="Loginheader">
        <div className="Logintext">{action}</div>
        <div className="Loginunderline"></div>
      </div>
      <div className="Logininputs">
        {action === "LogIn" ? (
          <div></div>
        ) : (
          <div className="Logininput">
          <img src={user_icon} alt="" />
            <input type="text" placeholder="Enter Your Name" required />
          </div>
        )}
        <div className="Logininput">
        <img src={email_icon} alt="" />
          <input type="email" placeholder="Enter Your Email" required />
        </div>
        <div className="Logininput">
        <img src={password_icon} alt="" />
          <input type="password" placeholder="Enter your Password" required />
        </div>
      </div>
      {action === "SignUp" ? (
        <div></div>
      ) : (
        <div className="Loginforgot-password">
          Forgot Password <Link to="/forgot-password">Click Here!</Link>
        </div>
      )}
      <div className="Loginsubmit-container">
        <div className={action === "LogIn" ? "Loginsubmit gray" : "Loginsubmit"} onClick={() => { setAction("SignUp") }}>
          SignUp
        </div>
          <div className={action === "SignUp" ? "Loginsubmit gray" : "Loginsubmit"} onClick={() => { setAction("LogIn") }}>
            Login
          </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
