import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {
  X,
  MapPin,
  Image as ImageIcon,
  PlayCircle,
  Compass,
  Box,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { HOTSPOTS } from '../data/tourData.js';

/**
 * UNESCO Virtual Museum Style 3D Cultural Artifact on an Illuminated Pedestal.
 * Users can rotate and zoom the 3D artifact in 360 degrees.
 */
function RotatingArtifact3D({ artifactType, color }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.55;
    }
  });

  return (
    <group>
      {/* Museum Pedestal Base */}
      <mesh position={[0, -1.35, 0]}>
        <cylinderGeometry args={[1.6, 1.85, 0.35, 32]} />
        <meshStandardMaterial color="#0f172a" metalness={0.7} roughness={0.25} />
      </mesh>
      <mesh position={[0, -1.16, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.45, 1.58, 32]} />
        <meshBasicMaterial color={color} />
      </mesh>

      {/* 3D Cultural Artifact by Type */}
      <group ref={groupRef} position={[0, -0.1, 0]}>
        {artifactType === 'escalator' && (
          <group>
            {/* Escalator Truss */}
            <mesh rotation={[0.45, 0, 0]}>
              <boxGeometry args={[1.2, 0.35, 2.6]} />
              <meshStandardMaterial color="#334155" metalness={0.6} roughness={0.3} />
            </mesh>
            {/* Steps */}
            {[-0.9, -0.45, 0, 0.45, 0.9].map((zPos, i) => (
              <mesh key={i} position={[0, -zPos * 0.42 + 0.15, zPos]} rotation={[0.45, 0, 0]}>
                <boxGeometry args={[0.95, 0.12, 0.28]} />
                <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.5} />
              </mesh>
            ))}
            {/* Iconic Orange Canopy Roof */}
            <mesh position={[0, 0.95, 0]} rotation={[0.45, 0, 0]}>
              <boxGeometry args={[1.65, 0.14, 2.8]} />
              <meshStandardMaterial color="#ff5a1f" roughness={0.25} />
            </mesh>
          </group>
        )}

        {artifactType === 'mural' && (
          <group>
            {/* Stepped Brick Mural Wall */}
            <mesh position={[0, 0.1, 0]}>
              <boxGeometry args={[2.4, 1.7, 0.22]} />
              <meshStandardMaterial color="#ec4899" roughness={0.4} />
            </mesh>
            <mesh position={[-0.5, 0.2, 0.14]}>
              <torusGeometry args={[0.42, 0.1, 16, 32]} />
              <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.6} />
            </mesh>
            {/* White Peace Cloth Sculpture */}
            <mesh position={[0.55, 0.15, 0.18]} rotation={[0.1, 0.2, 0.3]}>
              <boxGeometry args={[0.85, 1.1, 0.06]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
            </mesh>
          </group>
        )}

        {artifactType === 'hiphop' && (
          <group>
            {/* DJ Turntable Deck */}
            <mesh position={[0, -0.4, 0]}>
              <boxGeometry args={[2.2, 0.25, 1.6]} />
              <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.3} />
            </mesh>
            {/* Spinning Vinyl Disc */}
            <mesh position={[-0.4, -0.24, 0]}>
              <cylinderGeometry args={[0.62, 0.62, 0.05, 32]} />
              <meshStandardMaterial color="#090d16" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[-0.4, -0.21, 0]}>
              <cylinderGeometry args={[0.22, 0.22, 0.06, 24]} />
              <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
            </mesh>
            {/* Golden Microphone on Stand */}
            <mesh position={[0.65, 0.25, 0]}>
              <cylinderGeometry args={[0.05, 0.05, 1.1, 12]} />
              <meshStandardMaterial color="#94a3b8" metalness={0.8} />
            </mesh>
            <mesh position={[0.65, 0.88, 0]}>
              <sphereGeometry args={[0.24, 20, 20]} />
              <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.15} />
            </mesh>
          </group>
        )}

        {artifactType === 'viewpoint' && (
          <group>
            {/* Panoramic Observation Balcony */}
            <mesh position={[0, -0.3, 0]}>
              <boxGeometry args={[2.5, 0.2, 1.8]} />
              <meshStandardMaterial color="#b45309" roughness={0.6} />
            </mesh>
            {/* Glowing Arch & String Lights */}
            <mesh position={[0, 0.5, -0.7]}>
              <torusGeometry args={[1.1, 0.07, 12, 32, Math.PI]} />
              <meshStandardMaterial color="#f59e0b" emissive="#fbbf24" emissiveIntensity={0.9} />
            </mesh>
          </group>
        )}

        {artifactType === 'commerce' && (
          <group>
            {/* Artisanal Mango Sorbet & Coffee Cart */}
            <mesh position={[0, -0.15, 0]}>
              <boxGeometry args={[1.8, 0.9, 1.1]} />
              <meshStandardMaterial color="#10b981" roughness={0.4} />
            </mesh>
            {/* Umbrella Canopy */}
            <mesh position={[0, 1.05, 0]}>
              <coneGeometry args={[1.35, 0.55, 8]} />
              <meshStandardMaterial color="#f59e0b" roughness={0.4} />
            </mesh>
          </group>
        )}

        {artifactType === 'gondola' && (
          <group>
            {/* Cable Arm */}
            <mesh position={[0, 0.95, 0]}>
              <cylinderGeometry args={[0.06, 0.06, 0.8, 12]} />
              <meshStandardMaterial color="#cbd5e1" metalness={0.8} />
            </mesh>
            {/* Metrocable Cabin */}
            <mesh position={[0, 0.15, 0]}>
              <boxGeometry args={[1.45, 1.25, 1.35]} />
              <meshStandardMaterial color="#a855f7" metalness={0.4} roughness={0.25} />
            </mesh>
            <mesh position={[0, 0.2, 0.69]}>
              <planeGeometry args={[1.1, 0.65]} />
              <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.5} />
            </mesh>
          </group>
        )}
      </group>
    </group>
  );
}

