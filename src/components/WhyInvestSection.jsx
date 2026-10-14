import React, { useState } from 'react';
import {
  ShieldAlert,
  Handshake,
  MessageSquare,
  PlayCircle,
  Compass,
  Image as ImageIcon,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  INVESTMENT_OPPORTUNITIES,
  RISKS_AND_MITIGATION,
  QA_PREP_CARDS
} from '../data/tourData.js';

export default function WhyInvestSection({ onJumpToHotspot }) {
  const [openQaIndex, setOpenQaIndex] = useState(0);

  return (
    <section className="content-section" id="why-invest-section">
      <div className="section-header">
        <div className="section-eyebrow">WHY INVEST &amp; SUPPORT · COMMUNITY-FIRST CAPITAL</div>
        <h2 className="section-title">6 Concrete Opportunities &amp; Risk Mitigation</h2>
      </div>

      {/* 6 Visual Photo Cards for Investment Opportunities */}
      <div className="metrics-grid" style={{ marginBottom: '2.25rem' }}>
        {INVESTMENT_OPPORTUNITIES.map((opp) => (
          <div
            key={opp.id}
            className="metric-card"
            style={{
              padding: 0,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ position: 'relative', height: '135px', width: '100%' }}>
                <img
                  src={opp.image}
                  alt={opp.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(7,11,20,0.15) 0%, rgba(7,11,20,0.88) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.9rem'
                  }}
                >
                  <span className="metric-status-pill" style={{ margin: 0 }}>
                    {opp.category}
                  </span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#fbbf24' }}>
                    {opp.ticketRange}
                  </span>
                </div>
              </div>

              <div style={{ padding: '1rem 1.1rem 0.6rem 1.1rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.02rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '0.55rem'
                  }}
                >
                  {opp.title}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.65rem' }}>
                  {opp.points.map((pt, i) => (
                    <span key={i} className="visual-tag-chip" style={{ fontSize: '0.71rem' }}>
                      {pt}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                padding: '0.65rem 1.1rem',
                background: 'rgba(16, 185, 129, 0.08)',
                borderTop: '1px solid rgba(16, 185, 129, 0.2)',
                fontSize: '0.76rem',
                fontWeight: 700,
                color: '#34d399'
              }}
            >
              Impact: {opp.impactMetric}
            </div>
          </div>
        ))}
      </div>

      {/* Concise Risks & Mitigation Table */}
      <div style={{ marginBottom: '2.25rem' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <ShieldAlert size={19} color="#f59e0b" />
          Risks &amp; Community-Led Mitigation
        </h3>

        <div className="table-scroll">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Risk Factor</th>
                <th>Severity</th>
                <th>Reality on the Ground</th>
                <th>Responsible Solution</th>
              </tr>
            </thead>
            <tbody>
              {RISKS_AND_MITIGATION.map((rm) => (
                <tr key={rm.risk}>
                  <td style={{ fontWeight: 800, color: '#ffffff' }}>{rm.risk}</td>
                  <td style={{ color: '#fbbf24', fontWeight: 700 }}>{rm.severity}</td>
                  <td style={{ color: '#cbd5e1' }}>{rm.evidence}</td>
                  <td style={{ color: '#34d399', fontWeight: 600 }}>{rm.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Moment 5: Call to Action + Quick Media Launchers + Visitor Q&A */}
      <div
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 90, 31, 0.16) 0%, rgba(236, 72, 153, 0.14) 50%, rgba(6, 182, 212, 0.16) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          padding: '1.6rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.2rem',
            marginBottom: '1.4rem'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span className="moment-pill">
              <Handshake size={13} />
              MOMENT 5 · CALL TO ACTION &amp; GALLERY CHAT (3 + 2 MIN)
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.3rem, 2vw, 1.75rem)',
                fontWeight: 900,
                color: '#ffffff',
                marginTop: '0.45rem',
                marginBottom: '0.35rem'
              }}
            >
              “Art Gave Comuna 13 a Voice. Responsible Investment Protects Its Future.”
            </h3>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn-primary"
              onClick={() => onJumpToHotspot('escalators', 'photos')}
            >
              <ImageIcon size={15} />
              <span>Photos Showcase</span>
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => onJumpToHotspot('kolacho', 'video')}
            >
              <PlayCircle size={15} />
              <span>Watch Video</span>
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => onJumpToHotspot('escalators', 'streetview')}
            >
              <Compass size={15} />
              <span>360° Map</span>
            </button>
          </div>
        </div>

        {/* Visitor Q&A Cards + Glow & Grow */}
        <div
          style={{
            background: 'rgba(7, 11, 20, 0.8)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '14px',
            padding: '1.15rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '0.85rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontWeight: 800,
                fontSize: '0.9rem',
                color: '#ffffff'
              }}
            >
              <MessageSquare size={16} color="#38bdf8" />
              Visitor Q&amp;A Prompts + “One Glow &amp; One Grow”
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {QA_PREP_CARDS.map((item, idx) => {
              const isOpen = openQaIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenQaIndex(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.95rem',
                      background: 'none',
                      border: 'none',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.84rem',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{item.question}</span>
                    {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: '0 0.95rem 0.85rem 0.95rem',
                        fontSize: '0.82rem',
                        color: '#cbd5e1',
                        lineHeight: 1.5
                      }}
                    >
                      <p>{item.modelAnswer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
