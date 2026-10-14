import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { SOURCES } from '../data/tourData.js';

export default function SourcesSection() {
  return (
    <footer className="content-section" id="sources-section" style={{ marginBottom: '6.5rem' }}>
      <div className="section-header" style={{ marginBottom: '1.4rem' }}>
        <div className="section-eyebrow">VERIFIED BIBLIOGRAPHY &amp; FACTUAL GROUNDING</div>
        <h2
          className="section-title"
          style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.55rem' }}
        >
          <BookOpen size={22} color="#38bdf8" />
          Sources &amp; Documentary References
        </h2>
        <p className="section-desc" style={{ fontSize: '0.86rem' }}>
          All historical timelines, infrastructure metrics (384m escalators, US$6.7M cost), Chamber
          of Commerce business counts (2,750+ formal enterprises), and monthly visitor ranges
          (90,000–136,000) are grounded in the verified publications below.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '0.75rem'
        }}
      >
        {SOURCES.map((src, idx) => (
          <a
            key={idx}
            href={src.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '0.85rem 1rem',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              textDecoration: 'none',
              color: '#e2e8f0',
              transition: 'background 0.2s ease, border-color 0.2s ease'
            }}
          >
            <div
              style={{
                fontSize: '0.68rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#f59e0b',
                marginBottom: '0.25rem'
              }}
            >
              {src.category}
            </div>
            <div
              style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: 1.4,
                marginBottom: '0.4rem'
              }}
            >
              {src.title}
            </div>
            <div
              style={{
                fontSize: '0.72rem',
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <span>Open Verified Source</span>
              <ExternalLink size={11} />
            </div>
          </a>
        ))}
      </div>
    </footer>
  );
}
