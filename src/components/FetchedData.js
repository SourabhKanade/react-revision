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

// let options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '57cf0be083msh8420b947729f662p115740jsn8e0e663b7e41',
//       'X-RapidAPI-Host': 'current-news.p.rapidapi.com'
//     }
//   };

//   async function fetchNewsHandler() {
//     setisLoading(true);
//     setError(null);

//     try {
//       const response = await fetch('https://current-news.p.rapidapi.com/news/health', options);

//       if(!response.ok) {
//         throw new Error ("Something went wrong!!");
//       }

//       const data = await response.json();
// console.log(data);
//         const transformedMovies = data.news.map((newsData) => {
//           return {
//             id: newsData.publishedAt,
//             title: newsData.title,
//             discription: newsData.description,
//             releasedate: newsData.publishedAt
//           };
//         })
//         setMovies(transformedMovies)
      
    
//         } catch (error) {
//           setError(error.message);
//         }
//           setisLoading(false);
//       };
  
  // THE ABOVE GET REQUEST IS FOR FETCHING NEWS, API PROVIDED BY RAPIDAPI.COM


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