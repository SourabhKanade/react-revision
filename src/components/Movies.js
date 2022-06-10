import React from 'react'
import classes from './Movies.module.css';

const Movies = (props) => {


  return (
    <>
     <ul className={classes.movie}>
     <h2>{props.title}</h2>
     <h3>{props.discription}</h3>
     <p>{props.releasedate}</p>
     </ul>
    </>
  )

}
export default Movies;
