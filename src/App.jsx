import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, ArrowDown, Sparkles } from 'lucide-react';
import { TOUR_STOPS, HOTSPOTS } from './data/tourData.js';
import Scene3D from './components/Scene3D.jsx';
import Fallback2D from './components/Fallback2D.jsx';
import Navbar from './components/Navbar.jsx';
import HotspotModal from './components/HotspotModal.jsx';
import DataSection from './components/DataSection.jsx';
import ComparisonSection from './components/ComparisonSection.jsx';
import WhyInvestSection from './components/WhyInvestSection.jsx';
import SourcesSection from './components/SourcesSection.jsx';
import PresentationHUD from './components/PresentationHUD.jsx';

function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (err) {
    return false;
  }
}

export default function App() {
  const [activeStopIndex, setActiveStopIndex] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const [isNight, setIsNight] = useState(true);
  const [freeExplore, setFreeExplore] = useState(false);
  const [minimalMode, setMinimalMode] = useState(false);
  const [use2DFallback, setUse2DFallback] = useState(false);

  // Detect WebGL capability on mount
  useEffect(() => {
    if (!checkWebGLSupport()) {
      setUse2DFallback(true);
    }
  }, []);

  const activeStop = TOUR_STOPS[activeStopIndex] || TOUR_STOPS[0];
  const progressPercent = ((activeStopIndex + 1) / TOUR_STOPS.length) * 100;

  // Scroll smoothly to a specific tour stop section
  const navigateToStop = useCallback((index) => {
    const clamped = Math.max(0, Math.min(TOUR_STOPS.length - 1, index));
    setActiveStopIndex(clamped);
    setSelectedHotspot(null);
    setFreeExplore(false);
    const el = document.getElementById(`tour-stop-${clamped}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  // Select hotspot by ID or object
  const handleSelectHotspot = useCallback((spotOrId) => {
    if (!spotOrId) {
      setSelectedHotspot(null);
      return;
    }
    if (typeof spotOrId === 'string') {
      const found = HOTSPOTS.find((h) => h.id === spotOrId);
      if (found) setSelectedHotspot(found);
    } else {
      setSelectedHotspot(spotOrId);
    }
  }, []);

  // Toggle browser fullscreen
  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  // IntersectionObserver to update activeStopIndex as user scrolls through chapters
  useEffect(() => {
    const sections = TOUR_STOPS.map((_, idx) =>
      document.getElementById(`tour-stop-${idx}`)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idxAttr = Number(entry.target.getAttribute('data-stop-index'));
            if (!Number.isNaN(idxAttr)) {
              setActiveStopIndex(idxAttr);
            }
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Keyboard shortcuts for live presentation mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        navigateToStop(activeStopIndex + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        navigateToStop(activeStopIndex - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        handleToggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setIsNight((prev) => !prev);
      } else if (e.key === 'e' || e.key === 'E') {
        e.preventDefault();
        setFreeExplore((prev) => !prev);
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        setMinimalMode((prev) => !prev);
      } else if (e.key === 'Escape') {
        setSelectedHotspot(null);
        setFreeExplore(false);
      } else if (['1', '2', '3', '4', '5', '6'].includes(e.key)) {
        const num = Number(e.key);
        const spot = HOTSPOTS.find((h) => h.number === num);
        if (spot) setSelectedHotspot(spot);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStopIndex, navigateToStop, handleToggleFullscreen]);

  return (
    <div>
      {/* Fixed 3D Hillside Canvas (or 2D SVG Fallback) */}
      {use2DFallback ? (
        <Fallback2D
          isNight={isNight}
          selectedHotspot={selectedHotspot}
          onSelectHotspot={handleSelectHotspot}
        />
      ) : (
        <Scene3D
          activeStop={activeStop}
          selectedHotspot={selectedHotspot}
          onSelectHotspot={handleSelectHotspot}
          isNight={isNight}
          freeExplore={freeExplore}
        />
      )}

      {/* Top Navigation & Live Timer */}
      <Navbar
        isNight={isNight}
        onToggleNight={() => setIsNight((n) => !n)}
        freeExplore={freeExplore}
        onToggleFreeExplore={() => setFreeExplore((f) => !f)}
        minimalMode={minimalMode}
        onToggleMinimalMode={() => setMinimalMode((m) => !m)}
        use2DFallback={use2DFallback}
        onToggle2DFallback={() => setUse2DFallback((f) => !f)}
        onToggleFullscreen={handleToggleFullscreen}
        progressPercent={progressPercent}
      />

      {/* Free Explore Floating Banner */}
      {freeExplore && (
        <div
          className="interactive-element"
          style={{
            position: 'fixed',
            top: '82px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 55,
            background: 'rgba(6, 182, 212, 0.92)',
            color: '#04131a',
            padding: '0.5rem 1.2rem',
            borderRadius: '999px',
            fontWeight: 800,
            fontSize: '0.82rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            boxShadow: '0 10px 30px rgba(6, 182, 212, 0.4)'
          }}
        >
          <Compass size={16} />
          <span>
            Free 3D Exploration Active — Drag to Rotate, Scroll to Zoom, Right-Click to Pan, or
            Click Any Pin (1–6)
          </span>
          <button
            type="button"
            onClick={() => setFreeExplore(false)}
            style={{
              background: '#04131a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '99px',
              padding: '0.2rem 0.65rem',
              fontSize: '0.74rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Resume Guided Tour
          </button>
        </div>
      )}

      {/* Scroll-Driven Narrative Chapters & Deep-Dive Sections */}
      <main
        className="ui-layer"
        style={{
          opacity: freeExplore ? 0.12 : 1,
          transition: 'opacity 0.35s ease'
        }}
      >
        <div className="tour-stops-container">
          {TOUR_STOPS.map((stop, idx) => {
            const alignmentClass =
              idx === 0
                ? 'align-left'
                : idx % 2 === 1
                ? 'align-right'
                : 'align-left';
            const linkedSpot = stop.linkedHotspotId
              ? HOTSPOTS.find((h) => h.id === stop.linkedHotspotId)
              : null;

            return (
              <React.Fragment key={stop.id}>
                <section
                  id={`tour-stop-${idx}`}
                  data-stop-index={idx}
                  className={`tour-stop-section ${alignmentClass}`}
                >
                  <motion.article
                    className={`story-card ${minimalMode ? 'minimal-mode' : ''}`}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                  >
                    <div className="moment-pill">
                      <Sparkles size={12} />
                      <span>{stop.momentBadge}</span>
                    </div>

                    <div className="stop-tag">{stop.tag}</div>
                    <h1 className="stop-title">{stop.title}</h1>
                    <p className="stop-subtitle">{stop.subtitle}</p>

                    {/* Standard Rich Text vs. Minimal-Text Live Gallery Cues */}
                    {minimalMode ? (
                      <ul className="minimal-cues-list">
                        {stop.minimalCues.map((cue, cIdx) => (
                          <li key={cIdx}>
                            <span>•</span>
                            <span>{cue}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="stop-summary">{stop.summary}</p>
                    )}

                    {/* Verified Key Stat Callout */}
                    <div className="stat-callout">
                      <span className="stat-callout-value">{stop.keyStat.value}</span>
                      <span className="stat-callout-label">{stop.keyStat.label}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="card-actions">
                      {linkedSpot && (
                        <button
                          type="button"
                          className="btn-primary"
                          onClick={() => handleSelectHotspot(linkedSpot)}
                        >
                          <MapPin size={15} />
                          <span>Inspect {linkedSpot.name}</span>
                        </button>
                      )}

                      {idx < TOUR_STOPS.length - 1 && (
                        <button
                          type="button"
                          className="btn-secondary"
                          onClick={() => navigateToStop(idx + 1)}
                        >
                          <span>Next Stop ({idx + 2}/8)</span>
                          <ArrowDown size={14} />
                        </button>
                      )}

                      {idx === 0 && (
                        <button
                          type="button"
                          className="btn-secondary"
                          onClick={() => setFreeExplore(true)}
                        >
                          <Compass size={15} />
                          <span>Free 3D Map Mode</span>
                        </button>
                      )}
                    </div>
                  </motion.article>
                </section>

                {/* Inject Data & Comparison Decks after Stop 6 (Recommend) */}
                {stop.id === 'recommend' && !minimalMode && (
                  <>
                    <DataSection />
                    <ComparisonSection />
                  </>
                )}

                {/* Inject Why Invest & Sources after Stop 7 (Invest/Chat) */}
                {stop.id === 'invest' && (
                  <>
                    <WhyInvestSection onJumpToHotspot={handleSelectHotspot} />
                    <SourcesSection />
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </main>

      {/* Hotspot Slide-Over Drawer */}
      <HotspotModal
        hotspot={selectedHotspot}
        onClose={() => setSelectedHotspot(null)}
        onSelectHotspot={handleSelectHotspot}
      />

      {/* Bottom Presentation HUD */}
      <PresentationHUD
        activeStopIndex={activeStopIndex}
        onNavigateStop={navigateToStop}
        selectedHotspot={selectedHotspot}
        onSelectHotspot={handleSelectHotspot}
      />
    </div>
  );
}
