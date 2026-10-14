import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TOUR_STOPS, HOTSPOTS } from '../data/tourData.js';

/**
 * Louvre Petite Galerie Style Bottom Filmstrip Carousel:
 * Scroll through photo thumbnails of rooms and click to fly the 3D camera.
 */
export default function PresentationHUD({
  activeStopIndex,
  onNavigateStop,
  selectedHotspot,
  onSelectHotspot
}) {
  const canPrev = activeStopIndex > 0;
  const canNext = activeStopIndex < TOUR_STOPS.length - 1;

  return (
    <nav className="louvre-bottom-dock" aria-label="Virtual Museum Filmstrip and Exhibits">
      <button
        type="button"
        className="btn-control"
        disabled={!canPrev}
        onClick={() => canPrev && onNavigateStop(activeStopIndex - 1)}
        style={{ opacity: canPrev ? 1 : 0.4, flexShrink: 0 }}
        title="Previous Room (Left Arrow)"
      >
        <ChevronLeft size={15} />
        <span>Prev</span>
      </button>

      {/* Scrollable Photo Filmstrip of the 8 Rooms */}
      <div className="filmstrip-scroll">
        {TOUR_STOPS.map((stop, idx) => (
          <button
            key={stop.id}
            type="button"
            className={`filmstrip-card ${idx === activeStopIndex ? 'active' : ''}`}
            onClick={() => onNavigateStop(idx)}
            title={`${stop.roomCode}: ${stop.title}`}
          >
            <img src={stop.heroImage} alt={stop.title} />
            <div className="filmstrip-card-label">
              <div style={{ fontSize: '0.56rem', color: '#fbbf24', fontWeight: 800 }}>
                {idx === 0 ? 'ENTRANCE' : `ROOM 0${idx}`}
              </div>
              <div
                style={{
                  fontSize: '0.64rem',
                  color: '#ffffff',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {stop.title}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Quick Exhibit Pins 1-6 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          flexShrink: 0
        }}
      >
        {HOTSPOTS.map((spot) => {
          const isSelected = selectedHotspot?.id === spot.id;
          return (
            <button
              key={spot.id}
              type="button"
              onClick={() => onSelectHotspot(spot)}
              style={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                border: isSelected ? '2px solid #ffffff' : `1.5px solid ${spot.color}`,
                background: isSelected ? spot.color : 'rgba(15, 23, 42, 0.9)',
                color: isSelected ? '#070b14' : '#ffffff',
                fontSize: '0.72rem',
                fontWeight: 900,
                cursor: 'pointer'
              }}
              title={`Exhibit #${spot.number}: ${spot.name}`}
            >
              {spot.number}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="btn-control"
        disabled={!canNext}
        onClick={() => canNext && onNavigateStop(activeStopIndex + 1)}
        style={{ opacity: canNext ? 1 : 0.4, flexShrink: 0 }}
        title="Next Room (Right Arrow)"
      >
        <span>Next</span>
        <ChevronRight size={15} />
      </button>
    </nav>
  );
}
