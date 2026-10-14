import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, TrendingUp, Palette, ChevronLeft, ChevronRight } from 'lucide-react';
import { HOTSPOTS } from '../data/tourData.js';

export default function HotspotModal({ hotspot, onClose, onSelectHotspot }) {
  if (!hotspot) return null;

  const currentIndex = HOTSPOTS.findIndex((h) => h.id === hotspot.id);
  const prevSpot = HOTSPOTS[(currentIndex - 1 + HOTSPOTS.length) % HOTSPOTS.length];
  const nextSpot = HOTSPOTS[(currentIndex + 1) % HOTSPOTS.length];

  return (
    <AnimatePresence>
      <motion.div
        className="hotspot-drawer-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.aside
          className="hotspot-drawer"
          initial={{ x: 480, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 480, opacity: 0 }}
          transition={{ type: 'spring', damping: 26, stiffness: 240 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.3rem 0.75rem',
                borderRadius: '999px',
                background: `${hotspot.color}22`,
                border: `1px solid ${hotspot.color}`,
                color: hotspot.color,
                fontSize: '0.74rem',
                fontWeight: 800,
                textTransform: 'uppercase'
              }}
            >
              <MapPin size={13} />
              Hotspot #{hotspot.number} · {hotspot.category}
            </span>

            <button
              type="button"
              className="btn-secondary"
              onClick={onClose}
              style={{ padding: '0.4rem 0.65rem' }}
              title="Close Drawer (Esc)"
            >
              <X size={16} />
            </button>
          </div>

          <div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
              {hotspot.year} · {hotspot.investmentMetric}
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.55rem',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '0.5rem'
              }}
            >
              {hotspot.name}
            </h2>
            <p style={{ fontSize: '0.96rem', fontWeight: 600, color: '#fbbf24', lineHeight: 1.45 }}>
              {hotspot.headline}
            </p>
          </div>

          {/* Historical & Architectural Context */}
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '14px',
              padding: '1rem'
            }}
          >
            <div
              style={{
                fontSize: '0.74rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#38bdf8',
                marginBottom: '0.4rem'
              }}
            >
              Historical &amp; Spatial Context
            </div>
            <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6 }}>
              {hotspot.description}
            </p>
          </div>

          {/* Art & Community Role */}
          <div
            style={{
              background: 'rgba(236, 72, 153, 0.08)',
              border: '1px solid rgba(236, 72, 153, 0.28)',
              borderRadius: '14px',
              padding: '1rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.74rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#f472b6',
                marginBottom: '0.4rem'
              }}
            >
              <Palette size={14} />
              Artistic Symbolism &amp; Community Role
            </div>
            <p style={{ fontSize: '0.88rem', color: '#f1f5f9', lineHeight: 1.6 }}>
              {hotspot.artAndCommunityRole}
            </p>
          </div>

          {/* Investment & Support Opportunity */}
          <div
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '14px',
              padding: '1rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.74rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#34d399',
                marginBottom: '0.4rem'
              }}
            >
              <TrendingUp size={14} />
              Responsible Investment &amp; Support Angle
            </div>
            <p style={{ fontSize: '0.88rem', color: '#f1f5f9', lineHeight: 1.6 }}>
              {hotspot.investmentAngle}
            </p>
          </div>

          {/* Verified Key Facts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {hotspot.stats.map((st, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.6rem 0.85rem',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  fontSize: '0.8rem'
                }}
              >
                <span style={{ color: '#94a3b8' }}>{st.label}</span>
                <span style={{ color: '#ffffff', fontWeight: 700, textAlign: 'right' }}>
                  {st.value}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Prev / Next Hotspot Switcher */}
          <div
            style={{
              marginTop: 'auto',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              gap: '0.5rem'
            }}
          >
            <button
              type="button"
              className="btn-secondary"
              onClick={() => onSelectHotspot(prevSpot)}
            >
              <ChevronLeft size={15} />
              <span>#{prevSpot.number} {prevSpot.name.split(' ')[0]}</span>
            </button>
            <button
              type="button"
              className="btn-primary"
              onClick={() => onSelectHotspot(nextSpot)}
            >
              <span>Next: #{nextSpot.number} {nextSpot.name.split(' ')[0]}</span>
              <ChevronRight size={15} />
            </button>
          </div>
        </motion.aside>
      </motion.div>
    </AnimatePresence>
  );
}
