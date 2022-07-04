import React from 'react';
import classes from './Customer.module.css';
// import React, { useState } from 'react';
// import Button from "../ui/Button";

function Customer() {

  return (
    <>
      <div className={classes.login}>
      <h1> Customer-form </h1>
        <div className={classes.actions}>
          <button type="submit"> Save </button>
        </div>
    </div>
    </>

  )
}

export default Customer