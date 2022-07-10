// import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import classes from './Login.module.css';
import Button from "../ui/Button";
import Details from './Details';
import { useDispatch, useSelector } from 'react-redux';
import {  getPosts } from  '../store/Main';

const Login = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { entities, loading } = store.postSlice;
  console.log({store});

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

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    // console.log(event.target.value);
    setFormIsValid(inputisvalid);
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setFormIsValid(inputisvalid);
    console.log("login clicked!");
  };

//   const taskHandler = () => {
//     const data = {
//       "bpp_user_alias": "ravokad214",
//       "domain": "https://jodostaging.avhan.com:4443",
//       "org_bpp_alias": "jodoorgcusLnPFXV7nv266XJ"
//     }
//     axios.post('https://jodostaging.avhan.com:4443/userBppApi/get_bpp_user', data ,{
//       headers: {
//         'token': 'testtoken',
//         'content-type': 'application/json',
//         'token_secret': 'testtokensecret',
//       }
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// console.log("data was clicked")
//   }




  // const { entities, loading } = useSelector((state) => state.entities)
  // const entities = useSelector((state) => state.entities)




  const jodo = dispatch(getPosts());
  // const taskHandler = (e) => {
  //   e.preventDefault();
  //   // dispatch(counterActions.task());
  //   
  // }




  return (
    <>
    {jodo.map((item) => {
  return(
    <Details key={item.id} 
      name= {item.data.userdetails.username}
      

    />
  );
    })}
    {/* <div >
       <Button onClick={taskHandler} >Fetch Data </Button>
    </div> */}
    {/* <Link to="/details">
      <Button type="submit" > User Details </Button>
    </Link> */}
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
       {/* <div className={classes.capcha}>
        <ReCAPTCHA
        sitekey="6Lcl170gAAAAAD0JYuueEd3Dty-gIXMqTMELnufP"
        onChange={onChange}
       />
        </div> */}
       
        <div className={classes.actions}>
        <Link to="/customer">
          <Button type="submit" disabled={!formIsValid}> Login </Button>
          </Link>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;