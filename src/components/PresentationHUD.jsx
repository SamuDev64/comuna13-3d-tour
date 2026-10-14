import React from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { TOUR_STOPS, HOTSPOTS } from '../data/tourData.js';

export default function PresentationHUD({
  activeStopIndex,
  onNavigateStop,
  selectedHotspot,
  onSelectHotspot
}) {
  const canPrev = activeStopIndex > 0;
  const canNext = activeStopIndex < TOUR_STOPS.length - 1;

  return (
    <nav className="presentation-hud" aria-label="Presentation Slide and Hotspot Controls">
      <button
        type="button"
        className="btn-control"
        disabled={!canPrev}
        onClick={() => canPrev && onNavigateStop(activeStopIndex - 1)}
        style={{ opacity: canPrev ? 1 : 0.4 }}
        title="Previous Stop (Left Arrow Key)"
      >
        <ChevronLeft size={15} />
        <span>Prev</span>
      </button>

      {/* Slide Stop Indicator Dots */}
      <div className="hud-dots" title="Click any dot or press ← → keys to jump between stops">
        {TOUR_STOPS.map((stop, idx) => (
          <button
            key={stop.id}
            type="button"
            className={`hud-dot ${idx === activeStopIndex ? 'active' : ''}`}
            onClick={() => onNavigateStop(idx)}
            title={`Stop ${idx + 1}: ${stop.title}`}
          />
        ))}
      </div>

      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#cbd5e1', padding: '0 0.25rem' }}>
        {activeStopIndex + 1} / {TOUR_STOPS.length}
      </span>

      <button
        type="button"
        className="btn-control"
        disabled={!canNext}
        onClick={() => canNext && onNavigateStop(activeStopIndex + 1)}
        style={{ opacity: canNext ? 1 : 0.4 }}
        title="Next Stop (Right Arrow Key)"
      >
        <span>Next</span>
        <ChevronRight size={15} />
      </button>

      {/* Divider */}
      <span
        style={{
          width: 1,
          height: 18,
          background: 'rgba(255,255,255,0.18)',
          margin: '0 0.2rem'
        }}
      />

      {/* Quick Hotspot Trigger Buttons (Keys 1-6) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', flexWrap: 'wrap' }}>
        <span
          style={{
            fontSize: '0.7rem',
            color: '#94a3b8',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.2rem'
          }}
        >
          <MapPin size={12} color="#ff5a1f" />
          Hotspots (1–6):
        </span>
        {HOTSPOTS.map((spot) => {
          const isSelected = selectedHotspot?.id === spot.id;
          return (
            <button
              key={spot.id}
              type="button"
              onClick={() => onSelectHotspot(isSelected ? null : spot)}
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                border: isSelected ? '2px solid #ffffff' : `1px solid ${spot.color}`,
                background: isSelected ? spot.color : 'rgba(15, 23, 42, 0.85)',
                color: isSelected ? '#070b14' : '#ffffff',
                fontSize: '0.72rem',
                fontWeight: 900,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              title={`Key ${spot.number}: ${spot.name}`}
            >
              {spot.number}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
