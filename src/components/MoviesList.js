import React from 'react'
import Movies from './Movies';
import classes from './MoviesList.module.css';

const MoviesList = (props) => {

  return (
    <>
      <ul className={classes['movies_list']}>
      {props.data.map((para) => (
        <Movies
          key={para.id}
          title={para.title}
          discription={para.discription}
          releasedate={para.releasedate}
        />
      ))}
    </ul>
    </>
  )
}

export default MoviesList