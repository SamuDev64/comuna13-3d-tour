import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, BarChart3, TrendingUp } from 'lucide-react';
import { VERIFIED_METRICS, GROWTH_TRAJECTORY } from '../data/tourData.js';

function AnimatedCounter({ value, decimals = 0, prefix = '', suffix = '' }) {
  const [displayVal, setDisplayVal] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1400;
          const start = performance.now();

          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayVal(value * eased);
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const formatted =
    decimals > 0
      ? displayVal.toFixed(decimals)
      : Math.round(displayVal).toLocaleString('en-US');

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function DataSection() {
  const maxVisitors = 160;
  const maxBusinesses = 4800;

  return (
    <section className="content-section" id="data-section">
      <div className="section-header">
        <div className="section-eyebrow">
          VERIFIED DATA &amp; ECONOMIC TRAJECTORY · 2011–2035
        </div>
        <h2 className="section-title">
          Quantifying Comuna 13’s Cultural &amp; Economic Transformation
        </h2>
        <p className="section-desc">
          Every figure below is grounded in municipal records, the Medellin Chamber of Commerce,
          and peer-reviewed urban studies. Estimated visitor ranges are explicitly labeled to
          maintain strict analytical transparency.
        </p>
      </div>

      {/* Animated Counter Cards */}
      <div className="metrics-grid">
        {VERIFIED_METRICS.map((m) => (
          <div key={m.id} className="metric-card">
            <span
              className={`metric-status-pill ${
                m.status.includes('Estimated') ? 'estimated' : ''
              }`}
            >
              {m.status}
            </span>
            <div className="metric-big-number">
              <AnimatedCounter
                value={m.numericValue}
                decimals={m.decimals || 0}
                prefix={m.prefix}
                suffix={m.suffix}
              />
            </div>
            <div className="metric-label">{m.label}</div>
            <p className="metric-sublabel">{m.sublabel}</p>
            <a
              href={m.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="metric-source-link"
            >
              Source: {m.sourceName} <ExternalLink size={11} style={{ display: 'inline' }} />
            </a>
          </div>
        ))}
      </div>

      {/* Interactive Dual Chart: Monthly Visitors & Formal Local Businesses */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
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
            gap: '1rem',
            marginBottom: '1.4rem'
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 800,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <BarChart3 size={18} color="#f59e0b" />
              Tourism Volume vs. Formal Registered Local Businesses (2011–2035 Forecast)
            </h3>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.2rem' }}>
              Tracking how the 2011 escalators and 2013 Graffitour catalyzed over 2,750 formal
              neighborhood enterprises — and why capacity management is vital for 2035.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.78rem', fontWeight: 700 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#ff5a1f' }}>
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 3,
                  background: 'linear-gradient(180deg, #ff5a1f, #f59e0b)',
                  display: 'inline-block'
                }}
              />
              Monthly Visitors (Thousands, Est.)
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#06b6d4' }}>
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 3,
                  background: 'linear-gradient(180deg, #06b6d4, #10b981)',
                  display: 'inline-block'
                }}
              />
              Registered Local Businesses
            </span>
          </div>
        </div>

        {/* Responsive Bar Chart Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(145px, 1fr))',
            gap: '1rem',
            alignItems: 'end',
            paddingTop: '1rem'
          }}
        >
          {GROWTH_TRAJECTORY.map((item) => {
            const visitorPct = Math.round((item.monthlyVisitorsK / maxVisitors) * 100);
            const bizPct = Math.round((item.formalBusinesses / maxBusinesses) * 100);
            return (
              <div
                key={item.year}
                style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                  <span style={{ color: '#fbbf24', fontWeight: 800 }}>{item.monthlyVisitorsK}k/mo</span>
                  <span style={{ color: '#38bdf8', fontWeight: 800 }}>
                    {item.formalBusinesses.toLocaleString()} biz
                  </span>
                </div>

                {/* Dual Vertical Bars */}
                <div
                  style={{
                    height: '130px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    gap: '12px',
                    padding: '0 8px',
                    borderBottom: '1px solid rgba(255,255,255,0.12)'
                  }}
                >
                  <div
                    style={{
                      width: '32%',
                      height: `${Math.max(8, visitorPct)}%`,
                      background: 'linear-gradient(180deg, #ff5a1f, #f59e0b)',
                      borderRadius: '6px 6px 0 0',
                      transition: 'height 0.6s ease'
                    }}
                    title={`${item.monthlyVisitorsK},000 monthly visitors`}
                  />
                  <div
                    style={{
                      width: '32%',
                      height: `${Math.max(8, bizPct)}%`,
                      background: 'linear-gradient(180deg, #06b6d4, #10b981)',
                      borderRadius: '6px 6px 0 0',
                      transition: 'height 0.6s ease'
                    }}
                    title={`${item.formalBusinesses} registered businesses`}
                  />
                </div>

                <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#ffffff' }}>
                  {item.year}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#e2e8f0' }}>
                  {item.milestone}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.4 }}>
                  {item.note}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
