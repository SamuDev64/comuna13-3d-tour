import React, { useState, useEffect, useRef } from 'react';
import {
  Sun,
  Moon,
  Compass,
  Maximize2,
  Eye,
  Layers,
  Play,
  Pause,
  RotateCcw,
  Menu,
  BarChart3,
  Music
} from 'lucide-react';

export default function Navbar({
  menuOpen,
  onToggleMenu,
  activeDrawer,
  onToggleDrawer,
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
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [ambientBeatOn, setAmbientBeatOn] = useState(false);
  const audioCtxRef = useRef(null);
  const beatIntervalRef = useRef(null);

  useEffect(() => {
    if (!timerRunning) return undefined;
    const interval = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning]);

  // Procedural Web Audio API Hip-Hop / Ambient Lo-Fi Beat Generator (100% self-contained)
  useEffect(() => {
    if (!ambientBeatOn) {
      if (beatIntervalRef.current) clearInterval(beatIntervalRef.current);
      return undefined;
    }

    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return undefined;
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioCtx();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    let step = 0;
    const playStep = () => {
      const now = ctx.currentTime;
      // Soft kick on 0 and 4
      if (step % 4 === 0) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(110, now);
        osc.frequency.exponentialRampToValueAtTime(38, now + 0.16);
        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.19);
      }
      // Warm Rhodes chord pad on step 2 and 6
      if (step % 4 === 2) {
        [220, 261.63, 329.63, 392].forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now);
          gain.gain.setValueAtTime(0.02, now);
          gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.36);
        });
      }
      step = (step + 1) % 8;
    };

    playStep();
    beatIntervalRef.current = setInterval(playStep, 340);
    return () => {
      if (beatIntervalRef.current) clearInterval(beatIntervalRef.current);
    };
  }, [ambientBeatOn]);

  const formatTime = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const timerPhase =
    secondsElapsed < 540
      ? 'Tour (09:00)'
      : secondsElapsed < 720
      ? 'Chat (12:00)'
      : 'Bonus (+2:00)';

  return (
    <>
      <header className="top-navbar">
        <div className="brand-group">
          <button
            type="button"
            className={`btn-control ${menuOpen ? 'active' : ''}`}
            onClick={onToggleMenu}
            title="Open Louvre-style Menu 360° Directory of Rooms & Exhibits"
          >
            <Menu size={15} />
            <span>Menu 360°</span>
          </button>

          <div className="brand-badge">C13</div>
          <div>
            <div className="brand-title">COMUNA 13 · 3D VIRTUAL MUSEUM</div>
            <div className="brand-subtitle">Medellin, Colombia · Interactive Exhibition</div>
          </div>
        </div>

        {/* Live 9+3m Pacing Timer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.42rem',
            padding: '0.28rem 0.7rem',
            borderRadius: '999px',
            background: 'rgba(15, 23, 42, 0.9)',
            border: '1px solid rgba(255,255,255,0.14)',
            fontSize: '0.74rem'
          }}
        >
          <span
            style={{
              fontFamily: 'monospace',
              fontWeight: 800,
              fontSize: '0.84rem',
              color: secondsElapsed >= 540 ? '#fbbf24' : '#34d399'
            }}
          >
            {formatTime(secondsElapsed)}
          </span>
          <span style={{ color: '#94a3b8', fontSize: '0.68rem' }}>{timerPhase}</span>
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
          >
            <RotateCcw size={13} />
          </button>
        </div>

        {/* Museum Controls */}
        <div className="nav-controls">
          <button
            type="button"
            className={`btn-control ${activeDrawer ? 'active' : ''}`}
            onClick={() => onToggleDrawer(activeDrawer ? null : 'data')}
            title="Open Data, District Comparison & Investment Hall (Shortcut: D)"
          >
            <BarChart3 size={14} />
            <span>Data &amp; Investment Hall</span>
          </button>

          <button
            type="button"
            className={`btn-control ${ambientBeatOn ? 'active-cyan' : ''}`}
            onClick={() => setAmbientBeatOn((b) => !b)}
            title="Toggle Ambient Comuna 13 Lo-Fi Hip-Hop Soundscape"
          >
            <Music size={14} />
            <span>{ambientBeatOn ? 'Beat: ON' : 'Hip-Hop Beat'}</span>
          </button>

          <button
            type="button"
            className={`btn-control ${freeExplore ? 'active-cyan' : ''}`}
            onClick={onToggleFreeExplore}
            title="Shortcut: E — Free 3D Orbit Exploration"
          >
            <Compass size={14} />
            <span>{freeExplore ? '3D Orbit: ON' : 'Free 3D (E)'}</span>
          </button>

          <button
            type="button"
            className={`btn-control ${isNight ? 'active' : ''}`}
            onClick={onToggleNight}
            title="Shortcut: N — Toggle Day / Night Hillside Lights"
          >
            {isNight ? <Moon size={14} /> : <Sun size={14} />}
            <span>{isNight ? 'Night (N)' : 'Day (N)'}</span>
          </button>

          <button
            type="button"
            className={`btn-control ${minimalMode ? 'active-cyan' : ''}`}
            onClick={onToggleMinimalMode}
            title="Shortcut: M — Hide/Show Room Plaque for Pure 3D View"
          >
            <Eye size={14} />
            <span>{minimalMode ? 'Show Plaque' : 'Pure 3D (M)'}</span>
          </button>

          <button
            type="button"
            className={`btn-control ${use2DFallback ? 'active' : ''}`}
            onClick={onToggle2DFallback}
          >
            <Layers size={14} />
            <span>{use2DFallback ? '2D Lite' : '3D WebGL'}</span>
          </button>

          <button
            type="button"
            className="btn-control"
            onClick={onToggleFullscreen}
            title="Shortcut: F — Fullscreen"
          >
            <Maximize2 size={14} />
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
