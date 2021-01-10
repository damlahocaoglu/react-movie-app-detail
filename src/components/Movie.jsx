import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../style.css";

export default function Movie({ movie }) {
  const { id } = { movie }.movie;
  return (
    <div className="frame">
      <div className="poster-wrapper mt-4">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div>
        <div className="header">
          <h3 className="title mt-2">{movie.title}</h3>
          <h3 className="title">{movie.vote_average}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <Link to={`/movie/${id}`} className="btntopbottom">
          Detay
        </Link>
      </div>
    </div>
  );
}
