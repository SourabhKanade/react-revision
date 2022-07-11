// import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import classes from './Login.module.css';
import Button from "../ui/Button";
// import Details from "./Details";
// import { useDispatch, useSelector } from 'react-redux';
// import {updateUser} from '../redux/userSlice';

const Login = (props) => {
  // const dispatch = useDispatch();
  // const store = useSelector((state) => state);
  // const { entities, loading } = store.postSlice;
  // console.log({store});

  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  // const store = useSelector((state) => state);
  // const { entities, loading } = store.user;

  const inputisvalid = enteredEmail.includes('@') && enteredPassword.trim().length > 6;
  // console.log(entities);

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


  // const { entities, loading } = useSelector((state) => state.entities)
  // const entities = useSelector((state) => state.entities)

  // const jodo = dispatch(getPosts())

//  {jodo.map((item) => {
//   return(
//     <Details key={item.id} 
//       name= {item.data.userdetails.username}

//     />
//   );
//     })}
  
// const name = useSelector(state => state.user.name);

//  const taskHandler = (e) => {
//     e.preventDefault();
//     const dispatch = useDispatch();
//     const entry = dispatch(updateUser());
//     console.log(entry);
// }


  return (
<>
    {/* <Button onClick={taskHandler} >Fetch Data </Button> */}
    <Link to="/details">
      <button  className={classes.style} type="onClick" > Go to Details page</button>
    </Link>
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