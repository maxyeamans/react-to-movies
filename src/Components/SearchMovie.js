import React, { Component, useState } from 'react';
// import Movie from './Movie';
import MovieHook from './MovieHook';
import useInputChange from '../Hooks/useInputChange';

function SearchMovie() {
  // Set up our hooks
  const [movie, setMovie ] = useState(null);
  const [input, handleInputChange] = useInputChange();

  const changeMovie = () => {
    setMovie(input.newMovie);
  }

  return (
    <div>
    <label htmlFor="newMovie">New Movie</label>
    <br />
    <input name="newMovie" type="text" onChange={handleInputChange} />
    <br />
    <button onClick={changeMovie}>Search</button>
    {/* If a movie title is in state, display that movie's info. Otherwise, prompt for a movie search */}
    { movie ? <MovieHook title={movie} /> : <p>Search for a movie.</p>}
  </div>
  );

}

/* class SearchMovie extends Component {
  // Stateful components need the constructor below if receiving props
  constructor(props) {
    super(props);
    this.state = {
      // This is empty at first, but ready to receive data later
    };
  }

  // Generic function to handle user input
  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  // Add the movie to state
  changeMovie = () => {
    this.setState({
      movieTitle: this.state.newMovie,
    })
  }

  render() {
    return (
      <div>
        <label htmlFor="newMovie">New Movie</label>
        <br />
        <input name="newMovie" type="text" onChange={this.handleInputChange} />
        <br />
        <button onClick={this.changeMovie}>Search</button>
        { this.state.movieTitle ? <MovieHook title={this.state.movieTitle} /> : <p>Search for a movie.</p>}
      </div>
    )
  }
} */

export default SearchMovie;