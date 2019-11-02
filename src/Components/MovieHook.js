import React, { useState, useEffect } from 'react';

function MovieHook(props) {
  const [movie, setMovie] = useState({});

  useEffect( () => {
    fetchMovie(props.title);
  })
  
  const fetchMovie = async (movie) => {
    const fetchResult = await fetch("https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy");
    const data = await fetchResult.json();
    setMovie({
      title: data.Title,
      poster: data.Poster,
      plot: data.Plot,
    });
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.plot}</p>
    </div>
  );
}

export default MovieHook;