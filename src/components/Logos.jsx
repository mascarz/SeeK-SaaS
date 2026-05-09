import React from 'react';
import { COLORS, LAYOUT } from '../constants';

const Logos = () => {
  const logos = ['Pizza Prime', 'Studio Hair', 'Clinica Vida', 'Varejo Top', 'Burger House', 'Eco Shop', 'Beauty Lab', 'Fast Food'];

  const sectionStyle = {
    padding: '60px 0',
    background: 'rgba(255, 255, 255, 0.015)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
    overflow: 'hidden',
  };

  const trackStyle = {
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    padding: `0 ${LAYOUT.paddingX}`,
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const logoBoxStyle = {
    padding: '12px 24px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 700,
    color: COLORS.textSecondary,
    whiteSpace: 'nowrap',
  };

  return (
    <section style={sectionStyle}>
      <p style={{ fontSize: '14px', fontWeight: 600, color: COLORS.textTertiary, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        +800 negócios confiam no SeeK para vender mais
      </p>
      <div style={trackStyle}>
        {logos.map((logo, i) => (
          <div key={i} style={logoBoxStyle}>{logo}</div>
        ))}
      </div>
    </section>
  );
};

export default Logos;
