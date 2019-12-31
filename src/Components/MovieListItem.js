import React from 'react';

const MovieListItem = (props) => (
    <div className="movie-list-item" >
        <img src={props.Poster} alt={props.Title} class="movie-list-poster" />
        <p class="movie-list-title">{props.Title}</p>
    </div>
)

export default MovieListItem;