import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Compass,
  Maximize2,
  Eye,
  Layers,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

export default function Navbar({
  isNight,
  onToggleNight,
  freeExplore,
  onToggleFreeExplore,
  minimalMode,
  onToggleMinimalMode,
  use2DFallback,
  onToggle2DFallback,
  onToggleFullscreen,
  progressPercent
}) {
  // 12-minute live presentation timer (9 min tour = 540s + 3 min chat = 180s)
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (!timerRunning) return undefined;
    const interval = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning]);

  const formatTime = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const timerPhase =
    secondsElapsed < 540
      ? 'Tour (Target: 09:00)'
      : secondsElapsed < 720
      ? 'Q&A Chat (Target: 12:00)'
      : 'Bonus Time (+2:00)';

  return (
    <>
      <header className="top-navbar interactive-element">
        <div className="brand-group">
          <div className="brand-badge">C13</div>
          <div>
            <div className="brand-title">COMUNA 13 · MEDELLIN 3D TOUR</div>
            <div className="brand-subtitle">
              Art, Social Urbanism &amp; Responsible Investment Pitch
            </div>
          </div>
        </div>

        {/* Live Presentation Pacing Timer (9 min Tour + 3 min Chat) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.32rem 0.75rem',
            borderRadius: '999px',
            background: 'rgba(15, 23, 42, 0.9)',
            border: '1px solid rgba(255,255,255,0.14)',
            fontSize: '0.76rem'
          }}
          title="Live Presentation Pacing Timer: 9 min Tour + 3 min Visitor Chat"
        >
          <span
            style={{
              fontFamily: 'monospace',
              fontWeight: 800,
              fontSize: '0.88rem',
              color: secondsElapsed >= 540 ? '#fbbf24' : '#34d399'
            }}
          >
            {formatTime(secondsElapsed)}
          </span>
          <span style={{ color: '#94a3b8', fontSize: '0.7rem' }}>{timerPhase}</span>
          <button
            type="button"
            onClick={() => setTimerRunning((r) => !r)}
            style={{
              background: 'none',
              border: 'none',
              color: '#f8fafc',
              cursor: 'pointer',
              display: 'inline-flex',
              padding: '2px'
            }}
            title={timerRunning ? 'Pause Timer' : 'Start Live Timer'}
          >
            {timerRunning ? <Pause size={13} /> : <Play size={13} />}
          </button>
          <button
            type="button"
            onClick={() => {
              setTimerRunning(false);
              setSecondsElapsed(0);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'inline-flex',
              padding: '2px'
            }}
            title="Reset Timer"
          >
            <RotateCcw size={13} />
          </button>
        </div>

        {/* Interactive Controls */}
        <div className="nav-controls">
          <button
            type="button"
            className={`btn-control ${freeExplore ? 'active-cyan' : ''}`}
            onClick={onToggleFreeExplore}
            title="Shortcut: E — Rotate and zoom the 3D map freely with mouse or touch"
          >
            <Compass size={14} />
            <span>{freeExplore ? 'Free 3D Orbit: ON' : 'Explore 3D Map (E)'}</span>
          </button>

          <button
            type="button"
            className={`btn-control ${isNight ? 'active' : ''}`}
            onClick={onToggleNight}
            title="Shortcut: N — Switch between Golden Day and Barrio Night lighting"
          >
            {isNight ? <Moon size={14} /> : <Sun size={14} />}
            <span>{isNight ? 'Night Mode (N)' : 'Day Mode (N)'}</span>
          </button>

          <button
            type="button"
            className={`btn-control ${minimalMode ? 'active-cyan' : ''}`}
            onClick={onToggleMinimalMode}
            title="Shortcut: M — Minimal-Text Gallery Mode for live speaking"
          >
            <Eye size={14} />
            <span>{minimalMode ? 'Gallery Mode: ON' : 'Minimal Text (M)'}</span>
          </button>

          <button
            type="button"
            className={`btn-control ${use2DFallback ? 'active' : ''}`}
            onClick={onToggle2DFallback}
            title="Switch between Full WebGL 3D and Lightweight 2D Projector Fallback"
          >
            <Layers size={14} />
            <span>{use2DFallback ? '2D Lite Mode' : '3D WebGL'}</span>
          </button>

          <button
            type="button"
            className="btn-control"
            onClick={onToggleFullscreen}
            title="Shortcut: F — Toggle Fullscreen Mode for Projectors"
          >
            <Maximize2 size={14} />
            <span>Fullscreen (F)</span>
          </button>
        </div>
      </header>

      <div className="tour-progress-track">
        <div
          className="tour-progress-fill"
          style={{ width: `${Math.min(100, Math.max(5, progressPercent))}%` }}
        />
      </div>
    </>
  );
}
