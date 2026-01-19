import { useEffect, useState } from "react";
import "./TrailerModal.css";

const TrailerModal = ({ show, videos, onClose }) => {
  const [activeKey, setActiveKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (videos?.length) setActiveKey(videos[0].key);
  }, [videos]);

  useEffect(() => {
    if (!show) return;

    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [show, onClose]);

  if (!show || !activeKey) return null;

  return (
    <div className="trailer-backdrop" onClick={onClose}>
      <div
        className="trailer-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* AMBIENT GLOW */}
        <div className="ambient-glow" />

        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="video-wrapper">
          {loading && <div className="video-skeleton shimmer-dark" />}

          <iframe
            src={`https://www.youtube.com/embed/${activeKey}?autoplay=1&controls=1&mute=0`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            onLoad={() => setLoading(false)}
            title="Trailer"
          />
        </div>

        {videos.length > 1 && (
          <div className="trailer-list">
            {videos.map((v) => (
              <button
                key={v.id}
                className={`${v.key === activeKey ? "active" : ""} cursor-pointer`}
                onClick={() => {
                  setLoading(true);
                  setActiveKey(v.key);
                }}
              >
                {v.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrailerModal;
