import React, { Component } from 'react';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  // Fetches the movie info right when the component mounts
  componentDidMount() {
    console.log("Yay, the component mounted!");
    this.fetchMovie(this.props.title);
  }

  // Re-render movie info when props change
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      console.log("Yay, the component was updated!");
      this.fetchMovie(this.props.title);
    }
  }

  // .then() version of fetch

  // fetchMovie = (movie) => {
  //   fetch("https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy")
  //   .then( result => {
  //     return result.json()
  //   })
  //   .then( result => {
  //     this.setState({
  //       title: result.Title,
  //       poster: result.Poster,
  //       plot: result.Plot,
  //     })
  //   });
  // }

  // async/await version of fetch

  fetchMovie = async (movie) => {
    const fetchResult = await fetch("https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy");
    const data = await fetchResult.json();
    this.setState({
      title: data.Title,
      poster: data.Poster,
      plot: data.Plot,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={this.state.poster} alt={this.state.title} />
        <p>{this.state.plot}</p>
      </div>
    );
  }
}