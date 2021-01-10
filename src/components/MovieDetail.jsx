import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./MovieDetail.css";

export default function MovieDetail(props) {
  const [movie, setMovie] = useState([]);
  const params = useParams();

  useEffect(() => {
    setMovie(
      props.movie.filter(item => Number(item.id) === Number(params.movieID))[0]
    );
  }, []);

  return (
    <div className="col-sm-6 offset-sm-3">
      <nav aria-label="breadcrumb" className="mb-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {movie.title}
          </li>
        </ol>
      </nav>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="detailImg"
          alt="..."
        />
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <div className="avarage">
          <p>{movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
}
