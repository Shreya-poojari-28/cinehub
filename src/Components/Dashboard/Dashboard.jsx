import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard/MovieCard';
import './Dashboard.css';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../../redux/dashboard/action';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const popularMovies = useSelector(
    (state) => state?.reusableSlice?.PopularMovieList?.results || []
  );

  const topRatedMovies = useSelector((state) => state?.reusableSlice?.TopRatedList?.results || [])
  const upcomingMovies = useSelector((state) => state?.reusableSlice?.UpcomingList?.results || [])
  const nowPlayingMovies = useSelector((state) => state?.reusableSlice?.NowPlayingList?.results || [])

  useEffect(() => {
    dispatch(getPopularMovies())
    dispatch(getTopRatedMovies())
    dispatch(getUpcomingMovies())
    dispatch(getNowPlayingMovies())
  }, [dispatch]);

  const movies = [
    { id: 1, movie_list: popularMovies, name: 'Popular Movies', type: 'popular' },
    { id: 2, movie_list: topRatedMovies, name: 'Top Rated', type: 'top_rated'},
    { id: 3, movie_list: nowPlayingMovies, name: 'Now Playing', type: 'now_playing' },
    { id: 4, movie_list: upcomingMovies, name: 'Up Coming', type: 'up_coming'},
  ]

   return (
    <div className="container my-4">
      {movies.map((item) => (
        <div key={item.id} className="mb-5">
          
          {/* Section Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="mb-0">{item.name}</h2>

            <button
              className="btn btn-sm show-all-btn"
              onClick={() => navigate(`/movies/${item.type}`)}
            >
              Show All →
            </button>
          </div>

          {/* Scrollable row */}
          <div className="d-flex flex-nowrap overflow-auto pb-2 cards-wrapper">
            {item.movie_list.map((movie) => (
              <div key={movie.id} className="flex-shrink-0">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Dashboard;
