import React, { useState } from 'react'
import MoviesList from './MoviesList'
import './FetchedData.css';

const FetchedData = () => {
  const [Movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    setisLoading(true);
    setError(null);

    try {
      const response = await fetch('https://swapi.py4e.com/api/films/');

      if(!response.ok) {
        throw new Error ("Something went wrong!!");
      }

    const data = await response.json();

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        discription: movieData.opening_crawl,
        releasedate: movieData.release_date
      };
    })
    setMovies(transformedMovies)
  

    } catch (error) {
      setError(error.message);
    }
      setisLoading(false);
  };


  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler} className={'fetch_button'}>Fetch Movies</button>
      </section>
      <section>
      {isLoading && error && <p>{error}</p>}

      {!isLoading && Movies.length > 0 && <MoviesList data={Movies} />}
      {!isLoading  && error && <p>movies not found</p>}
      {isLoading && <p>loading...</p>}
      {console.log(isLoading)}
       
      </section>
    </>

  )
}

export default FetchedData