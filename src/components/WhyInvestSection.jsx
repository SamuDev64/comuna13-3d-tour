import React, { useState } from 'react';
import {
  ShieldAlert,
  Handshake,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
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
        <div className="section-eyebrow">
          WHY INVEST &amp; SUPPORT · RESPONSIBLE COMMUNITY CAPITAL
        </div>
        <h2 className="section-title">
          Six Concrete Opportunities &amp; Ethical Risk Mitigation
        </h2>
        <p className="section-desc">
          Investing in Comuna 13 is not about extracting value from a viral tourist spot — it is
          about co-investing with local artists, youth collectives, and homeowner families so growth
          strengthens neighborhood dignity rather than displacing it.
        </p>
      </div>

      {/* 6 Investment Pillars */}
      <div className="metrics-grid" style={{ marginBottom: '2.5rem' }}>
        {INVESTMENT_OPPORTUNITIES.map((opp) => (
          <div
            key={opp.id}
            className="metric-card"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.6rem'
                }}
              >
                <span className="metric-status-pill">{opp.category}</span>
                <span style={{ fontSize: '0.76rem', fontWeight: 800, color: '#fbbf24' }}>
                  {opp.ticketRange}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.5rem'
                }}
              >
                {opp.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.55, marginBottom: '0.85rem' }}>
                {opp.description}
              </p>
            </div>

            <div
              style={{
                paddingTop: '0.75rem',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                fontSize: '0.79rem'
              }}
            >
              <div style={{ color: '#34d399', fontWeight: 700, marginBottom: '0.2rem' }}>
                Target Impact: {opp.impactMetric}
              </div>
              <div style={{ color: '#94a3b8' }}>{opp.whyItWorks}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Risks & Responsible Mitigation Matrix */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.35rem',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <ShieldAlert size={20} color="#f59e0b" />
          Risks, Structural Pressures &amp; Community-Led Mitigation
        </h3>
        <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '1.15rem' }}>
          Addressing the real challenges of overcrowding, resident mobility, and commercialization
          with transparent governance.
        </p>

        <div className="table-scroll">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Identified Risk</th>
                <th>Severity &amp; Scope</th>
                <th>On-the-Ground Evidence</th>
                <th>Responsible Mitigation Strategy</th>
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

      {/* Moment 5: Interactive Gallery Chat, Q&A Prep & Glow/Grow Call to Action */}
      <div
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 90, 31, 0.16) 0%, rgba(236, 72, 153, 0.14) 50%, rgba(6, 182, 212, 0.16) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '22px',
          padding: '2rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '1.75rem'
          }}
        >
          <div style={{ maxWidth: '700px' }}>
            <span className="moment-pill">
              <Handshake size={13} />
              MOMENT 5 · CALL TO ACTION &amp; GALLERY CHAT (3 + 2 MIN)
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.45rem, 2.2vw, 2rem)',
                fontWeight: 900,
                color: '#ffffff',
                marginBottom: '0.6rem'
              }}
            >
              “Art Gave Comuna 13 a Voice. Responsible Investment Will Protect Its Future.”
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: 1.6 }}>
              Whether you visit as a conscious traveler, allocate municipal infrastructure budgets,
              or back local creative entrepreneurs: choose community-owned tours, fund public
              mobility access, and ensure the residents who painted this resilience remain its
              primary beneficiaries.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <button
              type="button"
              className="btn-primary"
              onClick={() => onJumpToHotspot('kolacho')}
            >
              <Sparkles size={16} />
              <span>Inspect Casa Kolacho in 3D</span>
              <ArrowUpRight size={15} />
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => onJumpToHotspot('escalators')}
            >
              <span>Inspect 2011 Escalators in 3D</span>
            </button>
          </div>
        </div>

        {/* Interactive Visitor Q&A Prompts + Glow & Grow Rubric Box */}
        <div
          style={{
            background: 'rgba(7, 11, 20, 0.78)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '16px',
            padding: '1.35rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 800,
                fontSize: '0.96rem',
                color: '#ffffff'
              }}
            >
              <MessageSquare size={18} color="#38bdf8" />
              Live Gallery Discussion: Visitor Questions &amp; “One Glow + One Grow”
            </div>
            <span style={{ fontSize: '0.76rem', color: '#fbbf24', fontWeight: 700 }}>
              Click any question below to view structured evidence &amp; C1.1 language targets
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {QA_PREP_CARDS.map((item, idx) => {
              const isOpen = openQaIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenQaIndex(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      background: 'none',
                      border: 'none',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{item.question}</span>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1rem 1rem 1rem',
                        fontSize: '0.85rem',
                        color: '#cbd5e1',
                        lineHeight: 1.6,
                        borderTop: '1px solid rgba(255,255,255,0.06)'
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.72rem',
                          color: '#38bdf8',
                          fontWeight: 700,
                          marginTop: '0.6rem',
                          marginBottom: '0.35rem'
                        }}
                      >
                        Target Language &amp; Argumentation Focus: {item.rubricTarget}
                      </div>
                      <p>{item.modelAnswer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Glow & Grow Prompt Banner for Visitors */}
          <div
            style={{
              marginTop: '1rem',
              padding: '0.85rem 1rem',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.75rem',
              fontSize: '0.82rem'
            }}
          >
            <div>
              <strong style={{ color: '#34d399' }}>Visitor Feedback Prompt (Glow + Grow): </strong>
              <span style={{ color: '#e2e8f0' }}>
                “Before we wrap up our gallery chat, I would love to hear one <strong>Glow</strong>{' '}
                (what resonated most) and one <strong>Grow</strong> (what we could compare or
                explore further)!”
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
