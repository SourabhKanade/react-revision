import React, { useState } from 'react';
import classes from './Customer.module.css';

// const initiaValue = {
//    emailId: '',
//    firstName: '',
//    lastName: ''
// }

function Customer() {

   const [data, setData] = useState({
      emailId: '',
      firstName: '',
      lastName: ''
   });
   const [file, setFile] = useState("");
   const [preview, setPreview] = useState("");
   const [enteredEmail, setEnteredEmail] = useState('');
   const [emailIsValid, setEmailIsValid] = useState();

   const [enteredFirstName, setEnteredFirstName] = useState('');
   const [firstnameIsValid, setFirstnameIsValid] = useState();
   
   const [enteredLastName, setEnteredLastName] = useState('');
   const [lastnameIsValid, setLastnameIsValid] = useState();

   const [enteredPhone, setEnteredPhone] = useState('');
   const [phoneIsValid, setPhoneIsValid] = useState();

   const [enteredDate, setEnteredDate] = useState('');
   const [dateIsValid, setDateIsValid] = useState();

   const [enteredPlace, setEnteredPlace] = useState('');
   const [placeIsValid, setPlaceIsValid] = useState();

   const [enteredCountry, setEnteredCountry] = useState('');
   const [countryIsValid, setCountryIsValid] = useState();

   const [enteredState, setEnteredState] = useState('');
   const [stateIsValid, setStateIsValid] = useState();
   
   const [enteredCity, setEnteredCity] = useState('');
   const [cityIsValid, setCityIsValid] = useState();

   const [formIsValid, setFormIsValid] = useState(false);
 
   const inputisvalid = enteredEmail.includes('@') && enteredFirstName.trim().length > 3 && enteredLastName.trim().length > 3 && enteredPhone.trim().length > 3 && enteredDate.trim().length > 9 && enteredPlace.trim().length > 3 && enteredCountry.trim().length > 3 && enteredState.trim().length > 3 && enteredCity.trim().length > 3;
   // const firstnameisvalid = enteredFirstName.trim().length > 0;

   // const fnameChangeHandler = (event) => {
   //    setEnteredFirstName(event.target.value);
   //    // console.log(event.target.value);
   //    setFormIsValid(inputisvalid);
   // }

   const validatefnameHandler = () => {
      setFirstnameIsValid(enteredFirstName.trim().length > 3);
   }

   // const lnameChangeHandler = (event) => {
   //    setEnteredLastName(event.target.value);
   //    // console.log(event.target.value);
   //    setFormIsValid(inputisvalid);
   // }

   const validatelnameHandler = () => {
      setLastnameIsValid(enteredLastName.trim().length > 3);
   }

   const phoneChangeHandler = (event) => {
      setEnteredPhone(event.target.value);
      // console.log(event.target.value);
      setFormIsValid(inputisvalid);
   }

   const validatePhoneHandler = () => {
      setPhoneIsValid(enteredPhone.trim().length > 3);
   }
 
   // const emailChangeHandler = (event) => {
   //   setEnteredEmail(event.target.value);
   //   // console.log(event.target.value);
   //   setFormIsValid(inputisvalid);
   // };
 
   const validateEmailHandler = () => {
     setEmailIsValid(enteredEmail.includes('@'));
   };
 
   const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
      // console.log(event.target.value);
      setFormIsValid(inputisvalid);
   }

   const validateDateHandler = () => {
      setDateIsValid(enteredDate.trim().length > 3);
   }

   const placeChangeHandler = (event) => {
      setEnteredPlace(event.target.value);
      // console.log(event.target.value);
      setFormIsValid(inputisvalid);
   }

   const validatePlaceHandler = () => {
      setPlaceIsValid(enteredPlace.trim().length > 3);
   }

   const countryChangeHandler = (event) => {
      setEnteredCountry(event.target.value);
      // console.log(event.target.value);
      setFormIsValid(inputisvalid);
   }

   const validateCountryHandler = () => {
      setCountryIsValid(enteredCountry.trim().length > 3);
   }

   const stateChangeHandler = (event) => {
      setEnteredState(event.target.value);
      // console.log(event.target.value);
      setFormIsValid(inputisvalid);
   }

   const validateStateHandler = () => {
      setStateIsValid(enteredState.trim().length > 3);
   }

   const cityChangeHandler = (event) => {
      setEnteredCity(event.target.value);
      // console.log(event.target.value);
      setFormIsValid(inputisvalid);
   }

   const validateCityHandler = () => {
      setCityIsValid(enteredCity.trim().length > 3);
   }

   const handleChange = (event) => {
     const selectedFile = event.target.files[0];
     setFile(selectedFile);
     const filePreview = URL.createObjectURL(selectedFile);
     setPreview(filePreview);
   };

   const submitHandler = (event) => {
      event.preventDefault();
      setFormIsValid(inputisvalid);
      setEnteredFirstName('');
      setEnteredLastName('');
      setEnteredPhone('');
      setEnteredDate('');
      setEnteredPlace('');
      setEnteredCountry('');
      setEnteredState('');
      setEnteredCity('');
      setEnteredEmail('');
      // setData(initiaValue);
      console.log("customer form data saved!");
      const data = new FormData(event.target)
      console.log(Object.fromEntries(data.entries()));
    };

    const handleChange_ = (e) => {
      setData({...data, [e.target.name]: e.target.value});
    };
    console.log(data);

  return (
    <>
     <div className={classes.customer}>
    <form onSubmit={submitHandler}>
      <h1> Customer-form </h1>
      <div className={classes.circle} >
      {file && <img src={preview} alt={file.name} className={classes.image} />}
      <input type="file" name="file" className={classes.upload} onChange={handleChange} />
      </div>

      <div className={classes.corner} >
        <div className={`${classes.control} ${firstnameIsValid === false ? classes.invalid : '' }`} >
        <label htmlFor="fname">Firstname</label>
          <input className={classes.left} type="text" name="firstName" id="firstName" value={data.firstName} onChange={handleChange_} onBlur={validatefnameHandler} required/>
        </div>
        
          <div className={`${classes.control} ${lastnameIsValid === false ? classes.invalid : '' }`} >
            <label className={classes.lname} htmlFor="lname">Lastname</label>
            <input type="text" name="lastName" id="firstName" value={data.lastName} onChange={handleChange_} onBlur={validatelnameHandler}/>
          </div>
       </div>

       <div className={classes.corner}>
       <div className={`${classes.control} ${phoneIsValid === false ? classes.invalid : '' }`} >
           <label className={classes.lname} htmlFor="contact">Phone</label>
           <input type="number" name="Contact-No" id="contact" value={enteredPhone} onChange={phoneChangeHandler} onBlur={validatePhoneHandler}/>
        </div>
        <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : '' }`} >
           <label className={classes.lname} htmlFor="lname" >Email</label>
           <input type="email"  name="emailId" id="emailId" value={data.emailId} onChange={handleChange_} onBlur={validateEmailHandler}/>
        </div>
       </div>

       <div className={classes.corner}>
       <div className={`${classes.control} ${dateIsValid === false ? classes.invalid : '' }`} >
          <label htmlFor="date">Birthdate</label>
          <input  className={classes.left} type="date" name="Birth-Date" id="date" value={enteredDate} onChange={dateChangeHandler} onBlur={validateDateHandler}/>
       </div>
       <div className={`${classes.control} ${placeIsValid === false ? classes.invalid : '' }`} >
          <label className={classes.lname} htmlFor="bplace">Birthplace</label>
          <input type="text" name="Birth Place" id="bplace" value={enteredPlace} onChange={placeChangeHandler} onBlur={validatePlaceHandler}/>
         </div>
       </div>

       <div className={classes.align}>
         <div className={`${classes.control} ${countryIsValid === false ? classes.invalid : '' }`} >
          <label htmlFor="country">Country</label>
          <input className={"classes.fix"} type="text" name="Country" id="country" value={enteredCountry} onChange={countryChangeHandler} onBlur={validateCountryHandler}/>
         </div>
         <div className={`${classes.control} ${stateIsValid === false ? classes.invalid : '' }`} >
           <label htmlFor="state">State</label>
          <input type="text" name="State" id="state" value={enteredState} onChange={stateChangeHandler} onBlur={validateStateHandler}/>
          </div>
         <div className={`${classes.control} ${cityIsValid === false ? classes.invalid : '' }`} >
          <label   htmlFor="city">City</label>
          <input type="text" name="City" id="city" value={enteredCity} onChange={cityChangeHandler} onBlur={validateCityHandler}/>
          </div>
       </div>
    
        <div className={classes.actions}>
          <button className={classes.black}  type="submit" disabled={!formIsValid}> Save </button>
        </div>
     </form>
     </div>
    </>

  );
};

export default Customer