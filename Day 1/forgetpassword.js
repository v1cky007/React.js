import React from "react";
import './login.css';
import passwordIcon from './assets/password.png';

const Forgot = () => {
    const handleCreatePassword = () => {
        alert("Successfully created a new password");
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Forgot Password</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={passwordIcon} alt="" />
                    <input type="password" placeholder="Enter your New Password" />
                </div>
                <div className="input">
                    <img src={passwordIcon} alt="" />
                    <input type="password" placeholder="Enter your New Password again" />
                </div>
                <div className="submit-container">
                    <div className="submit" onClick={handleCreatePassword}>Create New Password</div>
                </div>
            </div>
        </div>
    );
};

export default Forgot;
