import React, { useState } from "react";
import './login.css';
import user_icon from './assets/person.png';
import email_icon from './assets/email.png';
import password_icon from './assets/password.png';
import Forgot from "./forgetpassword";

const Login = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "LogIn" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Enter Your Name" required />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Enter Your Email" required />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Enter your Password" required />
        </div>
      </div>
      {action === "SignUp" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password <span onClick={Forgot}>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div className={action === "LogIn" ? "submit gray" : "submit"} onClick={() => { setAction("SignUp") }}>
          SignUp
        </div>
        <div className={action === "SignUp" ? "submit gray" : "submit"} onClick={() => { setAction("LogIn") }}>
          LogIn
        </div>
      </div>
    </div>
  );
};

export default Login;
