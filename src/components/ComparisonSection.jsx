import React, { useState } from 'react';
import { Scale, Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { DISTRICT_COMPARISON, SCENARIO_2035 } from '../data/tourData.js';

export default function ComparisonSection() {
  const [scenarioKey, setScenarioKey] = useState('responsible');
  const activeScenario = SCENARIO_2035[scenarioKey];

  return (
    <section className="content-section" id="comparison-section">
      <div className="section-header">
        <div className="section-eyebrow">
          MOMENT 4 · ARGUMENTATION, DISTRICT COMPARISON &amp; 2035 CONSEQUENCES
        </div>
        <h2 className="section-title">
          Comparing Medellin’s Cultural Districts &amp; Weighing 2035 Outcomes
        </h2>
        <p className="section-desc">
          Why should public policymakers and social-impact investors prioritize Comuna 13 over
          commercialized districts like El Poblado or traditional downtown monuments like Plaza
          Botero? Compare the structural evidence below and test the 2035 consequence scenarios.
        </p>
      </div>

      {/* Comparative Scorecard Table */}
      <div className="table-scroll" style={{ marginBottom: '2.25rem' }}>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>District / Cultural Site</th>
              <th>Urban Character</th>
              <th>Grassroots Social Impact ROI</th>
              <th>Cultural &amp; Historical Role</th>
              <th>Primary Bottleneck / Risk</th>
              <th>Funding Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {DISTRICT_COMPARISON.map((row, idx) => (
              <tr
                key={row.district}
                style={{
                  background: idx === 0 ? 'rgba(255, 90, 31, 0.09)' : 'transparent'
                }}
              >
                <td style={{ fontWeight: 800, color: idx === 0 ? '#ff9e7d' : '#ffffff' }}>
                  {row.district}
                </td>
                <td style={{ color: '#cbd5e1' }}>{row.character}</td>
                <td style={{ color: '#e2e8f0', fontWeight: idx === 0 ? 700 : 400 }}>
                  {row.socialImpactROI}
                </td>
                <td style={{ color: '#cbd5e1' }}>{row.culturalAuthenticity}</td>
                <td style={{ color: '#cbd5e1' }}>{row.currentChallenge}</td>
                <td
                  style={{
                    fontWeight: 800,
                    color: idx === 0 ? '#34d399' : '#94a3b8'
                  }}
                >
                  {row.fundingVerdict}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Interactive 2035 Consequence Simulator */}
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '20px',
          padding: '1.75rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.25rem'
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.74rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#38bdf8',
                marginBottom: '0.25rem'
              }}
            >
              2035 FUTURE PERFECT CONSEQUENCE SIMULATOR
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#ffffff'
              }}
            >
              What Will Have Changed in Comuna 13 by 2035?
            </h3>
          </div>

          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className={`btn-control ${scenarioKey === 'responsible' ? 'active-cyan' : ''}`}
              onClick={() => setScenarioKey('responsible')}
            >
              <Sparkles size={14} />
              <span>Scenario A: Responsible Funding (2035)</span>
            </button>
            <button
              type="button"
              className={`btn-control ${scenarioKey === 'unmanaged' ? 'active' : ''}`}
              onClick={() => setScenarioKey('unmanaged')}
            >
              <AlertTriangle size={14} />
              <span>Scenario B: Unmanaged Crowds (2035)</span>
            </button>
          </div>
        </div>

        <div
          style={{
            padding: '1.15rem 1.35rem',
            borderRadius: '14px',
            background:
              scenarioKey === 'responsible'
                ? 'rgba(16, 185, 129, 0.1)'
                : 'rgba(239, 68, 68, 0.12)',
            border:
              scenarioKey === 'responsible'
                ? '1px solid rgba(16, 185, 129, 0.35)'
                : '1px solid rgba(239, 68, 68, 0.35)',
            marginBottom: '1.2rem'
          }}
        >
          <div style={{ fontWeight: 800, fontSize: '1rem', color: '#ffffff', marginBottom: '0.35rem' }}>
            {activeScenario.title}
          </div>
          <p style={{ fontSize: '0.94rem', color: '#f1f5f9', fontStyle: 'italic', lineHeight: 1.55 }}>
            “{activeScenario.conditionalStatement}”
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '0.9rem'
          }}
        >
          {activeScenario.outcomes.map((outcome, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
                padding: '0.95rem',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                fontSize: '0.86rem',
                color: '#e2e8f0',
                lineHeight: 1.55
              }}
            >
              <CheckCircle2
                size={18}
                color={scenarioKey === 'responsible' ? '#34d399' : '#f87171'}
                style={{ flexShrink: 0, marginTop: '2px' }}
              />
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
