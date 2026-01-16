import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../Dashboard/MovieCard/MovieCard';
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getNowPlayingMovies
} from '../../redux/dashboard/action';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import SkeletonCard from './SkeletonCard/SkeletonCard'

const MovieListPage = () => {
  const { type } = useParams();
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const config = {
    popular: {
      title: 'Popular Movies',
      selector: state => state.reusableSlice.PopularMovieList,
      action: getPopularMovies
    },
    'top_rated': {
      title: 'Top Rated Movies',
      selector: state => state.reusableSlice.TopRatedList,
      action: getTopRatedMovies
    },
    up_coming: {
      title: 'Upcoming Movies',
      selector: state => state.reusableSlice.UpcomingList,
      action: getUpcomingMovies
    },
    'now_playing': {
      title: 'Now Playing Movies',
      selector: state => state.reusableSlice.NowPlayingList,
      action: getNowPlayingMovies
    }
  };

  const current = config[type];
  const movieState = useSelector(current.selector);
  const movies = movieState?.results || [];
  const loadMoreRef = useRef(null)

  const loadMovies = useCallback(async () => {
    if (loading) return;
    if (page >= 500) return;

    setLoading(true);
    await dispatch(current.action(page));
    setLoading(false);
  }, [page, type, loading]);

  useEffect(() => {
    setPage(1);
    dispatch(current.action(1));
  }, [type]);

  // Infinite scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        setPage(prev => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (page > 1) loadMovies();
  }, [page]);

  return (
    <div className="container my-4">
      <h2 className="mb-4">{current.title}</h2>

      <div className="d-flex flex-wrap justify-content-center">
        {movies.map(movie => (
          <div key={movie.id} className="">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      {(loading && page <= 500) && (

        <div className='d-flex gap-4 flex-wrap justify-content-center'>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <SkeletonCard key={item} />

          ))}

        </div>
      )}

      {page >= 500 && (
        <div ref={loadMoreRef} className="load-more-trigger text-center">
          <span className="end-text">🎬 You’ve reached the end</span>
        </div>
      )}
      <ScrollToTop />
    </div>
  );
};

export default MovieListPage;
