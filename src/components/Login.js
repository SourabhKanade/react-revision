import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import classes from './Login.module.css';
import Button from "../ui/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const inputisvalid = enteredEmail.includes('@') && enteredPassword.trim().length > 6;
 

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    // console.log(event.target.value);
    setFormIsValid(inputisvalid);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    // console.log(event.target.value);
    setFormIsValid(inputisvalid);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setFormIsValid(inputisvalid);
    console.log("login clicked!");

  };

  function onChange(value) {
    console.log('Captcha value:', value);
  }
   
  return (
    <div className={classes.login}>
      <form onSubmit={submitHandler}>
      <h1> Login </h1>
      <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : '' }`} >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : '' }`} >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
       <div className={classes.capcha}>
        <ReCAPTCHA
        sitekey="6Lcl170gAAAAAD0JYuueEd3Dty-gIXMqTMELnufP"
        onChange={onChange}
       />
        </div>
       
        <div className={classes.actions}>
        <Link to="/customer">
          <Button type="submit" disabled={!formIsValid}> Login </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;