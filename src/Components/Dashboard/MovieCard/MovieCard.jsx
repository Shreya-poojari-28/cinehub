import React from 'react';
import './MovieCard.css';
import imgPlaceHolder from '../../../assets/imagePlaceHolder.png'

const MovieCard = ({ movie }) => {
  const {
    title,
    release_date,
    poster_path,
    backdrop_path,
    vote_average,
    overview
  } = movie;

  const posterUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/w780${backdrop_path}`
    : imgPlaceHolder;

  return (
    <div className="movie-card card shadow-sm">
      <img src={posterUrl} alt={title} />

      <div className="movie-overlay">
        <h4 className="movie-title">{title}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
