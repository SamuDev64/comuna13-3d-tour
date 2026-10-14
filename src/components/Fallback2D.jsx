import React from 'react';
import { HOTSPOTS } from '../data/tourData.js';

/**
 * Lightweight interactive 2D SVG panoramic fallback for low-power devices or non-WebGL projectors.
 */
export default function Fallback2D({ isNight, selectedHotspot, onSelectHotspot }) {
  const pinPositions = {
    escalators: { left: '50%', top: '54%' },
    murals: { left: '31%', top: '60%' },
    kolacho: { left: '69%', top: '58%' },
    viewpoints: { left: '51%', top: '28%' },
    commerce: { left: '36%', top: '42%' },
    metrocable: { left: '76%', top: '32%' }
  };

  return (
    <div
      className="canvas-wrapper"
      style={{
        background: isNight
          ? 'radial-gradient(circle at 50% 25%, #1e1b4b 0%, #070b14 80%)'
          : 'linear-gradient(180deg, #0ea5e9 0%, #1e293b 60%, #0f172a 100%)',
        overflow: 'hidden'
      }}
    >
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%', opacity: 0.92 }}
      >
        <defs>
          <linearGradient id="escGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff5a1f" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>

        {/* Sun / Moon */}
        <circle
          cx={isNight ? 1150 : 280}
          cy={160}
          r={isNight ? 42 : 68}
          fill={isNight ? '#fef08a' : '#fde047'}
          opacity={0.85}
        />

        {/* Aburra Valley Mountain Ridges */}
        <polygon
          points="0,900 0,420 260,210 580,380 860,170 1190,340 1440,220 1440,900"
          fill={isNight ? '#0f172a' : '#1e3a2f'}
        />
        <polygon
          points="0,900 120,480 460,290 740,230 1050,310 1320,450 1440,900"
          fill={isNight ? '#1e293b' : '#334155'}
        />

        {/* Terraced Houses Blocks */}
        {[
          { x: 260, y: 520, w: 95, h: 65, c: '#ec4899' },
          { x: 370, y: 470, w: 110, h: 75, c: '#06b6d4' },
          { x: 500, y: 380, w: 100, h: 70, c: '#f59e0b' },
          { x: 820, y: 460, w: 115, h: 75, c: '#10b981' },
          { x: 950, y: 520, w: 100, h: 68, c: '#a855f7' },
          { x: 640, y: 260, w: 150, h: 65, c: '#f97316' }
        ].map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="6" fill={b.c} opacity="0.88" />
            <rect x={b.x + 16} y={b.y + 18} width="18" height="22" fill="#fef08a" />
            <rect x={b.x + b.w - 34} y={b.y + 18} width="18" height="22" fill="#fef08a" />
          </g>
        ))}

        {/* Central 384m Outdoor Escalator Spine */}
        <path
          d="M 620 790 L 660 660 L 635 550 L 690 440 L 670 340 L 715 260"
          stroke="url(#escGrad)"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Metrocable Line */}
        <line
          x1="920"
          y1="680"
          x2="1160"
          y2="240"
          stroke="#38bdf8"
          strokeWidth="4"
          strokeDasharray="10,8"
        />
      </svg>

      {/* Interactive Hotspot Pins overlaid on 2D Panorama */}
      {HOTSPOTS.map((spot) => {
        const pos = pinPositions[spot.id] || { left: '50%', top: '50%' };
        const isSelected = selectedHotspot?.id === spot.id;
        return (
          <button
            key={spot.id}
            type="button"
            className="hotspot-3d-pin interactive-element"
            style={{
              position: 'absolute',
              left: pos.left,
              top: pos.top,
              transform: 'translate(-50%, -50%)',
              borderColor: spot.color,
              boxShadow: isSelected ? `0 0 24px ${spot.color}` : undefined
            }}
            onClick={() => onSelectHotspot(spot)}
          >
            <span className="hotspot-pin-num" style={{ backgroundColor: spot.color }}>
              {spot.number}
            </span>
            <span>{spot.name}</span>
          </button>
        );
      })}
    </div>
  );
}
