import React, { useState } from 'react';
import { BookOpen, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { SOURCES } from '../data/tourData.js';

/**
 * Collapsible Academic Papers & External References Drawer.
 * Keeps external hyperlinks out of the visual tour unless explicitly expanded.
 */
export default function SourcesSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <footer className="content-section" id="sources-section" style={{ marginBottom: '6.5rem', padding: '1.35rem 1.75rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          cursor: 'pointer'
        }}
        onClick={() => setExpanded((e) => !e)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <BookOpen size={20} color="#38bdf8" />
          <div>
            <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#ffffff' }}>
              Academic Papers, Legal Rulings &amp; Official Reports ({SOURCES.length} Verified Sources)
            </div>
            <div style={{ fontSize: '0.76rem', color: '#94a3b8' }}>
              External links reserved strictly for full research papers and municipal documents
            </div>
          </div>
        </div>

        <button type="button" className="btn-secondary">
          <span>{expanded ? 'Hide Bibliography' : 'Expand Papers & Sources'}</span>
          {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </button>
      </div>

      {expanded && (
        <div
          style={{
            marginTop: '1.25rem',
            paddingTop: '1.1rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '0.65rem'
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
                padding: '0.75rem 0.9rem',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                textDecoration: 'none',
                color: '#e2e8f0'
              }}
            >
              <div
                style={{
                  fontSize: '0.66rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: '#f59e0b',
                  marginBottom: '0.2rem'
                }}
              >
                {src.category}
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  lineHeight: 1.35,
                  marginBottom: '0.35rem'
                }}
              >
                {src.title}
              </div>
              <div
                style={{
                  fontSize: '0.7rem',
                  color: '#38bdf8',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                <span>Read Paper / Report</span>
                <ExternalLink size={10} />
              </div>
            </a>
          ))}
        </div>
      )}
    </footer>
  );
}
