import React, { useEffect, useState } from 'react';
import './HeroBanner.css';
import axiosInstance from '../../../redux/api';
import HeroBannerSkeleton from './HeroBannerSkeleton';
import { useNavigate } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_API_KEY;

const HeroBanner = ({ movie }) => {
    const [trailerKey, setTrailerKey] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showTrailer, setShowTrailer] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (!movie) return;

        const fetchTrailer = async () => {
            try {
                const res = await axiosInstance.get(`movie/${movie.id}/videos`);

                const trailer = res.data.results.find(
                    (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
                );

                setTrailerKey(trailer?.key || null);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTrailer();
    }, [movie]);

    if (!movie || loading) {
        return <HeroBannerSkeleton />;
    }

    const isMobile = window.innerWidth >= 768;

    const playTrailerFullscreen = () => {
        if (!trailerKey) return;

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=1`;
        iframe.allow = 'autoplay; fullscreen';
        iframe.allowFullscreen = true;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';

        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100vw';
        container.style.height = '100vh';
        container.style.background = 'black';
        container.style.zIndex = '9999';
        container.appendChild(iframe);

        document.body.appendChild(container);

        // Request fullscreen
        if (container.requestFullscreen) container.requestFullscreen();
        else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
        else if (container.msRequestFullscreen) container.msRequestFullscreen();

        // Remove container when fullscreen is exited
        const cleanup = () => {
            if (document.fullscreenElement === null) {
                document.body.removeChild(container);
                document.removeEventListener('fullscreenchange', cleanup);
            }
        };
        document.addEventListener('fullscreenchange', cleanup);
    };
    
    return (
        <div className="netflix-hero">
            {isMobile && trailerKey ? (
                <iframe
                    className="hero-video"
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}&modestbranding=1`}
                    title="Hero Trailer"
                    allow="autoplay"
                />
            ) : (
                <img
                    className="hero-image"
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                />
            )}

            <div className="hero-gradient" />

            <div className="hero-content d-flex flex-column">
                <h1 className="hero-title">{movie.title}</h1>
                <p className="hero-overview">
                    {movie.overview?.slice(0, 180)}...
                </p>

                <div className="hero-buttons">
                    <button className="play-btn" onClick={playTrailerFullscreen}>
                        <i className="fa-solid fa-play"></i> Play
                    </button>
                    <button className="info-btn" onClick={() => navigate(`/movie/${movie.id}`)}><i class="fa-solid fa-info"></i>More Info</button>
                </div>
            </div>

            {showTrailer && trailerKey && (
                <div className="trailer-modal">
                    <iframe
                        className="trailer-iframe"
                        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=1`}
                        title="Trailer"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                    <button className="close-btn" onClick={() => setShowTrailer(false)}>✕</button>
                </div>
            )}

        </div>
    );
};

export default HeroBanner;
