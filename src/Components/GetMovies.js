import React from 'react';
import MovieListItem from './MovieListItem';

export default class GetMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: "",
    }
  };

  fetchMovies = async () => {
    const fetchResults = await fetch("https://www.omdbapi.com/?s=" + this.state.newMovies + "&page=1&apikey=trilogy");
    const data = await fetchResults.json();
    // console.log(data.Search)
    this.setState({
      movieData: data.Search,
    })
  }

  // Generic function to handle user input
  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    // this.fetchMovies("Lord of the Rings");
  }

  render() {
    return (
      <div>
        <h1>Search for Movies</h1>
        <label htmlFor="newMovies">New Movie</label>
        <br />
        <input name="newMovies" type="text" onChange={this.handleInputChange} />
        <br />
        <button onClick={this.fetchMovies} >New Movie</button>
        <div className="movie-container">
          {this.state.movieData ?
            this.state.movieData.map(movie => (<MovieListItem title={movie.Title} poster={movie.Poster} />)) :
            <p>Nothing here yet.</p>}
        </div>
      </div>
    );
  }
}