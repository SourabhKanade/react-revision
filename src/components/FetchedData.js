import React, { useState } from 'react'
import MoviesList from './MoviesList'
import './FetchedData.css';

const FetchedData = () => {
  const [Movies, setMovies] = useState([]);
  
 const fetchMoviesHandler = () => {
  fetch('https://swapi.py4e.com/api/films/')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        discription: movieData.opening_crawl,
        releasedate: movieData.release_date
      };
    })
    setMovies(transformedMovies)
  });
 }

  return (
    <>
      <section>
      <button onClick={fetchMoviesHandler} className={'fetch_button'}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList data={Movies}/>
      </section>
    </>
    
  )
}

export default FetchedData