export default function HotspotModal({
  hotspot,
  initialTab = 'photos',
  onClose,
  onSelectHotspot
}) {
  const [activeTab, setActiveTab] = useState(initialTab || 'photos');
  const [photoIdx, setPhotoIdx] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState('');
  const [mapMode, setMapMode] = useState('satellite');
  const [zoomedPhoto, setZoomedPhoto] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if (hotspot) {
      setActiveTab(initialTab || 'photos');
      setPhotoIdx(0);
      setActiveVideoId(hotspot.youtubeId);
      setZoomedPhoto(false);
    }
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
    };
  }, [hotspot, initialTab]);

  if (!hotspot) return null;

  const currentIndex = HOTSPOTS.findIndex((h) => h.id === hotspot.id);
  const prevSpot = HOTSPOTS[(currentIndex - 1 + HOTSPOTS.length) % HOTSPOTS.length];
  const nextSpot = HOTSPOTS[(currentIndex + 1) % HOTSPOTS.length];

  const photos = hotspot.images || [{ src: hotspot.heroImage, caption: hotspot.headline }];
  const currentPhoto = photos[photoIdx % photos.length] || photos[0];

  const mapEmbedUrl =
    mapMode === 'satellite'
      ? `https://maps.google.com/maps?q=${hotspot.lat},${hotspot.lng}&hl=en&t=k&z=19&output=embed`
      : `https://maps.google.com/maps?q=${hotspot.streetViewQuery}&hl=en&t=m&z=18&output=embed`;

  const toggleAudioGuide = () => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(hotspot.audioText || hotspot.headline);
      utter.lang = 'en-US';
      utter.rate = 0.98;
      utter.onend = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utter);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="hotspot-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="hotspot-media-modal"
          initial={{ scale: 0.92, y: 24, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.92, y: 24, opacity: 0 }}
          transition={{ type: 'spring', damping: 24, stiffness: 260 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.24rem 0.68rem',
                    borderRadius: '999px',
                    background: `${hotspot.color}26`,
                    border: `1px solid ${hotspot.color}`,
                    color: hotspot.color,
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    textTransform: 'uppercase'
                  }}
                >
                  <MapPin size={12} />
                  Exhibit #{hotspot.number} · {hotspot.category}
                </span>
                <span style={{ fontSize: '0.74rem', color: '#94a3b8', fontWeight: 600 }}>
                  {hotspot.year} · {hotspot.investmentMetric}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 1.9vw, 1.6rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.18
                }}
              >
                {hotspot.name}
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
              <button
                type="button"
                className={`btn-control ${isSpeaking ? 'active-cyan' : ''}`}
                onClick={toggleAudioGuide}
                title="Play/Stop English Museum Audio Guide Narration"
              >
                {isSpeaking ? <VolumeX size={15} /> : <Volume2 size={15} />}
                <span>{isSpeaking ? 'Stop Audio Guide' : 'Audio Guide (EN)'}</span>
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={onClose}
                style={{ padding: '0.42rem 0.72rem' }}
                title="Close Exhibit Inspector (Esc)"
              >
                <X size={17} />
                <span>Close</span>
              </button>
            </div>
          </div>

          {/* 4 Interactive Museum Tabs (Louvre + UNESCO style) */}
          <div className="modal-tabs-bar">
            <button
              type="button"
              className={`modal-tab-btn ${activeTab === 'photos' ? 'active' : ''}`}
              onClick={() => setActiveTab('photos')}
            >
              <ImageIcon size={15} />
              <span>1. Real Site Photographs ({photos.length})</span>
            </button>

            <button
              type="button"
              className={`modal-tab-btn ${activeTab === 'object3d' ? 'active' : ''}`}
              onClick={() => setActiveTab('object3d')}
            >
              <Box size={15} />
              <span>2. Interactive 3D Artifact</span>
            </button>

            <button
              type="button"
              className={`modal-tab-btn ${activeTab === 'video' ? 'active' : ''}`}
              onClick={() => setActiveTab('video')}
            >
              <PlayCircle size={15} />
              <span>3. Embedded YouTube Video</span>
            </button>

            <button
              type="button"
              className={`modal-tab-btn ${activeTab === 'streetview' ? 'active' : ''}`}
              onClick={() => setActiveTab('streetview')}
            >
              <Compass size={15} />
              <span>4. 360° Satellite &amp; Street View</span>
            </button>
          </div>

          {/* TAB 1: REAL PHOTOGRAPHS & WIKIMEDIA GALLERY */}
          {activeTab === 'photos' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: zoomedPhoto ? '500px' : '370px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: '#050811',
                  border: '1px solid rgba(255,255,255,0.14)',
                  transition: 'height 0.3s ease'
                }}
              >
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.caption}
                  onError={(e) => {
                    if (currentPhoto.fallbackSrc && e.currentTarget.src !== currentPhoto.fallbackSrc) {
                      e.currentTarget.src = currentPhoto.fallbackSrc;
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: zoomedPhoto ? 'contain' : 'cover',
                    cursor: 'zoom-in'
                  }}
                  onClick={() => setZoomedPhoto((z) => !z)}
                />

                {currentPhoto.credit && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      padding: '0.28rem 0.65rem',
                      borderRadius: '99px',
                      background: 'rgba(5, 8, 17, 0.85)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#34d399',
                      fontSize: '0.68rem',
                      fontWeight: 800
                    }}
                  >
                    {currentPhoto.credit}
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => setPhotoIdx((i) => (i - 1 + photos.length) % photos.length)}
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(7, 11, 20, 0.82)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <ChevronLeft size={19} />
                </button>

                <button
                  type="button"
                  onClick={() => setPhotoIdx((i) => (i + 1) % photos.length)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(7, 11, 20, 0.82)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <ChevronRight size={19} />
                </button>

                <button
                  type="button"
                  onClick={() => setZoomedPhoto((z) => !z)}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '0.32rem 0.68rem',
                    borderRadius: '99px',
                    background: 'rgba(7, 11, 20, 0.85)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    cursor: 'pointer'
                  }}
                >
                  <Maximize2 size={12} />
                  <span>{zoomedPhoto ? 'Crop Fill' : 'Full Uncropped'}</span>
                </button>

                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '0.75rem 1.1rem',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(5,8,17,0.92) 100%)',
                    color: '#f8fafc',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span>{currentPhoto.caption}</span>
                  <span style={{ fontSize: '0.74rem', color: '#fbbf24', fontWeight: 800 }}>
                    {photoIdx + 1} / {photos.length}
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.8rem',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {photos.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setPhotoIdx(idx)}
                      style={{
                        width: '72px',
                        height: '46px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border:
                          idx === photoIdx
                            ? `2px solid ${hotspot.color}`
                            : '1px solid rgba(255,255,255,0.2)',
                        padding: 0,
                        cursor: 'pointer',
                        opacity: idx === photoIdx ? 1 : 0.55
                      }}
                    >
                      <img
                        src={p.src}
                        onError={(e) => {
                          if (p.fallbackSrc) e.currentTarget.src = p.fallbackSrc;
                        }}
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </button>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {hotspot.visualChips.map((chip, i) => (
                    <span key={i} className="visual-tag-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: UNESCO-STYLE 3D CULTURAL ARTIFACT PEDESTAL */}
          {activeTab === 'object3d' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.2rem',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  height: '380px',
                  borderRadius: '18px',
                  background: 'radial-gradient(circle at 50% 40%, #1e293b 0%, #050811 85%)',
                  border: `1px solid ${hotspot.color}66`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Canvas camera={{ position: [0, 1.2, 4.4], fov: 45 }}>
                  <ambientLight intensity={1.1} />
                  <directionalLight position={[5, 8, 5]} intensity={1.8} color="#fef08a" />
                  <pointLight position={[-4, 2, -3]} intensity={1.4} color={hotspot.color} />
                  <RotatingArtifact3D
                    artifactType={hotspot.artifactType}
                    color={hotspot.color}
                  />
                  <OrbitControls enableZoom enablePan={false} />
                </Canvas>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '14px',
                    right: '14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.72rem',
                    color: '#cbd5e1',
                    pointerEvents: 'none'
                  }}
                >
                  <span>{hotspot.artifactTitle}</span>
                  <span style={{ color: '#fbbf24', fontWeight: 700 }}>Drag to Rotate 360°</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 800, color: hotspot.color, textTransform: 'uppercase' }}>
                  UNESCO Virtual Museum Style · 3D Exhibit Plaque
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                  {hotspot.headline}
                </h3>

                {hotspot.shortPoints.map((pt, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.75rem 0.95rem',
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.04)',
                      borderLeft: `3px solid ${hotspot.color}`,
                      fontSize: '0.86rem',
                      color: '#e2e8f0',
                      lineHeight: 1.45
                    }}
                  >
                    {pt}
                  </div>
                ))}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.55rem' }}>
                  {hotspot.stats.map((st, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '0.65rem',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)'
                      }}
                    >
                      <div style={{ fontSize: '0.66rem', color: '#94a3b8' }}>{st.label}</div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#fbbf24' }}>
                        {st.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: EMBEDDED YOUTUBE VIDEO */}
          {activeTab === 'video' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc' }}>
                  {hotspot.youtubeTitle}
                </div>
                <div style={{ display: 'flex', gap: '0.45rem' }}>
                  {(hotspot.extraVideos || []).map((vid) => (
                    <button
                      key={vid.id}
                      type="button"
                      className={`btn-control ${activeVideoId === vid.id ? 'active-cyan' : ''}`}
                      onClick={() => setActiveVideoId(vid.id)}
                    >
                      <PlayCircle size={13} />
                      <span>{vid.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: '#000',
                  border: '1px solid rgba(255,255,255,0.16)'
                }}
              >
                <iframe
                  title={hotspot.youtubeTitle}
                  src={`https://www.youtube.com/embed/${activeVideoId || hotspot.youtubeId}?rel=0&modestbranding=1`}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* TAB 4: EMBEDDED 360 SATELLITE & STREET MAP */}
          {activeTab === 'streetview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                <div style={{ fontSize: '0.84rem', color: '#cbd5e1', fontWeight: 600 }}>
                  Live GPS Coordinates: {hotspot.lat}° N, {hotspot.lng}° W (Comuna 13, Medellin)
                </div>
                <div style={{ display: 'flex', gap: '0.45rem' }}>
                  <button
                    type="button"
                    className={`btn-control ${mapMode === 'satellite' ? 'active-cyan' : ''}`}
                    onClick={() => setMapMode('satellite')}
                  >
                    <span>3D Satellite Aerial View</span>
                  </button>
                  <button
                    type="button"
                    className={`btn-control ${mapMode === 'street' ? 'active-cyan' : ''}`}
                    onClick={() => setMapMode('street')}
                  >
                    <span>Street Corridor Map</span>
                  </button>
                </div>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.16)',
                  background: '#0b1325'
                }}
              >
                <iframe
                  title={`Map of ${hotspot.name}`}
                  src={mapEmbedUrl}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          )}

          {/* Footer Navigation */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '0.65rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}
          >
            <button
              type="button"
              className="btn-secondary"
              onClick={() => onSelectHotspot(prevSpot, activeTab)}
            >
              <ChevronLeft size={15} />
              <span>
                #{prevSpot.number} {prevSpot.name}
              </span>
            </button>

            <button
              type="button"
              className="btn-primary"
              onClick={() => onSelectHotspot(nextSpot, activeTab)}
            >
              <span>
                Next Exhibit: #{nextSpot.number} {nextSpot.name}
              </span>
              <ChevronRight size={15} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
