import "./MovieDetailsSkeleton.css";

const MovieDetailsSkeleton = () => {
  return (
    <div className="movie-details skeleton">
      {/* HERO BACKDROP */}
      <div className="hero-skeleton shimmer-dark">
        <div className="overlay">
          <div className="hero-content">
            {/* POSTER */}
            <div className="poster-skeleton shimmer-dark"></div>

            {/* INFO */}
            <div className="info-skeleton">
              <div className="title-skeleton shimmer-dark"></div>

              <div className="meta-skeleton">
                <span className="chip shimmer-dark"></span>
                <span className="chip shimmer-dark"></span>
                <span className="chip shimmer-dark"></span>
              </div>

              <div className="genres-skeleton">
                <span className="genre shimmer-dark"></span>
                <span className="genre shimmer-dark"></span>
              </div>

              <div className="overview-skeleton">
                <div className="line shimmer-dark"></div>
                <div className="line shimmer-dark"></div>
                <div className="line short shimmer-dark"></div>
              </div>

              <div className="btn-skeleton shimmer-dark"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSkeleton;
