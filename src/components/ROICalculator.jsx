import React, { useState } from 'react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const ROICalculator = () => {
  const [orders, setOrders] = useState(100);
  const [ticket, setTicket] = useState(50);

  const currentRevenue = orders * ticket;
  const seekRevenue = currentRevenue * 1.4; // +40%
  const additionalGain = seekRevenue - currentRevenue;
  const roi = (additionalGain / 1500) * 100; // Assuming R$1500 as corporate base cost

  const sectionStyle = {
    padding: `${LAYOUT.paddingY} ${LAYOUT.paddingX}`,
    background: COLORS.bgPrimary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    width: '100%',
    maxWidth: '1000px',
    marginTop: '60px',
    alignItems: 'center',
  };

  const cardStyle = {
    padding: '40px',
    background: COLORS.bgCard,
    border: `1px solid ${COLORS.borderCard}`,
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  };

  const resultCardStyle = (isActive, color) => ({
    padding: '32px',
    borderRadius: '16px',
    background: isActive ? `${color}08` : 'rgba(255, 255, 255, 0.02)',
    border: `1px solid ${isActive ? color : 'rgba(255, 255, 255, 0.05)'}`,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    transition: 'all 0.3s ease'
  });

  const sliderStyle = (color) => ({
    width: '100%',
    height: '6px',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.1)',
    outline: 'none',
    appearance: 'none',
    cursor: 'pointer',
    accentColor: color,
  });

  return (
    <section id="roi" style={sectionStyle}>
      <span style={{ ...TYPOGRAPHY.label, color: COLORS.brandPrimary, marginBottom: '16px' }}>Impacto Financeiro</span>
      <h2 style={{ ...TYPOGRAPHY.sectionHeadline, textAlign: 'center' }}>Projeção de Escala & <br/> <span style={TYPOGRAPHY.textGradient}>[lucratividade.]</span></h2>

      <div className="roi-grid" style={containerStyle}>
        <div style={cardStyle}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontWeight: 600, color: COLORS.textSecondary }}>Operações Mensais</span>
              <span style={{ color: COLORS.brandPrimary, fontWeight: 900, fontSize: '24px' }}>{orders}</span>
            </div>
            <input 
              type="range" 
              min="50" 
              max="2000" 
              value={orders} 
              onChange={(e) => setOrders(parseInt(e.target.value))}
              style={sliderStyle(COLORS.brandPrimary)}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontWeight: 600, color: COLORS.textSecondary }}>Ticket Médio (R$)</span>
              <span style={{ color: '#FFF', fontWeight: 900, fontSize: '24px' }}>R$ {ticket}</span>
            </div>
            <input 
              type="range" 
              min="50" 
              max="1000" 
              value={ticket} 
              onChange={(e) => setTicket(parseInt(e.target.value))}
              style={sliderStyle('#FFFFFF')}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={resultCardStyle(false, '#FFF')}>
            <span style={{ fontSize: '14px', color: COLORS.textSecondary, fontWeight: 600 }}>Faturamento Atual Estimado</span>
            <span style={{ fontSize: '32px', fontWeight: 900, color: '#FFF' }}>R$ {currentRevenue.toLocaleString('pt-BR')}</span>
          </div>

          <div style={resultCardStyle(true, COLORS.brandPrimary)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: COLORS.brandPrimary, fontWeight: 800, textTransform: 'uppercase' }}>Faturamento com SeeK (+40%)</span>
              <span style={{ background: COLORS.brandPrimary, color: '#000', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 900 }}>ALTA PERFORMANCE</span>
            </div>
            <span style={{ fontSize: '40px', fontWeight: 900, color: '#FFF' }}>R$ {seekRevenue.toLocaleString('pt-BR')}</span>
          </div>

          <div style={{ textAlign: 'center', marginTop: '12px' }}>
            <p style={{ color: COLORS.textSecondary, fontSize: '14px' }}>
              Ao automatizar com IA, você reduz custos operacionais e <br/> aumenta a conversão em canais digitais.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .roi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default ROICalculator;
