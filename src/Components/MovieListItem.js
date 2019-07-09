import React from 'react';

const MovieListItem = (props) => (
    <div className="movie-list-item" key={props.omdbID}>
        <img src={props.poster} alt={props.title} class="movie-list-poster" />
        <p class="movie-list-title">{props.title}</p>
    </div>
)

export default MovieListItem;