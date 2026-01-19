import React from 'react';
import './MovieCard.css';
import imgPlaceHolder from '../../../assets/imagePlaceHolder.png'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const {
    id,
    title,
    release_date,
    poster_path,
    backdrop_path,
    vote_average,
    overview
  } = movie;

  const navigate = useNavigate();

  const posterUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/w780${backdrop_path}`
    : imgPlaceHolder;

    const handleCardClick = async () => {
      navigate(`/movie/${id}`)
    }

  return (
    <div className="movie-card card shadow-sm" onClick={handleCardClick}>
      <img src={posterUrl} alt={title} />

      <div className="movie-overlay">
        <h4 className="movie-title">{title}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
