import React, { useState, useEffect, useRef } from 'react';
import { BarChart3 } from 'lucide-react';
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
        <div className="section-eyebrow">VERIFIED DATA &amp; ECONOMIC TRAJECTORY</div>
        <h2 className="section-title">Comuna 13 Impact in Numbers</h2>
      </div>

      {/* Visual Animated Counter Cards (Zero Cluttered Hyperlinks) */}
      <div className="metrics-grid">
        {VERIFIED_METRICS.map((m) => (
          <div key={m.id} className="metric-card" style={{ borderTop: `3px solid ${m.color}` }}>
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
          </div>
        ))}
      </div>

      {/* Visual Bar Chart */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '18px',
          padding: '1.4rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.1rem'
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              fontWeight: 800,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <BarChart3 size={18} color="#f59e0b" />
            Monthly Visitors vs. Registered Local Businesses (2011 – 2035)
          </h3>

          <div style={{ display: 'flex', gap: '1.1rem', fontSize: '0.76rem', fontWeight: 700 }}>
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
              Monthly Visitors (Est.)
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
              Formal Local Businesses
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '0.85rem',
            alignItems: 'end'
          }}
        >
          {GROWTH_TRAJECTORY.map((item) => {
            const visitorPct = Math.round((item.monthlyVisitorsK / maxVisitors) * 100);
            const bizPct = Math.round((item.formalBusinesses / maxBusinesses) * 100);
            return (
              <div
                key={item.year}
                style={{
                  background: 'rgba(15, 23, 42, 0.78)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '0.9rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.45rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem' }}>
                  <span style={{ color: '#fbbf24', fontWeight: 800 }}>{item.monthlyVisitorsK}k/mo</span>
                  <span style={{ color: '#38bdf8', fontWeight: 800 }}>
                    {item.formalBusinesses.toLocaleString()}
                  </span>
                </div>

                <div
                  style={{
                    height: '115px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '0 6px',
                    borderBottom: '1px solid rgba(255,255,255,0.12)'
                  }}
                >
                  <div
                    style={{
                      width: '34%',
                      height: `${Math.max(8, visitorPct)}%`,
                      background: 'linear-gradient(180deg, #ff5a1f, #f59e0b)',
                      borderRadius: '5px 5px 0 0'
                    }}
                  />
                  <div
                    style={{
                      width: '34%',
                      height: `${Math.max(8, bizPct)}%`,
                      background: 'linear-gradient(180deg, #06b6d4, #10b981)',
                      borderRadius: '5px 5px 0 0'
                    }}
                  />
                </div>

                <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#ffffff' }}>
                  {item.year}
                </div>
                <div style={{ fontSize: '0.73rem', fontWeight: 700, color: '#cbd5e1' }}>
                  {item.milestone}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
