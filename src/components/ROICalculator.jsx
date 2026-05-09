import React, { useState } from 'react';
import { COLORS, TYPOGRAPHY, LAYOUT } from '../constants';

const ROICalculator = () => {
  const [orders, setOrders] = useState(100);
  const [ticket, setTicket] = useState(50);

  const currentRevenue = orders * ticket;
  const seekRevenue = currentRevenue * 1.4; // +40%
  const additionalGain = seekRevenue - currentRevenue;
  const roi = (additionalGain / 69) * 100; // Assuming R$69 cost as base

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
    padding: '32px',
    background: COLORS.bgCard,
    border: `1px solid ${COLORS.borderCard}`,
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const resultCardStyle = (isActive, color) => ({
    padding: '24px',
    borderRadius: '16px',
    background: isActive ? `${color}10` : 'rgba(255, 255, 255, 0.02)',
    border: `1px solid ${isActive ? color : 'rgba(255, 255, 255, 0.05)'}`,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
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
      <span style={{ ...TYPOGRAPHY.label, color: COLORS.bluePrimary, marginBottom: '16px' }}>Calculadora de ROI</span>
      <h2 style={{ ...TYPOGRAPHY.sectionHeadline, textAlign: 'center' }}>Quanto o SeeK gera para o seu negócio?</h2>

      <div className="roi-grid" style={containerStyle}>
        <div style={cardStyle}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontWeight: 600 }}>Pedidos/Agendamentos por mês</span>
              <span style={{ color: COLORS.bluePrimary, fontWeight: 800, fontSize: '20px' }}>{orders}</span>
            </div>
            <input 
              type="range" 
              min="20" 
              max="500" 
              value={orders} 
              onChange={(e) => setOrders(parseInt(e.target.value))}
              style={sliderStyle(COLORS.bluePrimary)}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontWeight: 600 }}>Ticket médio R$</span>
              <span style={{ color: COLORS.indigo, fontWeight: 800, fontSize: '20px' }}>R$ {ticket}</span>
            </div>
            <input 
              type="range" 
              min="20" 
              max="300" 
              value={ticket} 
              onChange={(e) => setTicket(parseInt(e.target.value))}
              style={sliderStyle(COLORS.indigo)}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={resultCardStyle(false)}>
              <div style={{ fontSize: '13px', color: COLORS.textSecondary }}>Receita atual</div>
              <div style={{ fontSize: '20px', fontWeight: 800 }}>R$ {currentRevenue.toLocaleString('pt-BR')}</div>
            </div>
            <div style={resultCardStyle(true, COLORS.success)}>
              <div style={{ fontSize: '13px', color: COLORS.textSecondary }}>Com SeeK (+40%)</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: COLORS.success }}>R$ {seekRevenue.toLocaleString('pt-BR')}</div>
            </div>
          </div>

          <div style={{ ...resultCardStyle(true, COLORS.success), padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', color: COLORS.textSecondary, fontWeight: 600 }}>Ganho adicional por mês</div>
            <div style={{ fontSize: '42px', fontWeight: 900, color: COLORS.success }}>R$ {additionalGain.toLocaleString('pt-BR')}</div>
          </div>

          <div style={resultCardStyle(false, COLORS.indigo)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '14px', color: COLORS.textSecondary }}>ROI do investimento</div>
              <div style={{ fontSize: '28px', fontWeight: 900, color: COLORS.indigo }}>{roi.toFixed(0)}%</div>
            </div>
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
