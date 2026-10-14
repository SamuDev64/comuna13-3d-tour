import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Compass,
  Sparkles,
  Image as ImageIcon,
  PlayCircle,
  Box,
  Volume2,
  VolumeX,
  BarChart3,
  X
} from 'lucide-react';
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
  const [modalInitialTab, setModalInitialTab] = useState('photos');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState(null); // null | 'data' | 'invest'
  const [isNight, setIsNight] = useState(true);
  const [freeExplore, setFreeExplore] = useState(false);
  const [minimalMode, setMinimalMode] = useState(false);
  const [use2DFallback, setUse2DFallback] = useState(false);
  const [isSpeakingRoom, setIsSpeakingRoom] = useState(false);

  useEffect(() => {
    if (!checkWebGLSupport()) {
      setUse2DFallback(true);
    }
  }, []);

  const activeStop = TOUR_STOPS[activeStopIndex] || TOUR_STOPS[0];
  const progressPercent = ((activeStopIndex + 1) / TOUR_STOPS.length) * 100;
  const linkedSpot = activeStop.linkedHotspotId
    ? HOTSPOTS.find((h) => h.id === activeStop.linkedHotspotId)
    : HOTSPOTS[0];

  const stopSpeech = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeakingRoom(false);
  }, []);

  const navigateToStop = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(TOUR_STOPS.length - 1, index));
      stopSpeech();
      setActiveStopIndex(clamped);
      setSelectedHotspot(null);
      setFreeExplore(false);
      setActiveDrawer(null);
    },
    [stopSpeech]
  );

  const handleSelectHotspot = useCallback(
    (spotOrId, tab = 'photos') => {
      stopSpeech();
      if (!spotOrId) {
        setSelectedHotspot(null);
        return;
      }
      setModalInitialTab(tab);
      setActiveDrawer(null);
      if (typeof spotOrId === 'string') {
        const found = HOTSPOTS.find((h) => h.id === spotOrId);
        if (found) setSelectedHotspot(found);
      } else {
        setSelectedHotspot(spotOrId);
      }
    },
    [stopSpeech]
  );

  const toggleRoomNarration = () => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeakingRoom) {
      stopSpeech();
    } else {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(
        activeStop.audioNarration || activeStop.subtitle
      );
      utter.lang = 'en-US';
      utter.rate = 0.98;
      utter.onend = () => setIsSpeakingRoom(false);
      setIsSpeakingRoom(true);
      window.speechSynthesis.speak(utter);
    }
  };

  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  // Mouse wheel smoothly steps between rooms when no modal/drawer is open
  useEffect(() => {
    let lastWheel = 0;
    const onWheel = (e) => {
      if (selectedHotspot || activeDrawer || menuOpen || freeExplore) return;
      const now = Date.now();
      if (now - lastWheel < 900) return;
      if (Math.abs(e.deltaY) > 35) {
        lastWheel = now;
        if (e.deltaY > 0 && activeStopIndex < TOUR_STOPS.length - 1) {
          navigateToStop(activeStopIndex + 1);
        } else if (e.deltaY < 0 && activeStopIndex > 0) {
          navigateToStop(activeStopIndex - 1);
        }
      }
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [activeStopIndex, selectedHotspot, activeDrawer, menuOpen, freeExplore, navigateToStop]);

  // Keyboard shortcuts
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
      } else if (e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        setActiveDrawer((prev) => (prev ? null : 'data'));
      } else if (e.key === 'Escape') {
        setSelectedHotspot(null);
        setActiveDrawer(null);
        setMenuOpen(false);
        setFreeExplore(false);
      } else if (['1', '2', '3', '4', '5', '6'].includes(e.key)) {
        const num = Number(e.key);
        const spot = HOTSPOTS.find((h) => h.number === num);
        if (spot) handleSelectHotspot(spot, 'photos');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStopIndex, navigateToStop, handleToggleFullscreen, handleSelectHotspot]);

  return (
    <div>
      {/* 100% Fullscreen 3D Virtual Museum World */}
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

      {/* Top Museum Bar */}
      <Navbar
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((o) => !o)}
        activeDrawer={activeDrawer}
        onToggleDrawer={setActiveDrawer}
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

      {/* Louvre-Style Left Collapsible "Menu 360°" Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            className="louvre-menu-sidebar"
            initial={{ x: -310, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -310, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#fbbf24', letterSpacing: '0.08em' }}>
                MENU 360° · ROOMS &amp; EXHIBITS
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800 }}>
              Virtual Tour Rooms (1–8)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {TOUR_STOPS.map((st, idx) => (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => {
                    navigateToStop(idx);
                    setMenuOpen(false);
                  }}
                  style={{
                    textAlign: 'left',
                    padding: '0.5rem 0.65rem',
                    borderRadius: '10px',
                    border:
                      idx === activeStopIndex
                        ? '1px solid #ff5a1f'
                        : '1px solid rgba(255,255,255,0.08)',
                    background:
                      idx === activeStopIndex
                        ? 'rgba(255, 90, 31, 0.2)'
                        : 'rgba(255,255,255,0.03)',
                    color: '#f8fafc',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '0.62rem', color: '#fbbf24', fontWeight: 800 }}>
                    {st.roomCode}
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700 }}>{st.title}</div>
                </button>
              ))}
            </div>

            <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800, marginTop: '0.3rem' }}>
              3D Cultural Artifacts &amp; Exhibits (1–6)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {HOTSPOTS.map((spot) => (
                <button
                  key={spot.id}
                  type="button"
                  onClick={() => {
                    handleSelectHotspot(spot, 'object3d');
                    setMenuOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.45rem 0.6rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.03)',
                    color: '#ffffff',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <img
                    src={spot.heroImage}
                    alt=""
                    style={{ width: 28, height: 28, borderRadius: '6px', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ fontSize: '0.74rem', fontWeight: 700 }}>
                      #{spot.number} {spot.name}
                    </div>
                    <div style={{ fontSize: '0.62rem', color: '#38bdf8' }}>
                      3D Object · Photos · Video · 360°
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Unobtrusive Museum Room Plaque (Top-Left) */}
      {!minimalMode && (
        <motion.div
          key={activeStop.id}
          className={`museum-room-plaque ${menuOpen ? 'shifted-right' : ''}`}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
            <span className="moment-pill">
              <Sparkles size={11} />
              <span>{activeStop.momentBadge}</span>
            </span>

            <button
              type="button"
              onClick={toggleRoomNarration}
              style={{
                background: isSpeakingRoom ? '#06b6d4' : 'rgba(255,255,255,0.1)',
                color: isSpeakingRoom ? '#04131a' : '#ffffff',
                border: 'none',
                borderRadius: '99px',
                padding: '0.22rem 0.6rem',
                fontSize: '0.68rem',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                cursor: 'pointer'
              }}
              title="Listen to English Audio Guide for this Room"
            >
              {isSpeakingRoom ? <VolumeX size={12} /> : <Volume2 size={12} />}
              <span>{isSpeakingRoom ? 'Stop Audio' : 'Audio Guide'}</span>
            </button>
          </div>

          <div style={{ fontSize: '0.66rem', fontWeight: 800, color: '#38bdf8', letterSpacing: '0.09em' }}>
            {activeStop.roomCode}
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.28rem',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              margin: '0.2rem 0 0.35rem 0'
            }}
          >
            {activeStop.title}
          </h1>

          {/* 3 Short Visual Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.65rem' }}>
            {activeStop.visualTags.map((tag, i) => (
              <span key={i} className="visual-tag-chip">
                {tag}
              </span>
            ))}
          </div>

          {/* Key Metric Callout */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.48rem 0.75rem',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              marginBottom: '0.7rem'
            }}
          >
            <span style={{ fontSize: '1.15rem', fontWeight: 900, color: '#fbbf24' }}>
              {activeStop.keyStat.value}
            </span>
            <span style={{ fontSize: '0.72rem', color: '#cbd5e1', fontWeight: 600 }}>
              {activeStop.keyStat.label}
            </span>
          </div>

          {/* Direct 1-Click Audiovisual Launchers */}
          <div style={{ display: 'flex', gap: '0.38rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn-primary"
              onClick={() => handleSelectHotspot(linkedSpot, 'photos')}
              style={{ padding: '0.42rem 0.72rem', fontSize: '0.72rem' }}
            >
              <ImageIcon size={13} />
              <span>Photos</span>
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => handleSelectHotspot(linkedSpot, 'object3d')}
              style={{ padding: '0.42rem 0.72rem', fontSize: '0.72rem' }}
            >
              <Box size={13} />
              <span>3D Object</span>
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => handleSelectHotspot(linkedSpot, 'video')}
              style={{ padding: '0.42rem 0.72rem', fontSize: '0.72rem' }}
            >
              <PlayCircle size={13} />
              <span>Video</span>
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => handleSelectHotspot(linkedSpot, 'streetview')}
              style={{ padding: '0.42rem 0.72rem', fontSize: '0.72rem' }}
            >
              <Compass size={13} />
              <span>360°</span>
            </button>
            {activeStop.autoDrawer && (
              <button
                type="button"
                className="btn-primary"
                onClick={() => setActiveDrawer(activeStop.autoDrawer)}
                style={{ padding: '0.42rem 0.72rem', fontSize: '0.72rem' }}
              >
                <BarChart3 size={13} />
                <span>Open {activeStop.autoDrawer === 'data' ? 'Data & 2035' : 'Why Invest'} Hall</span>
              </button>
            )}
          </div>
        </motion.div>
      )}

      {/* Top-Right Louvre-Style Floorplan Minimap Radar */}
      {!minimalMode && (
        <div className="museum-minimap">
          <div
            style={{
              fontSize: '0.64rem',
              fontWeight: 800,
              color: '#94a3b8',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.4rem',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <span>3D Hillside Radar</span>
            <span style={{ color: '#fbbf24' }}>Room {activeStopIndex + 1}/8</span>
          </div>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '105px',
              borderRadius: '10px',
              background: 'radial-gradient(circle at 50% 50%, #1e293b 0%, #090d16 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              overflow: 'hidden'
            }}
          >
            {/* Central Escalator Spine on Radar */}
            <div
              style={{
                position: 'absolute',
                left: '49%',
                top: '18%',
                bottom: '15%',
                width: '3px',
                background: 'linear-gradient(180deg, #ec4899, #ff5a1f)',
                borderRadius: '4px'
              }}
            />
            {TOUR_STOPS.map((st, idx) => {
              const isCurr = idx === activeStopIndex;
              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => navigateToStop(idx)}
                  style={{
                    position: 'absolute',
                    left: `${st.minimapPos.x}%`,
                    top: `${st.minimapPos.y}%`,
                    transform: 'translate(-50%, -50%)',
                    width: isCurr ? 13 : 8,
                    height: isCurr ? 13 : 8,
                    borderRadius: '50%',
                    background: isCurr ? '#ff5a1f' : '#38bdf8',
                    border: isCurr ? '2px solid #ffffff' : 'none',
                    boxShadow: isCurr ? '0 0 12px #ff5a1f' : 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                  title={`Jump to ${st.roomCode}`}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Museum Overlay Drawer for Verified Data, District Comparison, 2035 Forecast & Investment */}
      <AnimatePresence>
        {activeDrawer && (
          <motion.div
            className="museum-drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveDrawer(null)}
          >
            <motion.div
              className="museum-drawer-window"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid rgba(255,255,255,0.12)',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    className={`modal-tab-btn ${activeDrawer === 'data' ? 'active' : ''}`}
                    onClick={() => setActiveDrawer('data')}
                  >
                    <span>Moment 4: Data, District Comparison &amp; 2035 Simulator</span>
                  </button>
                  <button
                    type="button"
                    className={`modal-tab-btn ${activeDrawer === 'invest' ? 'active' : ''}`}
                    onClick={() => setActiveDrawer('invest')}
                  >
                    <span>Moment 5: Why Invest, Risk Mitigation, Q&amp;A &amp; Sources</span>
                  </button>
                </div>

                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setActiveDrawer(null)}
                >
                  <X size={16} />
                  <span>Return to 3D Museum</span>
                </button>
              </div>

              {activeDrawer === 'data' ? (
                <>
                  <DataSection />
                  <ComparisonSection />
                </>
              ) : (
                <>
                  <WhyInvestSection
                    onJumpToHotspot={(spotId, tab) => {
                      setActiveDrawer(null);
                      handleSelectHotspot(spotId, tab);
                    }}
                  />
                  <SourcesSection />
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* UNESCO + Louvre Exhibit Inspector Modal */}
      <HotspotModal
        hotspot={selectedHotspot}
        initialTab={modalInitialTab}
        onClose={() => setSelectedHotspot(null)}
        onSelectHotspot={handleSelectHotspot}
      />

      {/* Louvre-Style Bottom Filmstrip Dock */}
      <PresentationHUD
        activeStopIndex={activeStopIndex}
        onNavigateStop={navigateToStop}
        selectedHotspot={selectedHotspot}
        onSelectHotspot={(spot) => handleSelectHotspot(spot, 'photos')}
      />
    </div>
  );
}
