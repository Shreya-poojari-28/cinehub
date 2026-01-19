import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../redux/movieDetails/action";
import { clearMovieDetails } from "../../reusableSlice";
import TrailerModal from "./TrailerModal/TrailerModal";
import "./MovieDetails.css";
import MovieDetailsSkeleton from "./MovieDetailsSkeleton/MovieDetailsSkeleton ";

const IMAGE_BASE = "https://image.tmdb.org/t/p/original";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [showTrailer, setShowTrailer] = useState(false);

  const { MovieDetails: movie, movieDetailsLoading } = useSelector(
    (state) => state.reusableSlice
  );

  useEffect(() => {
    dispatch(getMovieDetails(id));
    return () => dispatch(clearMovieDetails());
  }, [dispatch, id]);

  useEffect(() => {
    document.body.style.overflow = showTrailer ? "hidden" : "auto";
  }, [showTrailer]);

  if (movieDetailsLoading) return <MovieDetailsSkeleton />;
  if (!movie) return null;

  const director = movie?.credits?.crew?.find(
    (c) => c.job === "Director"
  );

  const trailers =
    movie?.videos?.results?.filter(
      (v) => v.site === "YouTube" && v.type === "Trailer"
    ) || [];

  return (
    <div className="movie-details">
      {/* HERO */}
      <div
        className="movie-hero"
        style={{
          backgroundImage: `url(${IMAGE_BASE}${movie.backdrop_path})`,
        }}
      >
        <div className="overlay">
          <div className="hero-content">
            <img
              src={`${IMAGE_BASE}${movie.poster_path}`}
              alt={movie.title}
              className="poster"
            />

            <div className="info">
              <h1>{movie.title}</h1>

              <div className="meta">
                <span>⭐ {movie.vote_average}</span>
                <span>{movie.runtime} min</span>
                <span>{movie.release_date}</span>
              </div>

              <div className="genres">
                {movie.genres?.map((g) => (
                  <span key={g.id}>{g.name}</span>
                ))}
              </div>

              <p className="overview">{movie.overview}</p>

              {trailers.length > 0 && (
                <button
                  className="trailer-btn"
                  onClick={() => setShowTrailer(true)}
                >
                  ▶ Watch Trailer
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CAST */}
      <section className="section">
        <h2>Top Cast</h2>
        <div className="cast-grid">
          {movie?.credits?.cast?.slice(0, 10).map((actor) => (
            <div key={actor.id} className="cast-card">
              <img
                src={
                  actor.profile_path
                    ? `${IMAGE_BASE}${actor.profile_path}`
                    : "/avatar.png"
                }
                alt={actor.name}
              />
              <h4>{actor.name}</h4>
              <p>{actor.character}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CREW */}
      <section className="section info-grid">
        <div>
          <h3>Director</h3>
          <p>{director?.name || "N/A"}</p>
        </div>
        <div>
          <h3>Language</h3>
          <p>{movie.original_language.toUpperCase()}</p>
        </div>
        <div>
          <h3>Status</h3>
          <p>{movie.status}</p>
        </div>
      </section>

      {/* TRAILER MODAL */}
      <TrailerModal
        show={showTrailer}
        videos={trailers}
        onClose={() => setShowTrailer(false)}
      />
    </div>
  );
};

export default MovieDetails;
