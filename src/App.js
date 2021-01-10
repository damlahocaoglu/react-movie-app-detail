import React, { useEffect, useState } from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from "./components/Movie";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const API_KEY = "891bd8493da50156ff1c26f76e69ca34";
  const onChange = e => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${
        e.target.value
      }`
    )
      .then(res => res.json())
      .then(data => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="add-page">
            <div className="container">
              <div className="add-content">
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Search for a movie"
                    value={query}
                    onChange={onChange}
                  />
                </div>

                {results.length > 0 && (
                  <ul className="results">
                    {results.map(movie => (
                      <li key={movie.id}>
                        <Movie movie={movie} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </Route>
        <Route path="/movie/:movieID">
          <MovieDetail movie={results} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
