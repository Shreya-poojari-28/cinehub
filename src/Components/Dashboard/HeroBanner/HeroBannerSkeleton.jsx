import React from 'react';
import './HeroBannerSkeleton.css';

const HeroBannerSkeleton = () => {
    return (
        <div className="netflix-hero skeleton">
            <div className="skeleton-bg shimmer" />

            <div className="hero-content d-flex flex-column">
                <div className="skeleton-title shimmer" />
                <div className="skeleton-text shimmer" />
                <div className="skeleton-text short shimmer" />

                <div className="hero-buttons">
                    <div className="skeleton-btn shimmer" />
                    <div className="skeleton-btn shimmer" />
                </div>
            </div>
        </div>
    );
};

export default HeroBannerSkeleton;
