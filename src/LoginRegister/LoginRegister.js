import React from 'react';
import "./LoginRegister.css";
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import PersonIcon from '@material-ui/icons/Person';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

const LoginRegister = ({register}) => {

    const InputContainer = ({Icon,...props}) => {
        return(
            <div className="loginRegister__oneContainer">
            {Icon}
            <input {...props} className="loginRegister__input"  />
            </div>
        )
    }


    return (
        <div className="loginRegister">
       <Link to="/"><IconButton className="loginRegister__backbutton">
            <KeyboardBackspaceIcon style={{fill: "#888"}} fontSize={window.innerWidth > 450 ? "large" : "default"} />
            </IconButton>
            </Link>
            <div className="loginRegisterComponent">
                <div className="loginRegister__left">
                    <img src="/10. heart rhythm.svg" alt="background"/>
                </div>
                <div className={`loginRegister__right ${register ? "loginRegister__right--register" : ""}`}>
                    <h1>{register ? "Get started!" : "Welcome Back!"}</h1>
                    <div className="loginRegister__inputContainer">
                    {register &&  <InputContainer Icon={<PersonIcon className="loginRegister__icon" />} placeholder="Username" type="text" />}
                        <InputContainer Icon={<EmailIcon className="loginRegister__icon" />} placeholder="Email" type="email" />
                        <InputContainer Icon={<LockIcon className="loginRegister__icon" />} placeholder="Password" type="password" />
                        <button>{register ? "Register" : "Login"} <ArrowRightAltIcon className="loginRegister__logo" /></button>
                    </div>
                    <div className="loginRegister__message">
                        <p>{register ? "Already a user?" : "Not a user?"} <span><Link to={register ? "/login" : "/register"}>{register ? "Sign In now!" : "Create an Account!"}</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
