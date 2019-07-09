import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import SearchMovie from './Components/SearchMovie';
import GetMovies from './Components/GetMovies';

const App = () => (
  // App needs to be enclosed in a Router component for routes to work
  <Router>
    <div className="App">
      <header className="App-header">
        <p>Let's re-learn React!</p>
        {/* React Router uses Link components that eventually turn into <a> tags */}
        <Link to="/search">Search for a movie</Link>
        <Link to="/search-many">Search for multiple movies</Link>
        {/* Route to tell us which component to render for an exact path of '/search' */}
        <Route exact path="/search" component={SearchMovie} />
        <Route exact path="/search-many" component={GetMovies} />
      </header>
    </div>
  </Router>
);

export default App;
